import React, {useContext, useState} from 'react';
import './header.css';
import {DarkModeContext} from "../../context/DarkModeContext";
import { Icon } from '@iconify/react';
import {LanguageContext} from "../../context/LanguageContext";
import {useTranslation} from "react-i18next";

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
    const {isPolish, toggleLanguage} = useContext(LanguageContext);
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = () => {
        const newLang = isPolish ? 'en' : 'pl';
        i18n.changeLanguage(newLang);
        toggleLanguage();
    };

    return (

        <header className={`header ${isDarkMode ? "header-dark-background" : "header-light-background"}`}>

            <nav className='nav container'>

                <a href='index.html' className={`nav__logo nav__logo-dark ${isDarkMode ? "nav__logo-light" : ""}`}>Rafał Gontarski</a>


                <div className={Toggle ? `nav__menu show-menu ${isDarkMode ? "nav__menu-dark-mode" : "nav__menu-light-mode"}` : 'nav__menu'}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home'
                               onClick={() => setActiveNav(('#home'))}
                               className={`${activeNav === '#home' ?
                                   'nav__link ' :
                                   'nav__link'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-estate nav__icon"></i> {t("header.home")}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about'
                               onClick={() => setActiveNav(('#about'))}
                               className={`${activeNav === '#about' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-user nav__icon"></i> {t("header.about")}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills'
                               onClick={() => setActiveNav(('#skills'))}
                               className={`${activeNav === '#skills' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-file-alt nav__icon"></i> {t("header.skills")}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#services'
                               onClick={() => setActiveNav(('#services'))}
                               className={`${activeNav === '#services' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> {t("header.services")}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portfolio'
                               onClick={() => setActiveNav(('#portfolio'))}
                               className={`${activeNav === '#portfolio' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-scenery nav__icon"></i> {t("header.portfolio")}
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact'
                               onClick={() => setActiveNav(('#contact'))}
                               className={`${activeNav === '#contact' ?
                                   'nav__link ' :
                                   'nav__link nav__link-dark'} ${isDarkMode ?
                                   'nav__link-light active-link-light' : 'nav__link-dark active-link-dark'}`}>
                                <i className="uil uil-message nav__icon"></i> {t("header.contact")}
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



                <div
                    style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '1rem',  // Odstęp między elementami
                            alignItems: 'center'  // Wyrównanie dzieci do środka
                    }}>

                    <Icon
                        onClick={handleChangeLanguage}
                        icon={isPolish ? 'twemoji:flag-united-states' : 'twemoji:flag-poland'}
                        style={{
                            transition: 'background-color 2s',
                        }}
                    />

                    <i className={isDarkMode ?
                        "uil uil-moon light-mode" : "uil uil-brightness nav__link"}
                       id='toggleDark'
                       onClick={toggleDarkMode}></i>

                </div>

            </nav>
        </header>
    )
}
