const workouts = { 
    biceps: [
        { 
            name: "Alternate Bicep Curls", 
            img: "assets/bicep/alternate-bicep-curl.gif", 
            reps: "4 sets of 12",
            description: "This exercise is a single arm version of a biceps curl." 
        },
        { 
            name: "Alternate Hammer Curls", 
            img: "assets/bicep/alternate-hammer-curl.gif", 
            reps: "4 sets of 10", 
            description: "This exercise uses a hammering (up and down) motion to isolate the biceps."
        },
        { 
            name: "Alternate Incline Curls", 
            img: "assets/bicep/bicep-curl-with-deadlift.gif", 
            reps: "4 sets of 12", 
            description: "This exercise uses an incline bench to change your bodys position as you perform bicep curls."
        },
        { 
            name: "Bicep Curl with Deadlift", 
            img: "assets/bicep/alternate-incline-curl.gif", 
            reps: "4 sets of 12", 
            description: "This is an advanced exercise. This exercise combines a bicep curl with a deadlift."
        },
        { 
            name: "Bicep Curls", 
            img: "assets/bicep/bicep-curls.gif", 
            reps: "4 sets of 12", 
            description: "This version of a biceps curl uses both arms at the same time."
        },
        { 
            name: "Cable Preacher Curls", 
            img: "assets/bicep/cable-preacher-curl.gif", 
            reps: "4 sets of 12", 
            description: "This exercise uses an incline bench to change your bodys position as you perform bicep curls."
        },
        { 
            name: "Close Grip EZ Bar Curls", 
            img: "assets/bicep/close-grip-ez-bar-curls.gif", 
            reps: "4 sets of 10", 
            description: "This exercise uses a cambered EZ or curl bar to isolate the biceps during a curl."
        },
        { 
            name: "Concentration Curls", 
            img: "assets/bicep/concentration-curls.gif", 
            reps: "4 sets of 10", 
            description: "Concentration exercises limit your range of movement to increase the effectiveness of the movement."
        },
        { 
            name: "Cross Body Hammer Curls", 
            img: "assets/bicep/alternate-incline-curl.gif", 
            reps: "4 sets of 12", 
            description: "This exercise targets the biceps using a crossing motion rather than a standard curl."
        }
    ],
    chest: [
        { 
            name: "Bench Press", 
            img: "assets/chest/bench-press.gif", 
            reps: "4 sets of 12", 
            description: "The mighty bench press is a great exercise for building a powerful chest. The bench press is one of the power exercises, known to be very effective for building body mass. Learning how to do a proper bench press is well worth the effort."
        },
        { 
            name: "Butterfly Machine", 
            img: "assets/chest/butterfly-machine.gif", 
            reps: "4 sets of 10", 
            description: "The butterfly machine is a simple way to target your chest. This is a machine exercise, so it's very easy to do."
        },
        { 
            name: "Bench Press Machine", 
            img: "assets/chest/bench-press-machine.gif", 
            reps: "4 sets of 12", 
            description: "This is a primary exercise for the Pectorals (chest muscles). Many people prefer this exercise to the standard Bench Press because if offers more stability for people new to exercise."
        },
        { 
            name: "Cable Crossover", 
            img: "assets/chest/cable-crossover.gif", 
            reps: "4 sets of 10", 
            description: "The cable crossover is a good exercise for targeting your inner chest. It does require that you have 2 cable machines facing each other, but this is a common setup in most gyms."
        },
        { 
            name: "Chest Dips", 
            img: "assets/chest/chest-dips.gif", 
            reps: "4 sets of 10", 
            description: "The chest dip is a variation of the tricep dip that focuses more on your chest. Even though it uses a dip machine, it is a body weight only exercise."
        },
        { 
            name: "Close Push Ups", 
            img: "assets/chest/close-push-ups.gif", 
            reps: "4 sets of 10", 
            description: "These are variations on Push Ups, one of the best exercise for muscles of the chest (pectorals), arms (bicep and triceps) and core development. The core muscles are the rectus abdomen and obliques which support the spine."
        },
        { 
            name: "Decline Bench Press", 
            img: "assets/chest/decline-bench-press.gif", 
            reps: "4 sets of 12", 
            description: "The decline bench press is a variation of the bench press performed on a incline bench. It targets the lower part of your chest."
        },
        { 
            name: "Decline Dumbell Bench Press", 
            img: "assets/chest/decline-dumbbell-bench-press.gif", 
            reps: "4 sets of 12", 
            description: "The dumbbell incline bench press targets your lower chest. It incorporates your stability muscles more than the standard incline bench press."
        },
        { 
            name: "Dumbbell Bench Press", 
            img: "assets/chest/dumbbell-bench-press.gif", 
            reps: "4 sets of 10", 
            description: "The dumbbell bench press is a great alternative to the standard bench press. You can do the dumbbell bench press without relying on a spotter. It's also good to alternate between the standard bench press and the dumbbell bench press so your muscles don't get too used to either."
        },
        { 
            name: "Dumbbell Flys", 
            img: "assets/chest/dumbbell-flys.gif", 
            reps: "4 sets of 12", 
            description: "The dumbbell fly targets your pectorals with far more focus than the standard dumbbell bench press. You're keeping your arms relatively straight throughout the exercise so you wont use your triceps as much. It also focuses more on the inner part of your pecs."
        },
        { 
            name: "Incline Press", 
            img: "assets/chest/incline-press.gif", 
            reps: "4 sets of 12", 
            description: "This is a primary exercise to build the pectorals (chest muscles)."
        }
    ],
    back: [
        { 
            name: "Back Flys", 
            img: "assets/back/back-flys.gif", 
            reps: "4 sets of 10", 
            description: "Back Flyes will strengthen your upper back and improve your posture."
        },
        { 
            name: "Barbell Rear Delt Row", 
            img: "assets/back/barbell-rear-delt-row.gif", 
            reps: "4 sets of 12", 
            description: "A good workout that tergets your middle back and posterior deltoids."
        },
        { 
            name: "Barbell Shrugs", 
            img: "assets/back/barbell-shrugs.gif", 
            reps: "4 sets of 10", 
            description: "This is an exercise for the traps."
        },
        { 
            name: "Barbell Upright Rows", 
            img: "assets/back/barbell-upright-rows.gif", 
            reps: "4 sets of 12", 
            description: "The barbell upright row is a standard upright row exercise that targets your traps and deltoids."
        },
        { 
            name: "Body Row", 
            img: "assets/back/body-row.gif", 
            reps: "4 sets of 10", 
            description: "This is a good overall all exercise for the chest, back and core muscles. You should use a Smith Machine or stable tall weight rack for this exercise."
        },
        { 
            name: "Climbers Chip Up", 
            img: "assets/back/climbers-chin-up.gif", 
            reps: "4 sets of 10", 
            description: "This variation on the basic chin up is a great exercise for people who rock climb."
        },
        { 
            name: "Close Grip Lat Pulldown", 
            img: "assets/back/close-grip-lat-pulldown.gif", 
            reps: "4 sets of 12", 
            description: "This is a classic body builder exercise to build your lower Lats (back muscles)."
        },
        { 
            name: "Gironda Sternum Chins", 
            img: "assets/back/gironda-sternum-chins.gif", 
            reps: "4 sets of 10", 
            description: "This is a variation of the basic Chin Up that focus more on the lats. Your goal is to touch the bar at the sternum (mid chest)."
        },
        { 
            name: "Hyperextensions", 
            img: "assets/back/hyperextensions.gif", 
            reps: "4 sets of 10", 
            description: "This exercise not only adds strength but also flexibility to the back and core muscles."
        },
        { 
            name: "Rear Deltoid Row", 
            img: "assets/back/rear-deltoid-row.gif", 
            reps: "4 sets of 12", 
            description: "Rear Deltoid Rows are a simple, yet effective exercise for targeting your lats and rear deltoids."
        }
    ],
    triceps: [
        { 
            name: "Barbell Incline Extension", 
            img: "assets/tricep/barbell-incline-extension.gif", 
            reps: "4 sets of 10", 
            description: "This version of a triceps extension uses gravity to increase the resistance of the exercise."
        },
        { 
            name: "Bench Dips", 
            img: "assets/tricep/bench-dips.gif", 
            reps: "4 sets of 10", 
            description: "This exercise is one of the most basic and still one of the best for building the triceps (muscles on the back of the arm)."
        },
        { 
            name: "Cable Incline Extension", 
            img: "assets/tricep/cable-incline-extension.gif", 
            reps: "4 sets of 12", 
            description: "This exercise uses cables to isolate and work the triceps (muscles on the back of the arms)."
        },
        { 
            name: "Close Push Up", 
            img: "assets/tricep/close-push-up.gif", 
            reps: "4 sets of 10", 
            description: "This version of the Pushup isolates the tricep (back of the arm) muscles."
        },
        { 
            name: "Decline Close Grip Bench to Skull Crusher", 
            img: "assets/tricep/decline-close-grip-bench-to-skull-crusher.gif", 
            reps: "4 sets of 12", 
            description: "This exercise combines a close grip bench press with triceps extension."
        },
        { 
            name: "Decline Extension", 
            img: "assets/tricep/decline-extension.gif", 
            reps: "4 sets of 12", 
            description: "This exercise combines a decline bench and dumbbells to target the tricpes."
        },
        { 
            name: "Incline Extension", 
            img: "assets/tricep/incline-extensions.gif", 
            reps: "4 sets of 12", 
            description: "This version of the triceps extension uses an incline bench."
        },
        { 
            name: "Incline Pushdown", 
            img: "assets/tricep/incline-pushdown.gif", 
            reps: "4 sets of 10", 
            description: "This exercise uses cables to isolate and work the triceps (muscles on the back of the arms)."
        },
        { 
            name: "Kneeling Concentration Extension", 
            img: "assets/tricep/kneeling-concentration-extension.gif", 
            reps: "4 sets of 10", 
            description: "Concentration exercises limit your range of movement to increase the effectiveness of the movement."
        },
        { 
            name: "Lying Close Grip Press to Chin", 
            img: "assets/tricep/lying-close-grip-press-to-chin.gif", 
            reps: "4 sets of 12", 
            description: "This exercise is a classic for building the triceps."
        },
        { 
            name: "Lying Extension", 
            img: "assets/tricep/lying-extension.gif", 
            reps: "4 sets of 10", 
            description: "This exercise uses gravity to increase the resistance of the weight."
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const muscle = localStorage.getItem("selectedMuscle");
    const workoutContainer = document.getElementById("workoutContainer");

    if (!workoutContainer) {
        console.error("❌ workoutContainer not found!");
        return;
    }

    if (!muscle || !workouts[muscle]) {
        workoutContainer.innerHTML = "<h2 class='text-box'>No workout selected. Please go back and choose a muscle group.</h2>";
        return;
    }

  
    let storedDuration = localStorage.getItem("workoutDuration");

    console.log("🛠️ Raw workoutDuration from localStorage:", storedDuration);

    if (!storedDuration || isNaN(storedDuration)) {
        console.warn("⚠️ No valid workout duration found. Using default (30 min).");
        storedDuration = "30";
    }

    let workoutDuration = parseInt(storedDuration, 10);
    console.log("🔢 Parsed workoutDuration:", workoutDuration);

    let exercises = [...workouts[muscle]];
    console.log("📥 Total Exercises Available:", exercises.length);

    function getHalfExercises(exerciseList) {
        let halfCount = Math.ceil(exerciseList.length / 2);
        return exerciseList.slice(0, halfCount);
    }

    if (workoutDuration >= 55) {
        console.log("🟢 Showing ALL exercises for long workout.");
    } else if (workoutDuration < 35) {
        exercises = getHalfExercises(exercises);
        console.log("🟢 Showing HALF exercises for short workout.");
    }

    console.log("📤 Final Exercises Count:", exercises.length);

    let currentExerciseIndex = 0;

    function displayExercise() {
        if (currentExerciseIndex < exercises.length) {
            const exercise = exercises[currentExerciseIndex];

            workoutContainer.innerHTML = `
                <div class="workout-box">
                    <div class="workout-info">
                        <span class="muscle-tag">Muscle Group</span>
                        <h2>${muscle.toUpperCase()}</h2>
                        <p>${currentExerciseIndex + 1} Exercise</p>
                    </div>
                    <div class="workout-main">
                        <img id="exerciseImage" src="${exercise.img}" alt="${exercise.name}" class="workout-gif">
                        <h2 id="exerciseName">${exercise.name}</h2>
                        <p id="exerciseReps" class="workout-reps">${exercise.reps}</p>
                        <p id="exerciseDescription" class="workout-description">${exercise.description}</p>
                        <button id="completeButton">Complete</button>
                    </div>
                </div>
            `;
        } else {
            workoutContainer.innerHTML = `
                <div class="workout-complete">
                    <h1>🎉 COMPLETED! 🎉</h1>
                    <p>Great job! You've finished today's workout.</p>
                    <button id="backToMain">Go Back to Main Page</button>
                </div>
            `;
        }
    }

    workoutContainer.addEventListener("click", function (event) {
        if (event.target.id === "completeButton") {
            currentExerciseIndex++;
            displayExercise();
        } else if (event.target.id === "backToMain") {
            window.location.href = "index.html";
        }
    });

    displayExercise();
});
