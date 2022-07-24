import ExerciseCard from "./ExerciseCard";

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

interface ExerciseArr {
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
    }[],
    onRemove: (exer: ExerciseClean) => void,
    toggleVisibility: (exer: ExerciseClean) => void
}

export default function ExerciseCardsHolder({ actives, onRemove, toggleVisibility }: ExerciseArr) {
    return (
        <div className="exerciseCardContainer">
            {actives.map((ex) => <ExerciseCard actives={ex} onRemove={onRemove} toggleVisibility={toggleVisibility} />)}
        </div>


    )
}