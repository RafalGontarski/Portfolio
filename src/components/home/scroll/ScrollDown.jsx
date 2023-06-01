import React, {useContext} from "react";
import './scroll.css';
import {DarkModeContext} from "../../../context/DarkModeContext";
import {useTranslation} from "react-i18next";
export const ScrollDown = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const [t] = useTranslation("global");

    return (
        <div className='home__scroll'>
            <a href="@about" className="home__scroll-button button--flex"></a>
            <div className="container">
                <div className="inner-container">
                    <div className={`mouse
                        ${isDarkMode ? "mouse-dark-mode" : "mouse-light-mode"}`}></div>
                    <span className={`home__scroll-name
                        ${isDarkMode ? "home__scroll-name-dark-mode" : "home__scroll-name-light-mode"}`}>{t("home.scroll")}</span>
                    <i className={`uil uil-arrow-down home__scroll-arrow
                        ${isDarkMode ? "home__scroll-arrow-dark-mode" : "home__scroll-arrow-light-mode"}`}></i>

                </div>
            </div>
        </div>
    )
}