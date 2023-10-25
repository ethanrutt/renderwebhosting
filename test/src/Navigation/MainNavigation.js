import React from "react";
import { NavLink } from "react-router-dom";
import './styles/MainNavigation.css';

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul className="list">
                    <li>
                        <NavLink to="/" className="list-element">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="list-element">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;