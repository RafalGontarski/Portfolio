import React, {useContext} from 'react';
import './about.css';
import AboutImg from '../../assets/img/about.jpeg';
import CV from '../../assets/Rafał Gontarski.pdf'
import {Info} from "./Info";
import { UilFileDownload } from '@iconscout/react-unicons'
import {DarkModeContext} from "../../context/DarkModeContext";

export const About = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <section className="about section" id="about">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>About Me</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img"/>
                <div className="about__data">
                    <Info/>

                    <p className="about__description">Full-stack developer,
                    I create backend with databases and frontend apps.
                    I am always looking for the latest and well works solutions.
                    </
                    p>

                    <a download='' href={CV} className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`}>
                        Download CV
                        {/*<i className="uil uil-file-download"></i>*/}
                        <UilFileDownload style={{ width: '24px', height: '24px', marginLeft: '0.5rem' }}/>
                    </a>
                </div>
            </div>
        </section>
    )
}