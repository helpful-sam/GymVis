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
    },
    onUpdate: (event: any, value: ExerciseClean | null) => void
}

export default function Search({ exer, onUpdate }: Exercise) {
    // List of all the exercise objects.
    const exercises = allExercises()


    return (
        <>
            <Autocomplete
                isOptionEqualToValue={(option, value) => option.label === value.label}
                className='searchBar'
                disablePortal
                options={exercises}
                sx={{ width: 300 }}
                onChange={onUpdate}
                renderInput={(params) => <TextField {...params} label="Exercise" />} />
        </>
    );
}
