import ExerciseClean from "./InterfaceExerciseClean";

interface Exercise {
    exer: {
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
    }[],
    onUpdate: (event: any, value: ExerciseClean | null) => void
}

export default Exercise