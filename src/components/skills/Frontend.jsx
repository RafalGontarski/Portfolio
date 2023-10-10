import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Frontend = () => {
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    return (
        <div className={`skills__content ${isDarkMode ? "skills__content-dark-mode" : "skills__content-light-mode"}`}>
            <h3 className={`skills__title ${isDarkMode ? "skills__title-dark-mode" : "skills__title-light-mode"}`}>{t("skills.content.frontend.title")}</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>React</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>HTML</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>React.js</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Jest</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.basic")}</span>*/}
                        </div>
                    </div>

                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>JavaScript, TypeScript</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.preIntermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>CSS</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Styled-Component, MUI</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Sanity, Stripe</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}