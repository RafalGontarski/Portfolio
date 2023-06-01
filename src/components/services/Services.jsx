import React, {useContext, useState} from "react";
import './services.css';
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Services = () => {
    const[toggleState, setToggleState] = useState(0);
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>{t("services.title")}</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>{t("services.subtitle")}</span>

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
                            {t("services.content.database.title1")} <br /> {t("services.content.database.title2")}
                        </h3>
                    </div>

                    <span className={`services__button ${isDarkMode ? 
                        'services__button-dark-mode' : 
                        'services__button-light-mode'}`}
                          onClick={() => toggleTab(1)}>
                        {t("services.button")}
                        <i className={`uil uil-arrow-right services__button-icon ${isDarkMode ? 
                            'uil-arrow-right-dark-mode services__button-icon-dark-mode' : 
                            'uil-arrow-right-light-mode services__button-icon-light-mode'}`}></i>
                    </span>

                    <div className={toggleState === 1 ?
                        'services__modal active-modal' :
                        "services__modal"}>
                        <div className={`services__modal-content ${isDarkMode ? "services__modal-content-dark-mode" : "services__modal-content-light-mode"}`}>
                            <i className={`uil uil-times services__modal-close 
                               ${isDarkMode ? "uil uil-times-dark-mode services__modal-close-dark-mode" :
                                "uil uil-times-light-mode services__modal-close-light-mode"}`}
                               onClick={() => toggleTab(0)}></i>

                            <h3 className={`services__modal-title ${isDarkMode ?
                                'services__modal-title-dark-mode' :
                                'services__modal-title-light-mode'}`}>{t("services.modal.database.title")}</h3>
                            <p className={`services__modal-description ${isDarkMode ?
                                'services__modal-description-dark-mode' :
                                'services__modal-description-light-mode'}`}>
                                {t("services.modal.database.subtitle")}
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.database.1")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.database.2")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.database.3")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.database.4")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.database.5")}
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
                            {t("services.content.backend.title1")} <br /> {t("services.content.backend.title2")}
                        </h3>
                    </div>

                    <span className={`services__button ${isDarkMode ? 
                        'services__button-dark-mode' : 
                        'services__button-light-mode'}`}
                          onClick={() => toggleTab(2)}>
                        {t("services.button")}
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
                                "services__modal-title-light-mode"}`}>{t("services.modal.backend.title")}</h3>
                            <p className={`services__modal-description ${isDarkMode ? 
                                "services__modal-description-dark-mode" :
                                "services__modal-description-light-mode"}`}>
                                {t("services.modal.backend.subtitle")}
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.backend.1")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.backend.2")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.backend.3")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.backend.4")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.backend.5")}
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
                            {t("services.content.frontend.title1")} <br /> {t("services.content.frontend.title2")}
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)}
                          className={`services__button ${isDarkMode ? 
                        'services__button-dark-mode' : 
                        'services__button-light-mode'}`}>
                        {t("services.button")}
                        <i className={`uil uil-arrow-right services__button-icon ${isDarkMode ? 
                            'uil-arrow-right-dark-mode services__button-icon-dark-mode' : 
                            'uil-arrow-right-light-mode services__button-icon-light-mode'}`}></i>
                    </span>

                    <div className={toggleState === 3 ?
                        'services__modal active-modal' :
                        "services__modal"}>
                        <div className={`services__modal-content ${isDarkMode ? 
                            "services__modal-content-dark-mode" : 
                            "services__modal-content-light-mode"}`}>
                            <i onClick={() => toggleTab(0)}
                               className={`uil uil-times services__modal-close ${isDarkMode ? 
                                   'uil-times-dark-mode services__modal-close-dark-mode' : 
                                   'uil-times-light-mode services__modal-close-light-mode'}`}></i>

                            <h3 className={`services__modal-title 
                            ${isDarkMode ? "services__modal-title-dark-mode" :
                                "services__modal-title-light-mode"}`}>{t("services.modal.frontend.title")}</h3>
                            <p className={`services__modal-description ${isDarkMode ?
                                "services__modal-description-dark-mode" :
                                "services__modal-description-light-mode"}`}>
                                {t("services.modal.frontend.subtitle")}
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.frontend.1")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.frontend.2")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.frontend.3")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.frontend.4")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className={`uil uil-check-circle services__modal-icon 
                                        ${isDarkMode ? 'uil-check-circle-dark-mode services__modal-icon-dark-mode' : 
                                        'uil-check-circle-light-mode services__modal-icon-light-mode'}`}></i>
                                    <p className={`services__modal-info ${isDarkMode ?
                                        'services__modal-info-dark-mode' :
                                        'services__modal-info-light-mode'}`}>
                                        {t("services.modal.frontend.5")}
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