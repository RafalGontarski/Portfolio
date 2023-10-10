import React, {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";
import CV from "../../assets/Rafal_Gontarski_CV_JAVA.pdf";
import {UilFileDownload} from "@iconscout/react-unicons";

export const Social = () => {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className='home__social'>
            <button className={`small-button
                ${isDarkMode ? "small-button__dark-mode" : "small-button__light-mode"}`}>
                <a href="https://www.linkedin.com/in/rafa%C5%82-gontarski/"
                   className={`home__social-icon
               ${isDarkMode ? "home__social-icon-dark-mode" : "home__social-icon-light-mode"}`}
                   >

                    <svg viewBox="0 0 24 12" width="20" height="20" fill="#fff">
                        <path d="M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm1 14.22v-8.44H4v8.44h2zM8 7.78h2V9h.03c.28-.53 1-.96 2.09-.96 2.24 0 2.67 1.47 2.67 3.38v4.8h-2v-4.25c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.31H8V7.78z"></path>
                    </svg>
                    <i style={{fontSize: 16}}> Linked In</i>
                </a>
            </button>

            <button className={`small-button
                ${isDarkMode ? "small-button__dark-mode" : "small-button__light-mode"}`}>
                <a href="https://github.com/RafalGontarski"
                   className={`home__social-icon
               ${isDarkMode ? "home__social-icon-dark-mode" : "home__social-icon-light-mode"}`}
                   >
                    <svg viewBox="0 0 24 18" width="16" height="16" fill="#fff">
                        <path d="M12 2C6.477 2 2 6.478 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.528 2.341 1.087 2.912.832.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.446-1.27.097-2.645 0 0 .841-.27 2.75 1.028A9.578 9.578 0 0 1 12 6.838c.85.004 1.705.115 2.52.338 1.909-1.298 2.747-1.028 2.747-1.028.545 1.375.203 2.392.1 2.645.643.698 1.027 1.59 1.027 2.682 0 3.841-2.337 4.687-4.565 4.936.359.31.678.919.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .27.18.58.688.482C19.137 20.165 22 16.418 22 12c0-5.522-4.477-10-10-10z"></path>
                    </svg>
                    <i style={{fontSize: 16}}>  Git Hub</i>
                </a>
            </button>

            <button className={`small-button
                ${isDarkMode ? "small-button__dark-mode" : "small-button__light-mode"}`}>
                <a download='' href={CV} className={`home__social-icon
               ${isDarkMode ? "home__social-icon-dark-mode" : "home__social-icon-light-mode"}`}
                   >
                    {/*<i className="uil uil-file-download"></i>*/}
                    <UilFileDownload style={{
                        width: '16px', height: '16px', color: '#fff' }}
                         viewBox="0 0 24 18"
                    />
                    <i style={{fontSize: 16}}>  My CV </i>
                </a>
            </button>
        </div>
    )
}