import React, { useState } from 'react';
import ExerciseCardsHolder from './ExerciseCardsHolder';
import FocusSelector from './FocusSelector';
import ModelWorkout from './MuscleModelWorkout';
import SearchWorkout from './SearchbarWorkout';

// Exercise interface.
interface ExerciseClean {
    label: string;
    target: string[];
    synergists: string[];
    dynamicStabilizers: string[];
    stabilizers: string[];
    antagonistStabilizer: string[];
    prep: string;
    exec: string;
    mechanics: string;
    force: string;
    url: string;
    visib?: boolean;
}

export default function AppSingle() {
    // Sets default state & state update function.
    const [activeExercises, setActiveExercise] = useState([] as ExerciseClean[])

    /**
     * Removes the clicked on exercise from the state & updates colors in model.
     * @param {ExerciseClean} exer - The exercise that is to be removed.
     */
    function onRemove(exer: ExerciseClean) {
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
     * @param {ExerciseClean} exer - The exercise that is to be hidden or shown.
     */
    function toggleVisibility(exer: ExerciseClean) {
        if (exer.label === "") {
            return
        } else {
            let newActiveExercises = [] as ExerciseClean[]
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
        activeExercises.forEach((ex) => colorMusclesRadio(ex, radioValue))
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
     * @param {ExerciseClean} exercise - An exercise object that will be colored.
     * @param {string} focus - The focus of the exercise that needs to be
     * colored, e.g. "target", "stabilizer", etc.
     */
    function color(exercise: ExerciseClean, focus: string) {
        for (let focus_muscle of exercise[focus as keyof ExerciseClean] as string[]) {
            if (exercise.visib) {
                let el = document.getElementsByClassName(muscleToClass(focus_muscle))
                for (var i = 0; i < el.length; i++) {
                    el[i].classList.add(focus);
                }
            }

        }
    }

    /**
     * Adds the clicked exercise to the state of current active exercises.
     * @param _event
     * @param {ExerciseClean | null} exercise - The clicked exercise that is to
     * be added to the active exercises.
     */
    function updateActive(_event: any, exercise: ExerciseClean | null) {
        if (exercise == null) {
            return
        } else {
            const inState = activeExercises.some(elem => {
                return JSON.stringify(exercise) === JSON.stringify(elem)
            });
            if (!inState) {
                const newEx = {
                    label: exercise["label"],
                    target: exercise["target"],
                    synergists: exercise["synergists"],
                    dynamicStabilizers: exercise["dynamicStabilizers"],
                    stabilizers: exercise["stabilizers"],
                    antagonistStabilizer: exercise["antagonistStabilizer"],
                    prep: exercise["prep"],
                    exec: exercise["exec"],
                    mechanics: exercise["mechanics"],
                    force: exercise["force"],
                    url: exercise["url"],
                    visib: true
                }
                setActiveExercise([...activeExercises, newEx]);
                colorStateRadio([...activeExercises, newEx], radioValue);
            }
        }
    }

    /**
     * Colors the active radio focus of a given exercise.
     * @param {ExerciseClean} exercise - The exercise that is to be colored.
     * @param {string} focus - The exercise focus that is to be colored, e.g.
     * "target".
     */
     function colorMusclesRadio(exercise: ExerciseClean, focus: string) {
        color(exercise, focus)
    }

    /**
     * Colors the active radio focus of all active exercises.
     * @param {ExerciseClean[]} exerciseState - The state with curretn active
     * exercises.
     * @param {string} radioValue - The radio state of active focus.
     */
    function colorStateRadio(exerciseState: ExerciseClean[], radioValue: string) {
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

    return (
        <>
            <div className="leftDiv">
                <React.StrictMode>
                    <SearchWorkout exer={activeExercises} onUpdate={updateActive} />
                    <ExerciseCardsHolder actives={activeExercises} onRemove={onRemove} toggleVisibility={toggleVisibility} />
                </React.StrictMode>
            </div>
            <div className="rightDiv">
                <React.StrictMode>
                    <FocusSelector radioValue={radioValue} handleRadioChange={handleRadioChange} />
                    <ModelWorkout />
                </React.StrictMode>
            </div>
        </>
    )
}