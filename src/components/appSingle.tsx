import React, { useState } from 'react';
import Active from './ActiveExercise';
import Model from './MuscleModel';
import Search from './Searchbar';

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
}

export default function AppSingle() {
    // Sets default state & state update function.
    const [activeExercise, setActiveExercise] = useState(
        {
            label: "",
            target: [""],
            synergists: [""],
            dynamicStabilizers: [""],
            stabilizers: [""],
            antagonistStabilizer: [""],
            prep: "",
            exec: "",
            mechanics: "",
            force: "",
            url: "",
        }
    )

    /**
     * Converts muscle name to the class it belongs to.
     * @param {string} muscle - A muscle name used in the exercise dictionaries.
     * @returns {string} - The name of the class that represents the muscle name.
     */
    function muscle_to_class(muscle: string): string {
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
        for (let focus_muscle of exercise[focus as keyof ExerciseClean]) {
            let el = document.getElementsByClassName(muscle_to_class(focus_muscle))
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(focus);
            }
        }
    }

    /**
     * Colors every muscle of an exercise.
     * @param {ExerciseClean | null} exercise - The exercise whose muscles are
     * to be colored.
     */
    function colorMuscles(exercise: ExerciseClean | null) {
        if (exercise == null) {
            removeAllColorClasses()
            return
        }
        color(exercise, "target")
        color(exercise, "synergists")
        color(exercise, "dynamicStabilizers")
        color(exercise, "stabilizers")
        color(exercise, "antagonistStabilizer")
    }

    /**
     * Updates the left div & model with the current active exercise.
     * @param _event
     * @param {ExerciseClean | null} exercise - The clicked exercise that is to
     * be updated.
     */
    function updateActive(_event: any, exercise: ExerciseClean | null) {
        if (exercise == null) {
            setActiveExercise({
                label: "",
                target: [""],
                synergists: [""],
                dynamicStabilizers: [""],
                stabilizers: [""],
                antagonistStabilizer: [""],
                prep: "",
                exec: "",
                mechanics: "",
                force: "",
                url: "",
            })
        } else {
            setActiveExercise({
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
            })
        }
        colorMuscles(null)
        colorMuscles(exercise)
    }

    return (
        <>
            <div className="leftDiv">
                <React.StrictMode>
                    <Search exer={activeExercise} onUpdate={updateActive} />
                    <Active exer={activeExercise} />
                </React.StrictMode>
            </div>
            <div className="rightDiv">
                <React.StrictMode>
                    <Model exer={activeExercise} />
                </React.StrictMode>
            </div>
        </>
    )
}