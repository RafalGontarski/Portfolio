import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Scrum = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    return (
        <div className={`skills__content ${isDarkMode ? "skills__content-dark-mode" : "skills__content-light-mode"}`}>
            <h3 className={`skills__title ${isDarkMode ? "skills__title-dark-mode" : "skills__title-light-mode"}`}>{t("skills.content.other.title")}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Jira</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Docker, Netlify</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.basic")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>DevOps</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.preIntermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Chat GPT 4</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.preBasic")}</span>*/}
                        </div>
                    </div>

                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Scrum</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.basic")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Git, GitHub</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.basic")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Teamwork</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Problem Solving</h3>
                            {/*<span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>{t("skills.level.intermediate")}</span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}