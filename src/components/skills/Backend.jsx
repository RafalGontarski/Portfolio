import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";

export const Backend = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div className={`skills__content ${isDarkMode ? "skills__content-dark-mode" : "skills__content-light-mode"}`}>
            <h3 className={`skills__title ${isDarkMode ? "skills__title-dark-mode" : "skills__title-light-mode"}`}>Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Java</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Intermediate</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Spring</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>PostgreSQL</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Pre-Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Hibernate</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Pre-Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>Python</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>RESTApi</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className={`bx bxs-badge-check ${isDarkMode ? "badge-check-dark-mode" : "badge-check-light-mode"}`}></i>

                        <div>
                            <h3 className={`skills__name ${isDarkMode ? "skills__name-dark-mode" : "skills__name-light-mode"}`}>SQL</h3>
                            <span className={`skills__level ${isDarkMode ? "skills__level-dark-mode" : "skills__level-light-mode"}`}>Intermediate</span>
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