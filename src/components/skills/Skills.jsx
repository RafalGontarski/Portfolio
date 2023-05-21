import React, {useContext} from "react";
import './skills.css';
import {Frontend} from "./Frontend";
import {Backend} from "./Backend";
import {Scrum} from "./Scrum";
import {DarkModeContext} from "../../context/DarkModeContext";

export const Skills = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <section className="skills section" id="skills">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>Skills</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>My technical level</span>

            <div className="skills__container grid">
                <Frontend />
                <Backend />
                <Scrum />
            </div>
        </section>
    )
}