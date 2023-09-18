import React, {useContext} from "react";
// import useDarkMode from "../darkmode/DarkMode";
import './home.css';
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";


export const Data = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const [t] = useTranslation("global");

    return (
        <div className='home__data'>
            <h1 className={`home__title light-mode-home__title ${isDarkMode ? "dark-mode-home__title" : ""}`}>
                {t("home.title")} 👋
            </h1>
            <h3 className={`home__subtitle light-mode-home__subtitle ${isDarkMode ? "dark-mode-home__subtitle" : ""}`}>{t("home.subtitle")}</h3>
            <p className={`home__description ${isDarkMode ? "home__description-dark-mode" : ""}`}>
                {t("home.description")}</p>
            <a href="#contact" className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`}>
                {t("home.button")}
                <image
                    style={{
                        marginLeft: "0.5rem",
                    }}
                >👋</image>
            </a>
            {/*<div className='home__buttons'>*/}
            {/*    <a href="https://www.linkedin.com/in/rafa%C5%82-gontarski/" className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`}>*/}
            {/*        <i className="uil uil-linkedin" style={{marginRight: '0.5rem'}}></i>*/}
            {/*        {t("home.linkedIn")}*/}
            {/*        /!*<image*!/*/}
            {/*        /!*    style={{*!/*/}
            {/*        /!*        marginLeft: "0.5rem",*!/*/}
            {/*        /!*    }}*!/*/}
            {/*        /!*>👋</image>*!/*/}
            {/*    </a>*/}
            {/*    <a href="https://github.com/RafalGontarski" className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`}>*/}
            {/*        <i className="uil uil-github-alt" style={{marginRight: '0.5rem'}}></i>*/}
            {/*        {t("home.gitHub")}*/}
            {/*        /!*<image*!/*/}
            {/*        /!*    style={{*!/*/}
            {/*        /!*        marginLeft: "0.5rem",*!/*/}
            {/*        /!*    }}*!/*/}
            {/*        /!*>👋</image>*!/*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    )
}