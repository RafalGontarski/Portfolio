import React, {useContext, useState} from "react";
import './qualification.css';
import {DarkModeContext} from "../../context/DarkModeContext";

export const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);
    const { isDarkMode} = useContext(DarkModeContext);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className={`section__title ${isDarkMode ? 
                "section__title-dark-mode" : "section__title-light-mode"}`}
                >Qualification
            </h2>
            <span className={`section__subtitle ${isDarkMode ? 
                "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}
                >My personal journey
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
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={isDarkMode ?
                        (toggleState === 2 ?
                            "qualification__button qualification__active button--flex qualification__button-dark-mode qualification__active-dark-mode" :
                            "qualification__button button--flex qualification__button-dark-mode") :
                        (toggleState === 2 ?
                            "qualification__button qualification__active button--flex qualification__button-light-mode qualification__active-light-mode" :
                            "qualification__button button--flex qualification__button-light-mode")}
                         onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
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
                                    'qualification__title-light-mode'}`}>React</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    CodeCool
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className={`uil uil-calendar-alt ${isDarkMode ?
                                        'uil-calendar-alt-dark-mode' :
                                        'uil-calendar-alt-light-mode'}`}
                                       style={{marginRight: '0.3rem'}}></i>
                                    2023.III - Present
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
                                    'qualification__title-light-mode'}`}>OOP - Java</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    CodeCool
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2022.XII - 2023.III
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className={`qualification__title ${isDarkMode ? 
                                    'qualification__title-dark-mode' : 
                                    'qualification__title-light-mode'}`}>Database, SQL</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    CodeCool
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2022.IX - 2022.XII
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
                                    'qualification__title-light-mode'}`}>Java</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    CodeCool
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2022.V - 2022.VIII
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
                                    'qualification__title-light-mode'}`}>Looking for :)</h3>
                                <span className={`qualification__subtitle ${isDarkMode ?
                                    'qualification__subtitle-dark-mode' :
                                    'qualification__subtitle-light-mode'}`}>
                                    CodeCool
                                </span>
                                <div className={`qualification__calendar ${isDarkMode ?
                                    'qualification__calendar-dark-mode' :
                                    'qualification__calendar-light-mode'}`}>
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2023 - Present
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