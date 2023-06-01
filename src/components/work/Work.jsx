import React, {useContext} from "react";
import './work.css';
import {Works} from "./Works";
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Work = () => {
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    return (
        <section className="work section" id="portfolio">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>{t("portfolio.title")}</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>{t("portfolio.subtitle")}</span>

            <Works />
        </section>
    )
}