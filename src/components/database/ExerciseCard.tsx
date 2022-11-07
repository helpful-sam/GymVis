import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box} from '@mui/material';
import ExerciseArrIndividual from '../interfaces/InterfaceExerciseArrIndividual';
import ExerciseCleanVisib from '../interfaces/InterfaceExerciseCleanVisib';
import ExerciseArrDatabase from '../interfaces/InterfaceExerciseArrDatabase';

export default function ExerciseCard({ actives }: ExerciseArrDatabase) {
    /**
     * Converts an array of muscles into a string seperated by & characters.
     * @param {string[]} muscles - An array of muscle names.
     * @returns {string} - A string of the elements in the array, seperated by
     * '&' characters.
     */
    function arrayToString(muscles: string[]): string {
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
                <Box className={"accordionVisibOn"} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>{actives.label}</Typography>
                    </AccordionSummary>
                    <Box sx={{ display: "flex" }}>


                    </Box>
                </Box>
                <AccordionDetails className={"accordionVisibOn"}>
                    {actives.target[0] ?
                        actives.target[1] ?
                            <div className="textContainer"><h5 className="title">Target muscles: </h5><h5 className="tekst">{arrayToString(actives.target)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Target muscle: </h5><h5 className="tekst">{arrayToString(actives.target)}</h5></div>
                        :
                        ""
                    }

                    {actives.synergists[0] ?
                        actives.synergists[1] ?
                            <div className="textContainer"><h5 className="title">Synergist muscles:</h5><h5 className="tekst">{arrayToString(actives.synergists)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Synergist muscle:</h5><h5 className="tekst">{arrayToString(actives.synergists)}</h5></div>
                        :
                        ""}

                    {actives.stabilizers[0] ?
                        actives.stabilizers[1] ?
                            <div className="textContainer"><h5 className="title">Stabilizing muscles:</h5><h5 className="tekst">{arrayToString(actives.stabilizers)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Stabilizing muscle:</h5><h5 className="tekst">{arrayToString(actives.stabilizers)}</h5></div>
                        :
                        ""}

                    {actives.dynamicStabilizers[0] ?
                        actives.dynamicStabilizers[1] ?
                            <div className="textContainer"><h5 className="title">Dynamic stabilizing muscles:</h5><h5 className="tekst">{arrayToString(actives.dynamicStabilizers)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Dynamic stabilizing muscle:</h5><h5 className="tekst">{arrayToString(actives.dynamicStabilizers)}</h5></div>
                        :
                        ""}

                    {actives.antagonistStabilizer[0] ?
                        actives.antagonistStabilizer[1] ?
                            <div className="textContainer"><h5 className="title">Antagonistic stabilizing muscles:</h5><h5 className="tekst">{arrayToString(actives.antagonistStabilizer)}</h5></div>
                            :
                            <div className="textContainer"><h5 className="title">Antagonistic stabilizing muscle:</h5><h5 className="tekst">{arrayToString(actives.antagonistStabilizer)}</h5></div>
                        :
                        ""}
                    <div className="textContainer"><h5 className="title">Type: </h5><h5 className="tekst">{actives.mechanics} {actives.force}</h5></div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
