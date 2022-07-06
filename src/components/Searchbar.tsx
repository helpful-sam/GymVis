import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import allExercises from "./Exercises";

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

interface Exercise {
    exer: {label: string;
    target: string[];
    synergists: string[];
    dynamicStabilizers: string[];
    stabilizers: string[];
    antagonistStabilizer: string[];
    prep: string;
    exec: string;
    mechanics: string;
    force: string;
    url: string;},
    onUpdate:(event: any, value: ExerciseClean | null) => void
}

export default function Search( { exer, onUpdate }: Exercise ) {
    // List of all the exercise objects.
    const exercises = allExercises()


    return (
    <>
        <Autocomplete
        className='searchBar'
        disablePortal
        options={exercises}
        sx={{ width: 300 }}
        onChange={onUpdate}
        renderInput={(params) => <TextField {...params} label="Exercise" />} />

        <div className="active">
            {exer.label ? <h1>{exer.label}</h1> : ""}

            {exer.prep ? <><h2>Prep:</h2> <h3>{exer.prep}</h3></> : ""}

            {exer.exec ? <><h2>Exec:</h2><h3>{exer.exec}</h3></> : ""}

            {exer.target[0] ? <><h2>Target:</h2><h3>{exer.target}</h3></> : ""}


            {exer.synergists[0] ? <><h2>Synergist:</h2><h3>{exer.synergists}</h3></> : ""}


            {exer.stabilizers[0] ? <><h2>Stabilizer:</h2><h3>{exer.stabilizers}</h3></> : ""}


            {exer.dynamicStabilizers[0] ? <><h2>Dynamic stabilizer:</h2><h3>{exer.dynamicStabilizers}</h3></> : ""}


            {exer.antagonistStabilizer[0] ? <><h2>Antagonistic stabilizer:</h2><h3>{exer.antagonistStabilizer}</h3></> : ""}


        </div>
    </>
    );
}
