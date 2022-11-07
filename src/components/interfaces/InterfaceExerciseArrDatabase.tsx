import ExerciseClean from "./InterfaceExerciseClean";

interface ExerciseArrDatabase {
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
    }
}

export default ExerciseArrDatabase