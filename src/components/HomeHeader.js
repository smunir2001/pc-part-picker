import React from "react";
import '../styles/HomeHeader.styles.css'

export default function HomeHeader() {
    return (
        <div className='home-header'>
            <ul>
                <li>Builder</li>
                <li>Build Guides</li>
                <li>Completed Builds</li>
                <li>Browse Products</li>
            </ul>
        </div>
    );
}