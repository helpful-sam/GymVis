import { Link } from "react-router-dom";

export default function Menubar() {
    return (
        <div className="menubar">
            <ul>
                <li className="menuOption">
                    <Link to="/">Exercise Info</Link> {' '}
                </li>
                <li className="menuOption">
                    <Link to="/workout">Workout Creator</Link> {' '}
                </li>
            </ul>
        </div>
    )
}