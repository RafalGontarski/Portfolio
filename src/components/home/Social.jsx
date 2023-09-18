import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";

export const Social = () => {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className='home__social'>
            <button className={`small-button
                ${isDarkMode ? "small-button__dark-mode" : "small-button__light-mode"}`}>
                <a href="https://www.linkedin.com/in/rafa%C5%82-gontarski/"
                   className={`home__social-icon
               ${isDarkMode ? "home__social-icon-dark-mode" : "home__social-icon-light-mode"}`}
                   target='_blank'>
                    <i className="uil uil-linkedin" style={{fontSize: 16}}> Linked In
                    </i>
                </a>
            </button>

            <button className={`small-button
                ${isDarkMode ? "small-button__dark-mode" : "small-button__light-mode"}`}>
                <a href="https://github.com/RafalGontarski"
                   className={`home__social-icon
               ${isDarkMode ? "home__social-icon-dark-mode" : "home__social-icon-light-mode"}`}
                   target='_blank'>
                    <i className="uil uil-github-alt" style={{fontSize: 16}}> Git Hub</i>
                </a>
            </button>
        </div>
    )
}