document.addEventListener("DOMContentLoaded", async function () {
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const btnPopup = document.querySelector(".btnLogin-popup");
    const loginButton = document.getElementById("loginBtn");
    const logoutButton = document.querySelector(".btn-logout");
    const overlay = document.getElementById("overlay");
    const startWorkoutBtn = document.getElementById("startWorkoutBtn");

    if (registerLink && loginLink) {
        registerLink.addEventListener("click", () => wrapper.classList.add("active"));
        loginLink.addEventListener("click", () => wrapper.classList.remove("active"));
    }

    if (btnPopup && overlay) {
        btnPopup.addEventListener("click", () => {
            wrapper.classList.add("active-popup");
            overlay.style.display = "block";
        });

        overlay.addEventListener("click", closePopup);
    }

    function closePopup() {
        wrapper.classList.remove("active-popup");
        overlay.style.display = "none";
    }

    let firebaseConfig;
    try {
        console.log("Fetching Firebase config...");
        const response = await fetch("/firebase-config.json");
        if (!response.ok) throw new Error("Failed to load Firebase config");

        firebaseConfig = await response.json();
        console.log("✅ Firebase config loaded successfully.");

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log("✅ Firebase initialized successfully.");
        }
    } catch (error) {
        console.error("❌ Firebase initialization error:", error);
        return;
    }

    const auth = firebase.auth();

    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("✅ User logged in:", user.email);
            localStorage.setItem("userId", user.uid);

            if (loginButton) {
                loginButton.textContent = "Logout";
                loginButton.classList.remove("btnLogin-popup");
                loginButton.style.pointerEvents = "auto";
                loginButton.addEventListener("click", logoutUser);
            }

            if (startWorkoutBtn) {
                startWorkoutBtn.removeAttribute("disabled");
                startWorkoutBtn.style.cursor = "pointer";
            }
        } else {
            console.log("❌ User is not logged in");
            localStorage.removeItem("userId");

            if (loginButton) {
                loginButton.textContent = "Login";
                loginButton.classList.add("btnLogin-popup");
                loginButton.removeEventListener("click", logoutUser);
                loginButton.style.pointerEvents = "auto";
            }

            if (startWorkoutBtn) {
                startWorkoutBtn.setAttribute("disabled", "true");
                startWorkoutBtn.style.cursor = "not-allowed";
            }
        }
    });

    function logoutUser() {
        auth.signOut().then(() => {
            console.log("✅ User logged out.");
            alert("You have been logged out.");
            window.location.href = "index.html";
        }).catch((error) => {
            console.error("❌ Logout error:", error);
        });
    }

    const loginForm = document.getElementById("login-form");
    loginForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("✅ Login successful", userCredential.user);
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error("❌ Login error:", error.message);
                alert("Login failed: " + error.message);
            });
    });

    const registerForm = document.getElementById("register-form");
    registerForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("✅ Registration successful", userCredential.user);
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error("❌ Registration error:", error.message);
                alert("Registration failed: " + error.message);
            });
    });

    startWorkoutBtn?.addEventListener("click", function (event) {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            event.preventDefault();
            alert("You must log in to start the workout!");
        } else {
            window.location.href = "workout.html";
        }
    });


    document.getElementById("workoutForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const muscle = document.getElementById("muscle").value;
        localStorage.setItem("selectedMuscle", muscle);
        window.location.href = "workout.html";
    });

    const workoutContainer = document.getElementById("workoutContainer");
    if (workoutContainer) {
        const selectedMuscle = localStorage.getItem("selectedMuscle");
        const exercises = workouts[selectedMuscle] || [];
        let currentExercise = 0;

        function showExercise(index) {
            if (index >= exercises.length) {
                workoutContainer.innerHTML = "<h2>Workout Completed! 🎉</h2>";
                return;
            }

            const exercise = exercises[index];

            if (!exercise) {
                console.error("❌ Exercise data missing.");
                return;
            }

            workoutContainer.innerHTML = `
                <h2 id="exerciseName">${exercise.name}</h2>
                <img id="exerciseImage" src="${exercise.gif}" alt="${exercise.name}">
                <p id="exerciseReps">${exercise.reps}</p>
                <button id="completeButton">Completed</button>
            `;

            document.getElementById("completeButton")?.addEventListener("click", function () {
                currentExercise++;
                showExercise(currentExercise);
            });
        }

        if (exercises.length > 0) {
            showExercise(currentExercise);
        } else {
            workoutContainer.innerHTML = "<h2>No exercises found for this muscle group.</h2>";
        }
    }
});
