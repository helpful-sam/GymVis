import React, { useState } from 'react';
import ExerciseCardsHolder from '../workout/ExerciseCardsHolder';
import FocusSelector from '../workout/FocusSelector';
import ExerciseCleanVisib from '../interfaces/InterfaceExerciseCleanVisib';
import ModelWorkout from './MuscleModelDatabase';
import allExercises from '../Exercises'
import Exercise from '../interfaces/InterfaceExercise';
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

        console.log("Radio switched")
        // activeExercises.forEach((ex) => colorMusclesRadio(ex, radioValue))
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
                return ["Levator Scapulae"]
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
            case "upper-traps":
                return ["Trapezius, Upper"]
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
     * Adds the clicked exercise to the state of current active exercises.
     * @param _event
     * @param {ExerciseCleanVisib | null} exercise - The clicked exercise that is to
     * be added to the active exercises.
     */
    function updateActive(_event: any, exercise: ExerciseCleanVisib | null) {
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
     * @param {ExerciseCleanVisib} exercise - The exercise that is to be colored.
     * @param {string} focus - The exercise focus that is to be colored, e.g.
     * "target".
     */
     function colorMusclesRadio(exercise: ExerciseCleanVisib, focus: string) {
        color(exercise, focus)
    }

    /**
     * Colors the active radio focus of all active exercises.
     * @param {ExerciseCleanVisib[]} exerciseState - The state with curretn active
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


    function overlappingInArrays(exerciseFocusMuscles: string[] | string, wantedMuscles: string[]) {
        const contains = wantedMuscles.some((el) => {return exerciseFocusMuscles.includes(el)})

        return contains
    }


    function handleMuscleClick(event: any) {
        const classes = event.target.classList.value;
        const muscleClass = classes.replace("muscle", "").trim()
        const muscles = classToMuscle(muscleClass)
        const radioVal = radioValue as keyof ExerciseClean

        let actives = allExercises().filter((ex: ExerciseClean) => overlappingInArrays(ex[radioVal], muscles))
        console.log(actives)
        // console.log(muscles)
        setActiveExercise(actives)

        return
    }

    return (
        <>
            <div className="leftDiv">
                <React.StrictMode>
                    <ExerciseCardsHolder actives={activeExercises} onRemove={onRemove} toggleVisibility={toggleVisibility} />
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