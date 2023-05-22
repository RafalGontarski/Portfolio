import React, {useContext, useState} from "react";
import './services.css';
import {DarkModeContext} from "../../context/DarkModeContext";

export const Services = () => {
    const[toggleState, setToggleState] = useState(0);
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>Services</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>What i Offer</span>

            <div className="services__container container grid">
                <div className={`services__content ${isDarkMode ? 
                    'services__content-dark-mode' : 
                    'services__content-light-mode'}`}>
                    <div>
                        <i className={`uil uil-database services__icon ${isDarkMode ?
                            'uil-database-dark-mode services__icon-dark-mode' :
                            'uil-database-light-mode services__icon-light-mode'}`}></i>
                        <h3 className={`services__title ${isDarkMode ? 
                            'services__title-dark-mode' : 
                            'services__title-light-mode'}`}>
                            Database <br /> Developer
                        </h3>
                    </div>

                    <span className={`services__button ${isDarkMode ? 
                        'services__button-dark-mode' : 
                        'services__button-light-mode'}`}
                          onClick={() => toggleTab(1)}>
                        View More
                        <i className={`uil uil-arrow-right services__button-icon ${isDarkMode ? 
                            'uil-arrow-right-dark-mode services__button-icon-dark-mode' : 
                            'uil-arrow-right-light-mode services__button-icon-light-mode'}`}></i>
                    </span>

                    <div className={toggleState === 1 ?
                        'services__modal active-modal' :
                        "services__modal"}>
                        <div className={`services__modal-content ${isDarkMode ? "services__modal-content-dark-mode" : "services__modal-content-light-mode"}`}>
                            <i className="uil uil-times services__modal-close"
                               onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Database Developer</h3>
                            <p className="services__modal-description">
                                Service with one year of experience in
                                full-stack Java & React programming.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create database.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop backend app.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop frontend app.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I implement and connect apps.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={`services__content ${isDarkMode ? 'services__content-dark-mode' : 'services__content-light-mode'}`}>
                    <div>
                        <i className={`uil uil-server services__icon ${isDarkMode ? 
                            'uil-server-dark-mode services__icon-dark-mode' : 
                            'uil-server-light-mode services__icon-light-mode'}`}></i>
                        <h3 className={`services__title ${isDarkMode ? 
                            'services__title-dark-mode' : 
                            'services__title-light-mode'}`}>
                            Backend <br /> Developer
                        </h3>
                    </div>

                    <span className={`services__button ${isDarkMode ? 
                        'services__button-dark-mode' : 
                        'services__button-light-mode'}`}
                          onClick={() => toggleTab(2)}>
                        View More
                        <i className={`uil uil-arrow-right services__button-icon ${isDarkMode ? 
                            'uil-arrow-right-dark-mode services__button-icon-dark-mode' : 
                            'uil-arrow-right-light-mode services__button-icon-light-mode'}`}></i>
                    </span>

                    <div className={toggleState === 2 ?
                        'services__modal active-modal' :
                        "services__modal"}
                         >
                        <div className={`services__modal-content ${isDarkMode ? 
                            "services__modal-content-dark-mode" : 
                            "services__modal-content-light-mode"}`}>
                            <i onClick={() => toggleTab(0)}
                               className={`uil uil-times services__modal-close 
                               ${isDarkMode ? "uil uil-times-dark-mode services__modal-close-dark-mode" : 
                                   "uil uil-times-light-mode services__modal-close-light-mode"}`}></i>

                            <h3 className={`services__modal-title 
                            ${isDarkMode ? "services__modal-title-dark-mode" : 
                                "services__modal-title-light-mode"}`}>Backend Developer</h3>
                            <p className={`services__modal-description ${isDarkMode ? 
                                "services__modal-description -dark-mode" :
                                "services__modal-description -light-mode"}`}>
                                Service with one year of experience in
                                full-stack Java & React programming.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create database.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop backend app.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop frontend app.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I implement and connect apps.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className={`services__content ${isDarkMode ? 'services__content-dark-mode' : 'services__content-light-mode'}`}>
                    <div>
                        <i className={`uil uil-web-grid services__icon ${isDarkMode ?
                            'uil-web-grid-dark-mode services__icon-dark-mode' :
                            'uil-web-grid-light-mode services__icon-light-mode'}`}></i>
                        <h3 className={`services__title ${isDarkMode ? 
                            'services__title-dark-mode' : 
                            'services__title-light-mode'}`}>
                            Frontend <br /> Developer
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)}
                          className={`services__button ${isDarkMode ? 
                        'services__button-dark-mode' : 
                        'services__button-light-mode'}`}>
                        View More
                        <i className={`uil uil-arrow-right services__button-icon ${isDarkMode ? 
                            'uil-arrow-right-dark-mode services__button-icon-dark-mode' : 
                            'uil-arrow-right-light-mode services__button-icon-light-mode'}`}></i>
                    </span>

                    <div className={toggleState === 3 ?
                        'services__modal active-modal' :
                        "services__modal"}>
                        <div className={`services__modal-content ${isDarkMode ? "services__modal-content-dark-mode" : "services__modal-content-light-mode"}`}>
                            <i onClick={() => toggleTab(0)}
                               className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Frontend Developer</h3>
                            <p className="services__modal-description">
                                Service with one year of experience in
                                full-stack Java & React programming.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create database.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop backend app.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop frontend app.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I implement and connect apps.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}