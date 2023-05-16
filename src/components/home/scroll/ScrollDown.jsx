import React from "react";
import './scroll.css';
export const ScrollDown = () => {
    return (
        <div className='home__scroll'>
            <a href="@about" className="home__scroll-button button--flex"></a>
            <div className="container">
                <div className="inner-container">
                    <div className="mouse"></div>
                    <span className="home__scroll-name">Scroll Down</span>
                    <i className="uil uil-arrow-down home__scroll-arrow"></i>
                </div>
            </div>
        </div>
    )
}