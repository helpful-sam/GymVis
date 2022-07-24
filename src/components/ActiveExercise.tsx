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
}

export default function Active({ exer }: Exercise) {
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
        <div className="active">
            {exer.label ? <h1>{exer.label}</h1> : ""}

            {exer.mechanics && exer.force ? <h3 className="activeText">{exer.mechanics} {exer.force}</h3> : ""}

            {exer.prep ? <><h2>Preperation:</h2> <h3 className="activeText">{exer.prep}</h3></> : ""}

            {exer.exec ? <><h2>Execution:</h2><h3 className="activeText">{exer.exec}</h3></> : ""}

            {exer.target[0] ? <><h2>Target:</h2><h3 className="activeText">{arrayToString(exer.target)}</h3></> : ""}

            {exer.synergists[0] ? <><h2>Synergist:</h2><h3 className="activeText">{arrayToString(exer.synergists)}</h3></> : ""}

            {exer.stabilizers[0] ? <><h2>Stabilizer:</h2><h3 className="activeText">{arrayToString(exer.stabilizers)}</h3></> : ""}

            {exer.dynamicStabilizers[0] ? <><h2>Dynamic stabilizer:</h2><h3 className="activeText">{arrayToString(exer.dynamicStabilizers)}</h3></> : ""}

            {exer.antagonistStabilizer[0] ? <><h2>Antagonistic stabilizer:</h2><h3 className="activeText">{arrayToString(exer.antagonistStabilizer)}</h3></> : ""}
        </div>
    );
}