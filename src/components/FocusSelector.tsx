import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface Radio {
    radioValue: string,
    handleRadioChange: (event: any, value: any) => void
}

export default function RowRadioButtonsGroup({ radioValue, handleRadioChange }: Radio) {
    return (
        <FormControl className="radioButtons">
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultChecked={false}
                defaultValue={"target"}
                value={radioValue}
                onChange={handleRadioChange}
            >
                {/* <FormControlLabel value="All" control={<Radio />} label="All" /> */}
                <FormControlLabel value="target" control={<Radio />} label="Targets" />
                <FormControlLabel value="synergists" control={<Radio />} label="Synergists" />
                <FormControlLabel value="stabilizers" control={<Radio />} label="Stabilizers" />
                <FormControlLabel value="dynamicStabilizers" control={<Radio />} label="Dyn. Stabilizers" />
                <FormControlLabel value="antagonistStabilizer" control={<Radio />} label="Ant. Stabilizers" />

            </RadioGroup>
        </FormControl>
    );
}
