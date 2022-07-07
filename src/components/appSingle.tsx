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

    // Converts muscle name to the class it belongs to.
    function muscle_to_class(muscle: string) {
        switch (muscle) {
            case "Adductor Magnus":
                return "hip-adductors";
            case "Adductors, Hip":
                return "hip-adductors";
            case "Brachialis":
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
    function removeColorClasses() {
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
        for (let focus_muscle of exercise[focus as keyof ExerciseClean]) {
            let el = document.getElementsByClassName(muscle_to_class(focus_muscle))
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(focus);
            }
        }
    }

    // Colors the muscles according to muscle functions in exercise.
    function colorMuscles(exercise: ExerciseClean | null) {
        if (exercise == null) {
            removeColorClasses()
            return
        }
        color(exercise, "target")
        color(exercise, "synergists")
        color(exercise, "dynamicStabilizers")
        color(exercise, "stabilizers")
        color(exercise, "antagonistStabilizer")
    }

    // Updates the div with the active exercise.
    function updateActive(event: any, value: ExerciseClean | null) {
        if (value == null) {
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
            })
        }
        colorMuscles(null)
        colorMuscles(value)
    }

    return(
        <>
            <div className="leftDiv">
            <React.StrictMode>
                <Search exer={activeExercise} onUpdate={updateActive} />
                <Active exer={activeExercise} />
            </React.StrictMode>
            </div>
            <div className="rightDiv">
            <React.StrictMode>
                <Model exer={activeExercise}/>
            </React.StrictMode>
            </div>
        </>
    )}