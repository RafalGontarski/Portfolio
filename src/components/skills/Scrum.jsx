import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";

export const Scrum = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div className={`skills__content ${isDarkMode ? "skills__content-dark-mode" : "skills__content-light-mode"}`}>
            <h3 className={`skills__title ${isDarkMode ? "skills__title-dark-mode" : "skills__title-light-mode"}`}>Other</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Jira</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Grooming</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Git</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Community</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Scrum</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Docker</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Example</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>JUnit</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}