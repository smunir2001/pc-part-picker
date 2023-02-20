import React from "react";
import '../styles/HomeMain.styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

export default function HomeMain() {
    return (
        <div className='home-main'>
            <div className='home-main-col1'>
                <h1>A little about us...</h1>
                <p>
                    PC Utopia is a personal computer hardware database that provides various tools to the user to help
                    refine and compile computer hardware parts to assist in choosing which hardware is compatible.
                    Benefits of PC Utopia include: Making compatible parts easier to find, helping first time personal
                    computer builders choose what parts they need based on their performance goals, assisting in picking
                    certain parts to allow the user to stay in their desired price range, saving compiled lists of parts
                    to share with others to simplify the part picking process even further. The goal of PC Utopia is to
                    bring personal computer building to the general public by simplifying the confusion aspect of the
                    process; selecting computer components and checking compatability.
                </p>
            </div>
            <div className='home-main-col2'>
                <ul>
                    <li id='features-title'>Features <FontAwesomeIcon icon={faListCheck} /></li>
                    <li><FontAwesomeIcon icon={faAngleRight}/> View various components & component specifications</li>
                    <li><FontAwesomeIcon icon={faAngleRight}/> Compare component prices</li>
                    <li><FontAwesomeIcon icon={faAngleRight}/> Build a custom PC and get a price estimate</li>
                    <li><FontAwesomeIcon icon={faAngleRight}/> Make an account & save your builds!</li>
                </ul>
            </div>
        </div>
    );
}