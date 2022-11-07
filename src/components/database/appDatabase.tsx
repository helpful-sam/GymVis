import React, { useState } from 'react';
import ExerciseCardsHolderDatabase from './ExerciseCardHolderDatabase';
import FocusSelector from '../workout/FocusSelector';
import ExerciseCleanVisib from '../interfaces/InterfaceExerciseCleanVisib';
import ModelWorkout from './MuscleModelDatabase';
import allExercises from '../Exercises'
import ExerciseClean from '../interfaces/InterfaceExerciseClean';

export default function AppDatabase() {
    // Sets default state & state update function.
    const [activeExercises, setActiveExercise] = useState([] as ExerciseCleanVisib[])

    /**
     * Removes the clicked on exercise from the state & updates colors in model.
     * @param {ExerciseCleanVisib} exer - The exercise that is to be removed.
     */
    function onRemove(exer: ExerciseCleanVisib) {
        if (exer.label === "") {
            return
        } else {
            setActiveExercise(activeExercises.filter((ex) => ex.label !== exer.label))
        }
        removeAllColorClasses()
        colorStateRadio(activeExercises.filter((ex) => ex.label !== exer.label), radioValue)
    }

    /**
     * Toggles visibility of model colors of the clicked on exercise.
     * @param {ExerciseCleanVisib} exer - The exercise that is to be hidden or shown.
     */
    function toggleVisibility(exer: ExerciseCleanVisib) {
        if (exer.label === "") {
            return
        } else {
            let newActiveExercises = [] as ExerciseCleanVisib[]
            for (let exercise of activeExercises) {
                if (exercise.label === exer.label) {
                    if (exercise.visib) {
                        exercise.visib = false
                    } else {
                        exercise.visib = true
                    }
                    newActiveExercises = [...newActiveExercises, exercise]
                } else {
                    newActiveExercises = [...newActiveExercises, exercise]
                }
            }
            setActiveExercise(newActiveExercises)
            handleRadioChange("a", radioValue)
        }
    }

    const [radioValue, setRadioValue] = useState("target")

    /**
     * Handles the change in radio by only showing the active radio selection.
     * @param _event
     * @param {string} radioValue - The new radio value.
     */
    function handleRadioChange(_event: any, radioValue: string) {
        setRadioValue(radioValue);
        removeAllColorClasses()
        setActiveExercise([])
    }

    /**
     * Converts muscle name to the class it belongs to.
     * @param muscle - A muscle name used in the exercise dictionaries.
     * @returns {string} - The name of the class that represents the muscle name.
     */
    function muscleToClass(muscle: string): string {
        switch (muscle) {
            case "Adductor Magnus":
                return "hip-adductors";
            case "Adductors, Hip":
                return "hip-adductors";
            case "Brachialis":
                return "biceps";
            case "Biceps Brachii, Short Head":
                return "biceps";
            case "Biceps Brachii":
                return "biceps";
            case "Brachioradialis":
                return "forearms";
            case "Deltoid, Anterior":
                return "front-delts";
            case "Deltoid, Lateral":
                return "side-delts";
            case "Deltoid, Posterior":
                return "rear-delts";
            case "Erector Spinae":
                return "spinal-erectors";
            case "Gracilis":
                return "hip-adductors";
            case "Gastrocnemius":
                return "calves";
            case "Gluteus Medius":
                return "hip-flexors";
            case "Gluteus Minimus":
                return "hip-flexors";
            case "Gluteus Maximus":
                return "glutes";
            case "Hamstrings":
                return "hamstrings";
            case "Infraspinatus":
                return "rotator-cuff";
            case "Iliopsoas":
                return "hip-flexors";
            case "Latissimus Dorsi":
                return "lats-and-teres-major";
            case "Levator Scapulae":
                return "upper-traps";
            case "Obliques":
                return "serratus-and-obliques";
            case "Pectoralis Major, Sternal":
                return "lower-chest";
            case "Pectoralis Major, Clavicular":
                return "upper-chest";
            case "Pectineus":
                return "hip-flexors";
            case "Quadriceps":
                return "quads";
            case "Rhomboids":
                return "middle-traps";
            case "Rectus Abdominis":
                return "abdominals";
            case "Sartorius":
                return "hip-flexors";
            case "Soleus":
                return "calves";
            case "Supraspinatus":
                return "rotator-cuff";
            case "Serratus Anterior":
                return "serratus-and-obliques";
            case "Serratus Anterior, Inferior Digitations":
                return "serratus-and-obliques";
            case "Tensor Fasciae Latae":
                return "hip-flexors";
            case "Trapezius, Middle":
                return "middle-traps";
            case "Trapezius, Upper":
                return "upper-traps";
            case "Trapezius, Lower":
                return "lower-traps";
            case "Triceps Brachii":
                return "triceps";
            case "Triceps, Long Head":
                return "triceps";
            case "Teres Major":
                return "lats-and-teres-major";
            case "Wrist Extensors":
                return "forearms";
            case "Wrist Flexors":
                return "forearms";
            default:
                return "undefined";
        }
    }

    /**
     * Converts muscle class to its muscle name.
     * @param muscleClass - A muscle name used in the exercise dictionaries.
     * @returns {string} - The name of the class that represents the muscle name.
     */
     function classToMuscle(muscleClass: string): string[] {
        switch (muscleClass) {
            case "hip-adductors":
                return ["Adductor Magnus", "Adductors, Hip", "Gracilis"]
            case "biceps":
                return ["Brachialis", "Biceps Brachii, Short Head", "Biceps Brachii"]
            case "forearms":
                return ["Brachioradialis", "Wrist Extensors", "Wrist Flexors"]
            case "front-delts":
                return ["Deltoid, Anterior"]
            case "side-delts":
                return ["Deltoid, Lateral"]
            case "rear-delts":
                return ["Deltoid, Posterior"]
            case "spinal-erectors":
                return ["Erector Spinae"]
            case "calves":
                return ["Gastrocnemius", "Soleus"]
            case "hip-flexors":
                return ["Gluteus Medius", "Gluteus Minimus", "Iliopsoas", "Pectineus", "Sartorius", "Tensor Fasciae Latae"]
            case "glutes":
                return ["Gluteus Maximus"]
            case "hamstrings":
                return ["Hamstrings"]
            case "rotator-cuff":
                return ["Infraspinatus", "Supraspinatus"]
            case "lats-and-teres-major":
                return ["Latissimus Dorsi", "Teres Major"]
            case "upper-traps":
                return ["Levator Scapulae", "Trapezius, Upper"]
            case "serratus-and-obliques":
                return ["Obliques", "Serratus Anterior", "Serratus Anterior, Inferior Digitations"]
            case "lower-chest":
                return ["Pectoralis Major, Sternal"]
            case "upper-chest":
                return ["Pectoralis Major, Clavicular"]
            case "quads":
                return ["Quadriceps"]
            case "middle-traps":
                return ["Rhomboids", "Trapezius, Middle"]
            case "abdominals":
                return ["Rectus Abdominis"]
            case "lower-traps":
                return ["Trapezius, Lower"]
            case "triceps":
                return ["Triceps Brachii", "Triceps, Long Head"]
            default:
                return ["undefined"];
        }
    }

    /**
     * Removes all coloring from the model.
     */
    function removeAllColorClasses() {
        const muscles: Element[] = Array.from(document.getElementsByClassName("muscle"));
        muscles.forEach((m: Element) => {
            m.classList.remove("target")
            m.classList.remove("synergists")
            m.classList.remove("dynamicStabilizers")
            m.classList.remove("stabilizers")
            m.classList.remove("antagonistStabilizer")
        });
    }

    /**
     * Colors the worked muscles of a given focus of a given exercise.
     * @param {ExerciseCleanVisib} exercise - An exercise object that will be colored.
     * @param {string} focus - The focus of the exercise that needs to be
     * colored, e.g. "target", "stabilizer", etc.
     */
    function color(exercise: ExerciseCleanVisib, focus: string) {
        for (let focus_muscle of exercise[focus as keyof ExerciseCleanVisib] as string[]) {
            if (exercise.visib) {
                let el = document.getElementsByClassName(muscleToClass(focus_muscle))
                for (var i = 0; i < el.length; i++) {
                    el[i].classList.add(focus);
                }
            }

        }
    }

    /**
     * Colors the active radio focus of a given exercise.
     * @param {ExerciseCleanVisib} exercise - The exercise that is to be colored.
     * @param {string} focus - The exercise focus that is to be colored, e.g.
     * "target".
     */
     function colorMusclesRadio(exercise: ExerciseCleanVisib, focus: string) {
        color(exercise, focus)
    }

    /**
     * Colors the active radio focus of all active exercises.
     * @param {ExerciseCleanVisib[]} exerciseState - The state with current active
     * exercises.
     * @param {string} radioValue - The radio state of active focus.
     */
    function colorStateRadio(exerciseState: ExerciseCleanVisib[], radioValue: string) {
        if (radioValue === "target") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, radioValue)
            })
        } else if (radioValue === "synergists") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, radioValue)
            })
        } else if (radioValue === "stabilizers") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, radioValue)
            })
        } else if (radioValue === "dynamicStabilizers") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, radioValue)
            })
        } else if (radioValue === "antagonistStabilizer") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, radioValue)
            })
        } else {
            // Place to add "all" to show everything.
            return
        }
    }

    /**
    * Checks if an item from the wantedMuscles array is present in the
    * exerciseFocusMuscles array.
    *
    * @param {string[]} exerciseFocusMuscles - The array of muscles an exercises
    * works on, on the specific focus (target, synergist, etc.)
    * @param {string[]} wantedMuscles - An array of muscles who's exercises are
    * to be shown
    * @returns {boolean} - true if there are overlapping muscles, false
    * otherwise.
    */
    function overlappingInArrays(exerciseFocusMuscles: string[] | string, wantedMuscles: string[]): boolean {
        const contains = wantedMuscles.some((el) => {return exerciseFocusMuscles.includes(el)})

        return contains
    }

    /**
     * Handles clicking of muscle in database page. The muscle that gets clicked
     * will get highlighted and all exercises that have the clicked muscles as
     * target/ synergist/ stabilizer (depending on the radioValue) will get
     * shown.
     *
     * @param {any} event - Event that automatically gets passed when clicking.
     */
    function handleMuscleClick(event: any) {
        const classes = event.target.classList.value;
        const muscleClass = classes.replace("muscle", "").trim()
        removeAllColorClasses()
        let els = document.getElementsByClassName(muscleClass)
        for (var i = 0; i < els.length; i++) {
            els[i].classList.add(radioValue);
        }
        // Gets an array of muscle names that will be used to obtain list of
        // exercises that target the muscles on the focus of the current radio
        // value.
        const muscles = classToMuscle(muscleClass)
        // Gets an array of exercises that will be shown.
        const radioVal = radioValue as keyof ExerciseClean
        let actives = allExercises().filter((ex: ExerciseClean) => overlappingInArrays(ex[radioVal], muscles))
        // Shows the exercises.
        setActiveExercise(actives)
    }

    return (
        <>
            <div className="leftDiv">
                <React.StrictMode>
                    <ExerciseCardsHolderDatabase actives={activeExercises} onRemove={onRemove} toggleVisibility={toggleVisibility} />
                </React.StrictMode>
            </div>
            <div className="rightDiv">
                <React.StrictMode>
                    <FocusSelector radioValue={radioValue} handleRadioChange={handleRadioChange} />
                    <ModelWorkout handleMuscleClick={handleMuscleClick} />
                </React.StrictMode>
            </div>
        </>
    )
}