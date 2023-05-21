import React, {useContext} from 'react';
import './footer.css';

import {DarkModeContext} from "../../context/DarkModeContext";

export const Footer = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <footer className={`footer ${isDarkMode ? "footer__dark-mode" : "footer__light-mode"}`}>
            <div className="footer__container container">
                <h1 className={`footer__title ${isDarkMode ? "footer__title-dark-mode" : ""}`}>Rafał Gontarski</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className={`footer__link ${isDarkMode ? "footer__link-dark-mode" : ""}`}>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className={`footer__link ${isDarkMode ? "footer__link-dark-mode" : ""}`}>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className={`footer__link ${isDarkMode ? "footer__link-dark-mode" : ""}`}>Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/rafa%C5%82-gontarski/"
                       className={`footer__social-link ${isDarkMode ? "footer__social-link-dark-mode" : "footer__social-link-light-mode"}`} target='_blank'>
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/RafalGontarski"
                       className={`footer__social-link ${isDarkMode ? "footer__social-link-dark-mode" : "footer__social-link-light-mode"}`} target='_blank'>
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="mailto:gontarskirafal@gmail.com"
                       className={`footer__social-link ${isDarkMode ? "footer__social-link-dark-mode" : "footer__social-link-light-mode"}`} target='_blank'>
                        <i className="bx bxl-gmail"></i>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=48511670859&test=Hello, more information!"
                       className={`footer__social-link ${isDarkMode ? "footer__social-link-dark-mode" : "footer__social-link-light-mode"}`} target='_blank'>
                        <i className="bx bxl-whatsapp"></i>
                    </a>

                    {/*<a href="https://www.youtube.com/watch?v=3aCoZudPEKE&t=8797s"*/}
                    {/*   className="footer__social-link" target='_blank'>*/}
                    {/*    <i className="bx bxl-youtube"></i>*/}
                    {/*</a>*/}




                </div>
                <span className={`footer__copy ${isDarkMode ? "footer__copy-dark-mode" : "footer__copy-light-mode"}`}>
                        &#169; All rights reserved. Special thanks for <a className={`footer__link ${isDarkMode ? "footer__link-dark-mode" : ""}`} href="https://www.youtube.com/watch?v=3aCoZudPEKE&t=8797s">Cryptical Coder</a>.
                    </span>
            </div>
        </footer>
    )
}