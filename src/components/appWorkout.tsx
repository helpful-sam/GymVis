import React, { useState } from 'react';
import ExerciseCardsHolder from './ExerciseCardsHolder';
import Model from './MuscleModel';
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
}

export default function AppSingle() {
    // Sets default state & state update function.
    const [activeExercises, setActiveExercise] = useState(
        [] as ExerciseClean[]
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
            removeAllColorClasses()
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
            return
        } else {
            const inState = activeExercises.some(elem =>{
                return JSON.stringify(value) === JSON.stringify(elem)});
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
                }
                setActiveExercise([...activeExercises, newEx])
            }
        }
        colorMuscles(value)

    }

    function removeMuscleColorClasses(muscle: string, focus: string) {
        const muscles: Element[] = Array.from(document.getElementsByClassName(muscle_to_class(muscle)));
        muscles.forEach((m: Element) => {
            m.classList.remove(focus)
        });
    }

    // Removes all muscle coloring.
    function removeExerColorClasses(exer: ExerciseClean) {
        exer.target.forEach((m) => removeMuscleColorClasses(m, "target"));
        exer.synergists.forEach((m) => removeMuscleColorClasses(m, "synergists"));
        exer.stabilizers.forEach((m) => removeMuscleColorClasses(m, "stabilizers"));
        exer.dynamicStabilizers.forEach((m) => removeMuscleColorClasses(m, "dynamicStabilizers"));
        exer.antagonistStabilizer.forEach((m) => removeMuscleColorClasses(m, "antagonistStabilizer"));
    }

    function recolorState(exerciseArray: ExerciseClean[]) {
        exerciseArray.forEach((exer) => colorMuscles(exer))
    }

    function onRemove(exer: ExerciseClean) {
        if (exer.label === "") {
            return
        } else {
            setActiveExercise(activeExercises.filter((ex) => ex.label !== exer.label))
        }
        colorMuscles(null)
        recolorState(activeExercises.filter((ex) => ex.label !== exer.label))
    }

    return(
        <>
            <div className="leftDiv">
            <React.StrictMode>
                <SearchWorkout exer={activeExercises} onUpdate={updateActive} />
                <ExerciseCardsHolder actives={activeExercises} onRemove={onRemove}/>
            </React.StrictMode>
            </div>
            <div className="rightDiv">
            <React.StrictMode>
                <ModelWorkout />
            </React.StrictMode>
            </div>
        </>
    )}