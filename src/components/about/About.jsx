import React, {useContext} from 'react';
import './about.css';
import AboutImg from '../../assets/img/about.jpeg';
import CV from '../../assets/rafał_gontarski__FULLSTACK-12M-DAYTIME (2).pdf'
import {Info} from "./Info";
import { UilFileDownload } from '@iconscout/react-unicons'
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const About = () => {
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");

    return (
        <section className="about section" id="about">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>{t("about.title")}</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>{t("about.subtitle")}</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img"/>
                <div className="about__data">
                    <Info/>

                    <p className={`about__description ${isDarkMode ? "about__description-dark-mode" : "about__description-light-mode"}`}>{t("about.description")}
                    </
                    p>

                    <a download='' href={CV} className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`}>
                        {t("about.button")}
                        {/*<i className="uil uil-file-download"></i>*/}
                        <UilFileDownload style={{ width: '24px', height: '24px', marginLeft: '0.5rem' }}/>
                    </a>
                </div>
            </div>
        </section>
    )
}