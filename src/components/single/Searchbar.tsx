import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import allExercises from "../Exercises";
import Exercise from '../interfaces/InterfaceExerciseUpd';

export default function Search({ exer, onUpdate }: Exercise) {
    // List of all the exercise objects.
    const exercises = allExercises();

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
