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
}

interface ExerciseArr {
    actives: {label: string;
    target: string[];
    synergists: string[];
    dynamicStabilizers: string[];
    stabilizers: string[];
    antagonistStabilizer: string[];
    prep: string;
    exec: string;
    mechanics: string;
    force: string;
    url: string;}[],
    onRemove:(exer: ExerciseClean) => void
}

export default function ExerciseCardsHolder({ actives, onRemove }: ExerciseArr) {
    return(
        <div className="exerciseCardContainer">
            {actives.map((ex) => <ExerciseCard exer={ex} onRemove={onRemove}/>)}
        </div>


    )
}