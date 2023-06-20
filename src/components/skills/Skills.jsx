import React, {useContext} from "react";
import './skills.css';
import {Frontend} from "./Frontend";
import {Backend} from "./Backend";
import {Scrum} from "./Scrum";
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";
import {Database} from "./Database";

export const Skills = () => {
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    return (
        <section className="skills section" id="skills">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>{t("skills.title")}</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>{t("skills.subtitle")}</span>

            <div className="skills__container grid">
                {/*<Database />*/}
                <Backend />
                <Frontend />
                <Scrum />
            </div>
        </section>
    )
}