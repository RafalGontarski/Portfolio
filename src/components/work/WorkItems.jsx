import React, {useRef, useState} from "react";
import '../services/services.css';

export const WorkItems = ({ item}) => {
    const[toggleState, setToggleState] = useState(0);

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
        <div className='work__card' key={item.id}>
            <img src={item.image} alt='' className='work__img' onClick={() => toggleTab(1)}/>
            <h3 className="work__title">{item.title}</h3>
            <a href={item.url} className="work__button" >
                Repository <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>


            <div className={toggleState === 1 ?
                'work__modal active-modal' :
                "work__modal"}>

                <div className="work__modal-content">
                    <i className="uil uil-times work__modal-close"
                       onClick={() => toggleTab(0)}></i>

                    <h3 className="work__modal-title">{item.title}</h3>
                    <p className="work__modal-description">
                        {item.description}
                    </p>
                    <video src={item.movie}  className='work__giff'
                         onClick={handleClick}
                           ref={imgRef}>
                    </video>




                    <ul className="work__modal-services grid">
                        <li className="work__modal-service">
                            <i className="uil uil-brackets-curly work__modal-icon"></i>
                            <p className="work__modal-info">
                                {item.technologies}
                            </p>
                        </li>

                        <li className="work__modal-service">
                            <i className="uil uil-book work__modal-icon"></i>
                            <p className="work__modal-info">
                                {item.libraries}
                            </p>
                        </li>

                        <li className="work__modal-service">
                            <i className="uil uil-channel work__modal-icon"></i>
                            <p className="work__modal-info">
                                {item.frameworks}
                            </p>
                        </li>

                        <li className="work__modal-service">
                            <i className="uil uil-database work__modal-icon"></i>
                            <p className="work__modal-info">
                                {item.database}
                            </p>
                        </li>

                        {/*<li className="work__modal-service">*/}
                        {/*    <i className="uil uil-check-circle work__modal-icon"></i>*/}
                        {/*    <p className="work__modal-info">*/}
                        {/*        Web page development.*/}
                        {/*    </p>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </div>
    )
}