import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";

export const Social = () => {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className='home__social'>
            <a href="https://www.linkedin.com/in/rafa%C5%82-gontarski/"
               className={`home__social-icon
               ${isDarkMode ? "home__social-icon-dark-mode" : "home__social-icon-light-mode"}`}


               target='_blank'>
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/RafalGontarski"
               className={`home__social-icon
               ${isDarkMode ? "home__social-icon-dark-mode" : "home__social-icon-light-mode"}`}
               target='_blank'>
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}