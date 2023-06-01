import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Info = () => {
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    return (
        <div className='about__info grid'>
            <div className={`about__box ${isDarkMode ? "about__box-dark-mode" : "about__box-light-mode"}`}>
                <i className={`bx bx-award about__icon ${isDarkMode ? "about__icon-dark-mode" : "about__icon-light-mode"}`}></i>
                <h3 className={`about__title ${isDarkMode ? "about__title-dark-mode" : "about__title-light-mode"}`}>{t("about.content.experience.title")}</h3>
                <span className={`about__subtitle ${isDarkMode ? "about__subtitle-dark-mode" : "about__subtitle-light-mode"}`}>{t("about.content.experience.subtitle")}</span>
            </div>
            <div className={`about__box ${isDarkMode ? "about__box-dark-mode" : "about__box-light-mode"}`}>
                <i className={`bx bx-briefcase-alt about__icon ${isDarkMode ? "about__icon-dark-mode" : "about__icon-light-mode"}`}></i>
                <h3 className={`about__title ${isDarkMode ? "about__title-dark-mode" : "about__title-light-mode"}`}>{t("about.content.completed.title")}</h3>
                <span className={`about__subtitle ${isDarkMode ? "about__subtitle-dark-mode" : "about__subtitle-light-mode"}`}>{t("about.content.completed.subtitle")}</span>
            </div>
            <div className={`about__box ${isDarkMode ? "about__box-dark-mode" : "about__box-light-mode"}`}>
                <i className={`bx bx-support about__icon ${isDarkMode ? "about__icon-dark-mode" : "about__icon-light-mode"}`}></i>
                <h3 className={`about__title ${isDarkMode ? "about__title-dark-mode" : "about__title-light-mode"}`}>{t("about.content.support.title")}</h3>
                <span className={`about__subtitle ${isDarkMode ? "about__subtitle-dark-mode" : "about__subtitle-light-mode"}`}>{t("about.content.support.subtitle")}</span>
            </div>
        </div>
    )
}