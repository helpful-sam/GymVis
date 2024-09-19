import { Link } from "react-router-dom";
import React from 'react';

export default function Menubar() {
    return (
        <div className="menubar">
            <ul>
                <li className="menuOption">
                    <Link to="/GymVis">Exercise Info</Link> {' '}
                </li>
                <li className="menuOption">
                    <Link to="/workout">Workout Creator</Link> {' '}
                </li>
                <li className="menuOption">
                    <Link to="/database">database</Link> {' '}
                </li>
            </ul>
        </div>
    )
}