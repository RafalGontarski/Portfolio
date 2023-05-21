import React, {useContext} from "react";
import './scrollup.css';
import {DarkModeContext} from "../../context/DarkModeContext";


export const ScrollUp = () => {
    window.addEventListener('scroll', function () {
        const scrollUp = this.document.querySelector('.scrollup');
        // when the scroll is higher than 560
        if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')

    })

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <a href="#" className={`scrollup ${isDarkMode ? "scrollup-dark-mode" : "scrollup-light-mode"}`}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}