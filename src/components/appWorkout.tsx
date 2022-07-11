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

    function onRemove(exer: ExerciseClean) {
        if (exer.label === "") {
            return
        } else {
            setActiveExercise(activeExercises.filter((ex) => ex.label !== exer.label))
        }
        removeAllColorClasses()
        colorStateRadio(activeExercises.filter((ex) => ex.label !== exer.label), radioValue)
    }

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

    function handleRadioChange(event: any, value: any) {
        setRadioValue(value);
        removeAllColorClasses()
        activeExercises.forEach((ex) => colorMusclesRadio(ex, value))
    }

    // Converts muscle name to the class it belongs to.
    function muscle_to_class(muscle: string) {
        switch (muscle) {
            case "Adductor Magnus":
                return "hip-adductors";
            case "Adductors, Hip":
                return "hip-adductors";
            case "Brachialis":
                return "biceps";
            case "Biceps Brachii, Short Head":
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

    // Removes all muscle coloring.
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

    // Colors the appropiate muscles by adding a "target", etc. class to the element.
    function color(exercise: ExerciseClean, focus: string) {
        for (let focus_muscle of exercise[focus as keyof ExerciseClean] as string[]) {
            if (exercise.visib) {
                let el = document.getElementsByClassName(muscle_to_class(focus_muscle))
                for (var i = 0; i < el.length; i++) {
                    el[i].classList.add(focus);
                }
            }

        }
    }

    // Colors the muscles according to muscle functions in exercise.
    function colorMusclesRadio(exercise: ExerciseClean, radioState: string) {
        color(exercise, radioState)
    }

    // Updates the div with the active exercise cards.
    function updateActive(event: any, value: ExerciseClean | null) {
        if (value == null) {
            return
        } else {
            const inState = activeExercises.some(elem => {
                return JSON.stringify(value) === JSON.stringify(elem)
            });
            if (!inState) {
                const newEx = {
                    label: value["label"],
                    target: value["target"],
                    synergists: value["synergists"],
                    dynamicStabilizers: value["dynamicStabilizers"],
                    stabilizers: value["stabilizers"],
                    antagonistStabilizer: value["antagonistStabilizer"],
                    prep: value["prep"],
                    exec: value["exec"],
                    mechanics: value["mechanics"],
                    force: value["force"],
                    url: value["url"],
                    visib: true
                }
                setActiveExercise([...activeExercises, newEx]);
                colorStateRadio([...activeExercises, newEx], radioValue);
            }
        }
    }

    function colorStateRadio(exerciseState: ExerciseClean[], radioValue: string) {
        if (radioValue === "target") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, "target")
            })
        } else if (radioValue === "synergists") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, "synergists")
            })
        } else if (radioValue === "stabilizers") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, "stabilizers")
            })
        } else if (radioValue === "dynamicStabilizers") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, "dynamicStabilizers")
            })
        } else if (radioValue === "antagonistStabilizer") {
            exerciseState.forEach((ex) => {
                colorMusclesRadio(ex, "antagonistStabilizer")
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