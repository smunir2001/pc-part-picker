import React from "react";
import '../styles/Navbar.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className='main-navbar'>
            <div className="main-navbar-col1">
                <h1><FontAwesomeIcon icon={faObjectGroup} /> PC Utopia</h1>
            </div>
            <div className="main-navbar-col2">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>My Account</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}