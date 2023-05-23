import React, {useContext, useState} from 'react';
import './header.css';
import {DarkModeContext} from "../../context/DarkModeContext";


export const Header = () => {
    /* ================ Change Background Header =================*/
    window.addEventListener('scroll', function () {
        const header = this.document.querySelector('.header');
        // when the scroll is higher than 200 viewport height, add the scroll-header
        // class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')

    })
    /* ================ Toggle Menu =================*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);


    return (
        /*{`nav container ${isDarkMode ? "dark-mode" : ""}`}*/
        <header className={`header ${isDarkMode ? "header-dark-background" : "header-light-background"}`}>

            <nav className='nav container'>

                <a href='index.html' className={`nav__logo nav__logo-dark ${isDarkMode ? "nav__logo-light" : ""}`}>Rafał Gontarski</a>

                {/*<div className='nav__menu'>*/}
                <div className={Toggle ? `nav__menu show-menu ${isDarkMode ? "nav__menu-dark-mode" : "nav__menu-light-mode"}` : 'nav__menu'}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home'
                               onClick={() => setActiveNav(('#home'))}
                               className={`${activeNav === '#home' ?
                                   'nav__link ' :
                                   'nav__link'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about'
                               onClick={() => setActiveNav(('#about'))}
                               className={`${activeNav === '#about' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills'
                               onClick={() => setActiveNav(('#skills'))}
                               className={`${activeNav === '#skills' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#services'
                               onClick={() => setActiveNav(('#services'))}
                               className={`${activeNav === '#services' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portfolio'
                               onClick={() => setActiveNav(('#portfolio'))}
                               className={`${activeNav === '#portfolio' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact'
                               onClick={() => setActiveNav(('#contact'))}
                               className={`${activeNav === '#contact' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className={`uil uil-times nav__close  ${isDarkMode ?
                        "nav__close-dark-mode" : "nav__close-light-mode"}`}
                       onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className={`nav__toggle  ${isDarkMode ? 
                    "nav__toggle-dark-mode" : "nav__toggle-light-mode"}`}
                     onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
                {/*<ToggleButton/>*/}
                <i className={isDarkMode ?
                    "uil uil-moon light-mode" : "uil uil-brightness nav__link"}
                   id='toggleDark'
                   onClick={toggleDarkMode}></i>
            </nav>
        </header>
    )
}

export function ToggleButton() {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const body = document.querySelector('body');
    const toggle = document.getElementsByClassName('.indicator');
    toggle.onclick = function(){
        toggle.classList.toggle('active')
        // body.classList.toggle('active')
    }
    return (

        <div id='toggle'>

            <i className={`indicator ${isDarkMode ?
                "light-mode" : ""}`} onClick={toggleDarkMode}></i>
            {/*<i className={isDarkMode ?*/}
            {/*    "uil uil-moon light-mode" : "uil uil-brightness nav__link"}*/}
            {/*   id='toggleDark'*/}
            {/*   onClick={toggleDarkMode}></i>*/}
        </div>


    );
}