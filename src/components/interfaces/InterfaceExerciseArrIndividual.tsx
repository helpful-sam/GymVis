import ExerciseClean from "./InterfaceExerciseClean";

interface ExerciseArrIndividual {
    actives: {
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
    },
    onRemove: (exer: ExerciseClean) => void,
    toggleVisibility: (exer: ExerciseClean) => void
}

export default ExerciseArrIndividual