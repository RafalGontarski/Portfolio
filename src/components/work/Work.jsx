import React, {useContext} from "react";
import './work.css';
import {Works} from "./Works";
import {DarkModeContext} from "../../context/DarkModeContext";

export const Work = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <section className="work section" id="portfolio">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>Portfolio</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>Most recent works</span>

            <Works />
        </section>
    )
}