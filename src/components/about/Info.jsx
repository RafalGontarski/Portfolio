import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";

export const Info = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div className='about__info grid'>
            <div className={`about__box ${isDarkMode ? "about__box-dark-mode" : "about__box-light-mode"}`}>
                <i className={`bx bx-award about__icon ${isDarkMode ? "about__icon-dark-mode" : "about__icon-light-mode"}`}></i>
                <h3 className={`about__title ${isDarkMode ? "about__title-dark-mode" : "about__title-light-mode"}`}>Experience</h3>
                <span className={`about__subtitle ${isDarkMode ? "about__subtitle-dark-mode" : "about__subtitle-light-mode"}`}>1 Year</span>
            </div>
            <div className={`about__box ${isDarkMode ? "about__box-dark-mode" : "about__box-light-mode"}`}>
                <i className={`bx bx-briefcase-alt about__icon ${isDarkMode ? "about__icon-dark-mode" : "about__icon-light-mode"}`}></i>
                <h3 className={`about__title ${isDarkMode ? "about__title-dark-mode" : "about__title-light-mode"}`}>Completed</h3>
                <span className={`about__subtitle ${isDarkMode ? "about__subtitle-dark-mode" : "about__subtitle-light-mode"}`}>10+ projects</span>
            </div>
            <div className={`about__box ${isDarkMode ? "about__box-dark-mode" : "about__box-light-mode"}`}>
                <i className={`bx bx-support about__icon ${isDarkMode ? "about__icon-dark-mode" : "about__icon-light-mode"}`}></i>
                <h3 className={`about__title ${isDarkMode ? "about__title-dark-mode" : "about__title-light-mode"}`}>Support</h3>
                <span className={`about__subtitle ${isDarkMode ? "about__subtitle-dark-mode" : "about__subtitle-light-mode"}`}>Online</span>
            </div>
        </div>
    )
}