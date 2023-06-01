import React, {useContext} from "react";
import './testimonials.css';
import {Data} from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";

export const Testimonials = () => {
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");
    return (
        <section className="testimonials section" id="testimonials">
            <h2 className={`section__title ${isDarkMode ? 
                "section__title-dark-mode" : 
                "section__title-light-mode"}`}
                >{t("recommendation.title")}
            </h2>
            <span className={`section__subtitle ${isDarkMode ? 
                "section__subtitle-dark-mode" : 
                "section__subtitle-light-mode"}`}>
                {t("recommendation.subtitle")}
            </span>

            <Swiper className='testimonial__container'
                    loop={true}
                    grabCursor={true}
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination]}
            >
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className={`testimonial__card ${isDarkMode ?
                            "testimonial__card-dark-mode" :
                            "testimonial__card-light-mode"}`} key={id}>
                            <img src={image} alt='img'
                            className='testimonial__img' width={80} height={80}/>

                            <h3 className={`testimonial__name ${isDarkMode ?
                                "testimonial__name-dark-mode" :
                                ""}`}>{title}</h3>
                            <p className={`testimonial__description ${isDarkMode ?
                                "testimonial__description-dark-mode" :
                                ""}`}>{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}