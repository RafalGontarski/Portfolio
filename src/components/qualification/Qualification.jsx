import React, {useContext, useState} from "react";
import './qualification.css';
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className={`section__title ${isDarkMode ? 
                "section__title-dark-mode" : "section__title-light-mode"}`}
                >{t("qualification.title")}
            </h2>
            <span className={`section__subtitle ${isDarkMode ? 
                "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}
                >{t("qualification.subtitle")}
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div className={isDarkMode ?
                        (toggleState === 1 ?
                            "qualification__button qualification__active button--flex qualification__button-dark-mode qualification__active-dark-mode" :
                            "qualification__button button--flex qualification__button-dark-mode") :
                        (toggleState === 1 ?
                            "qualification__button qualification__active button--flex qualification__button-light-mode qualification__active-light-mode" :
                            "qualification__button button--flex qualification__button-light-mode")}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> {t("qualification.education.title")}
                    </div>

                    <div className={isDarkMode ?
                        (toggleState === 2 ?
                            "qualification__button qualification__active button--flex qualification__button-dark-mode qualification__active-dark-mode" :
                            "qualification__button button--flex qualification__button-dark-mode") :
                        (toggleState === 2 ?
                            "qualification__button qualification__active button--flex qualification__button-light-mode qualification__active-light-mode" :
                            "qualification__button button--flex qualification__button-light-mode")}
                         onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> {t("qualification.experience.title")}
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className={`qualification__title ${isDarkMode ? 
                                    'qualification__title-dark-mode' : 
                                    'qualification__title-light-mode'}`}>{t("qualification.education.react.name")}</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    {t("qualification.education.react.place")}
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className={`uil uil-calendar-alt ${isDarkMode ?
                                        'uil-calendar-alt-dark-mode' :
                                        'uil-calendar-alt-light-mode'}`}
                                       style={{marginRight: '0.3rem'}}></i>
                                    {t("qualification.education.react.data")}
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${isDarkMode ?
                                    'qualification__rounder-dark-mode' :
                                    'qualification__rounder-light-mode'}`}></span>
                                <span className={`qualification__line ${isDarkMode ?
                                    'qualification__line-dark-mode' :
                                    'qualification__line-light-mode'}`}></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className={`qualification__rounder ${isDarkMode ?
                                    'qualification__rounder-dark-mode' :
                                    'qualification__rounder-light-mode'}`}></span>
                                <span className={`qualification__line ${isDarkMode ?
                                    'qualification__line-dark-mode' :
                                    'qualification__line-light-mode'}`}></span>
                            </div>
                            <div>
                                <h3 className={`qualification__title ${isDarkMode ? 
                                    'qualification__title-dark-mode' : 
                                    'qualification__title-light-mode'}`}>{t("qualification.education.oop.name")}</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    {t("qualification.education.oop.place")}
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    {t("qualification.education.oop.data")}
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className={`qualification__title ${isDarkMode ? 
                                    'qualification__title-dark-mode' : 
                                    'qualification__title-light-mode'}`}>{t("qualification.education.web.name")}</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    {t("qualification.education.web.place")}
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    {t("qualification.education.web.data")}
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${isDarkMode ?
                                    'qualification__rounder-dark-mode' :
                                    'qualification__rounder-light-mode'}`}></span>
                                <span className={`qualification__line ${isDarkMode ?
                                    'qualification__line-dark-mode' :
                                    'qualification__line-light-mode'}`}></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className={`qualification__rounder ${isDarkMode ?
                                    'qualification__rounder-dark-mode' :
                                    'qualification__rounder-light-mode'}`}></span>
                                <span className={`qualification__line ${isDarkMode ?
                                    'qualification__line-dark-mode' :
                                    'qualification__line-light-mode'}`}></span>
                            </div>
                            <div>
                                <h3 className={`qualification__title ${isDarkMode ? 
                                    'qualification__title-dark-mode' : 
                                    'qualification__title-light-mode'}`}>{t("qualification.education.python.name")}</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    {t("qualification.education.python.place")}
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    {t("qualification.education.python.data")}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className={`qualification__title ${isDarkMode ?
                                    'qualification__title-dark-mode' :
                                    'qualification__title-light-mode'}`}>{t("qualification.experience.first.name")}</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    {t("qualification.experience.first.place")}
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    {t("qualification.experience.first.data")}
                                </div>
                            </div>
                            <div>
                                <span className={`qualification__rounder ${isDarkMode ?
                                    'qualification__rounder-dark-mode' :
                                    'qualification__rounder-light-mode'}`}></span>
                                <span className={`qualification__line ${isDarkMode ?
                                    'qualification__line-dark-mode' :
                                    'qualification__line-light-mode'}`}></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}