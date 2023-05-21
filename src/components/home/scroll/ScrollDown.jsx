import React, {useContext} from "react";
import './scroll.css';
import {DarkModeContext} from "../../../context/DarkModeContext";
export const ScrollDown = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className='home__scroll'>
            <a href="@about" className="home__scroll-button button--flex"></a>
            <div className="container">
                <div className="inner-container">
                    <div className={`mouse
                        ${isDarkMode ? "mouse-dark-mode" : "mouse-light-mode"}`}></div>
                    <span className={`home__scroll-name
                        ${isDarkMode ? "home__scroll-name-dark-mode" : "home__scroll-name-light-mode"}`}>Scroll Down</span>
                    <i className={`uil uil-arrow-down home__scroll-arrow
                        ${isDarkMode ? "home__scroll-arrow-dark-mode" : "home__scroll-arrow-light-mode"}`}></i>

                </div>
            </div>
        </div>
    )
}