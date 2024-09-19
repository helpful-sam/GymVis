import ExerciseCard from "./ExerciseCard";
import ExerciseArr from "../interfaces/InterfaceExerciseArr";
import React from 'react';

export default function ExerciseCardsHolderDatabase({ actives }: ExerciseArr) {
    return (
        <div className="exerciseCardContainer">
            {actives.map((ex) => <ExerciseCard actives={ex} />)}
        </div>


    )
}