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
}

export default function Active({ exer }: Exercise) {
    return (
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
    );
}