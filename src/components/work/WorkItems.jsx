import React, {useContext, useRef, useState} from "react";
import '../services/services.css';
import {DarkModeContext} from "../../context/DarkModeContext";

export const WorkItems = ({ item}) => {
    const[toggleState, setToggleState] = useState(0);
    const { isDarkMode} = useContext(DarkModeContext);
    const imgRef = useRef();

    const openFullscreen = () => {
        if (imgRef.current.requestFullscreen) {
            imgRef.current.requestFullscreen();
        } else if (imgRef.current.mozRequestFullScreen) { /* Firefox */
            imgRef.current.mozRequestFullScreen();
        } else if (imgRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            imgRef.current.webkitRequestFullscreen();
        } else if (imgRef.current.msRequestFullscreen) { /* IE/Edge */
            imgRef.current.msRequestFullscreen();
        }
    }

    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }

    const handleClick = () => {
        if (!document.fullscreenElement) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
    }
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className={`work__card ${isDarkMode ? 
            'work__card-dark-mode' : 'work__card-light-mode'}`} key={item.id}>
            <img src={item.image} alt='' className='work__img' onClick={() => toggleTab(1)}/>
            <h3 className={`work__title ${isDarkMode ?
                'work__title-dark-mode' : 'work__title-light-mode'}`}>{item.title}</h3>
            <a href={item.url} className={`work__button ${isDarkMode ?
                'work__button-dark-mode' : 'work__button-light-mode'}`} >
                Repository <i className='bx bx-right-arrow-alt work__button-icon'></i>
            </a>


            <div className={toggleState === 1 ?
                'work__modal active-modal' :
                "work__modal"}>

                <div className={`work__modal-content ${isDarkMode ?
                    'work__modal-content-dark-mode' : 'work__modal-content-light-mode'}`}>
                    <i className={`uil uil-times work__modal-close ${isDarkMode ?
                        'uil uil-times-dark-mode work__modal-close-dark-mode' : 
                        'uil uil-times-light-mode work__modal-close-light-mode'}`}
                       onClick={() => toggleTab(0)}></i>

                    <h3 className={`work__modal-title ${isDarkMode ?
                        'work__modal-title-dark-mode' : ''}`}>{item.title}</h3>
                    <a href={item.url} className={`work__button-modal ${isDarkMode ?
                        'work__button-modal-dark-mode' : 'work__button-modal-light-mode'}`} >
                        Repository <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </a>

                    <video src={item.movie}  className='work__giff'
                         onClick={handleClick}
                           ref={imgRef}>
                    </video>




                    <ul className="work__modal-services grid">
                        <li className="work__modal-service">
                            <i className={`uil uil-brackets-curly work__modal-icon ${isDarkMode ?
                                'work__modal-icon-dark-mode' : 'work__modal-icon-light-mode'}`}></i>
                            <p className={`work__modal-info ${isDarkMode ?
                                'work__modal-info-dark-mode' : ''}`}>
                                {item.technologies}
                            </p>
                        </li>

                        <li className="work__modal-service">
                            <i className={`uil uil-channel work__modal-icon ${isDarkMode ?
                                'work__modal-icon-dark-mode' : 'work__modal-icon-light-mode'}`}></i>
                            <p className={`work__modal-info ${isDarkMode ?
                                'work__modal-info-dark-mode' : ''}`}>
                                {item.frameworks}
                            </p>
                        </li>

                        <li className="work__modal-service">
                            <i className={`uil uil-book work__modal-icon ${isDarkMode ?
                                'work__modal-icon-dark-mode' : 'work__modal-icon-light-mode'}`}></i>
                            <p className={`work__modal-info ${isDarkMode ?
                                'work__modal-info-dark-mode' : ''}`}>
                                {item.libraries}
                            </p>
                        </li>

                        <li className="work__modal-service">
                            <i className={`uil uil-database work__modal-icon ${isDarkMode ?
                                'work__modal-icon-dark-mode' : 'work__modal-icon-light-mode'}`}></i>
                            <p className={`work__modal-info ${isDarkMode ?
                                'work__modal-info-dark-mode' : ''}`}>
                                {item.database}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}