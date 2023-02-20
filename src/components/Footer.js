import React from "react";
import '../styles/Footer.styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-row1'>
                <div className='footer-container-col' id='footer-container-col1'>
                    <h1><FontAwesomeIcon icon={faObjectGroup} /></h1>
                    <h2>Pick parts.</h2>
                    <h3>Build your PC.</h3>
                    <h4>Compare & share!</h4>
                </div>
                <div className='footer-container-col' id='footer-container-col2'>
                    <div className='footer-col-title'>
                        <h2>Categories</h2>
                    </div>
                </div>
                <div className='footer-container-col' id='footer-container-col3'>
                    <div className='footer-col-title'>
                        <h2>Information</h2>
                    </div>
                </div>
                <div className='footer-container-col' id='footer-container-col4'>
                    <div className='footer-col-title'>
                        <h2>Company</h2>
                    </div>
                </div>
            </div>
            <div className='footer-row2'></div>
        </div>
    );
}