import ExerciseCard from "./ExerciseCard";
import ExerciseArr from "./InterfaceExerciseArr";


export default function ExerciseCardsHolder({ actives, onRemove, toggleVisibility }: ExerciseArr) {
    return (
        <div className="exerciseCardContainer">
            {actives.map((ex) => <ExerciseCard actives={ex} onRemove={onRemove} toggleVisibility={toggleVisibility} />)}
        </div>


    )
}