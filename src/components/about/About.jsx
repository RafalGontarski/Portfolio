import React, {useContext} from 'react';
import './about.css';
import AboutImg from '../../assets/img/newabout.jpg';
// import CVPL from '../../assets/Rafał_Gontarski_CV_PL.pdf';
// import CVEN from '../../assets/Rafał_Gontarski_CV_ENG.pdf';
import CV from '../../assets/Rafal_Gontarski_CV_JAVA.pdf'
import {Info} from "./Info";
import { UilFileDownload } from '@iconscout/react-unicons'
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const About = () => {
    // const { i18n } = useTranslation();  // pobierz instancję i18n
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");

    // Wybierz odpowiednie CV na podstawie bieżącego języka
    // const cvFile = i18n.language === 'en' ? CVEN : CVPL;

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