import { Link } from "react-router-dom";

export default function Menubar() {
    return (
        <div className="menubar">
            <ul>
                <li>
                    <Link to="/exercise">Single Exercise</Link> {' '}
                </li>
                <li>
                    <Link to="/workout">Workout Creator</Link> {' '}
                </li>
            </ul>
        </div>
    )
}