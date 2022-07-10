import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';

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
    onRemove: (exer: ExerciseClean) => void
}

export default function ExerciseCard({ exer, onRemove }: ExerciseArr) {
    function arrayToString(muscles: string[]) {
        let musclesSeperated = ""
        for (let muscle of muscles) {
            if (musclesSeperated) {
                musclesSeperated = musclesSeperated + " & " + muscle
            } else {
                musclesSeperated = muscle
            }
        }

        return musclesSeperated
    }

    return (
        <>
            <Accordion>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>{exer.label}</Typography>
                    </AccordionSummary>
                    <Box sx={{ display: "flex" }}>
                        <IconButton disableRipple={true} onClick={() => onRemove(exer)}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                <AccordionDetails>
                    {exer.target[0] ?
                        exer.target[1] ?
                            <div className="textContainer"><h5 className="title">Target muscles: </h5><h5 className="tekst">{arrayToString(exer.target)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Target muscle: </h5><h5 className="tekst">{arrayToString(exer.target)}</h5></div>
                        :
                        ""
                    }

                    {exer.synergists[0] ?
                        exer.synergists[1] ?
                            <div className="textContainer"><h5 className="title">Synergist muscles:</h5><h5 className="tekst">{arrayToString(exer.synergists)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Synergist muscle:</h5><h5 className="tekst">{arrayToString(exer.synergists)}</h5></div>
                        :
                        ""}

                    {exer.stabilizers[0] ?
                        exer.stabilizers[1] ?
                            <div className="textContainer"><h5 className="title">Stabilizing muscles:</h5><h5 className="tekst">{arrayToString(exer.stabilizers)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Stabilizing muscle:</h5><h5 className="tekst">{arrayToString(exer.stabilizers)}</h5></div>
                        :
                        ""}

                    {exer.dynamicStabilizers[0] ?
                        exer.dynamicStabilizers[1] ?
                            <div className="textContainer"><h5 className="title">Dynamic stabilizing muscles:</h5><h5 className="tekst">{arrayToString(exer.dynamicStabilizers)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Dynamic stabilizing muscle:</h5><h5 className="tekst">{arrayToString(exer.dynamicStabilizers)}</h5></div>
                        :
                        ""}

                    {exer.antagonistStabilizer[0] ?
                        exer.antagonistStabilizer[1] ?
                            <div className="textContainer"><h5 className="title">Antagonistic stabilizing muscles:</h5><h5 className="tekst">{arrayToString(exer.antagonistStabilizer)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Antagonistic stabilizing muscle:</h5><h5 className="tekst">{arrayToString(exer.antagonistStabilizer)}</h5></div>
                        :
                        ""}
                    <div className="textContainer"><h5 className="title">Force: </h5><h5 className="tekst">{exer.force}</h5></div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
