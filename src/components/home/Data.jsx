import React, {useContext} from "react";
// import useDarkMode from "../darkmode/DarkMode";
import './home.css';
import {DarkModeContext} from "../../context/DarkModeContext";


export const Data = () => {
    const { isDarkMode } = useContext(DarkModeContext);


    return (
        <div className='home__data'>
            <h1 className={`home__title light-mode-home__title ${isDarkMode ? "dark-mode-home__title" : ""}`}>
                Rafał Gontarski
            </h1>
            <h3 className={`home__subtitle light-mode-home__subtitle ${isDarkMode ? "dark-mode-home__subtitle" : ""}`}>Junior Full-Stack Developer</h3>
            <p className={`home__description ${isDarkMode ? "home__description-dark-mode" : ""}`}>I'm creative Junior
                Java&React Full-Stack Developer programmer based in Warsaw
                and I'm passionate and ambitious to my work.</p>
            <a href="#contact" className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`}>
                Say Hello
                <svg
                    width={24}
                    height={24}
                    fill='none'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="message"
                    class='button__icon'>
                    <path fill="var(--container-color)" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z">
                    </path>
                </svg>
            </a>
        </div>
    )
}