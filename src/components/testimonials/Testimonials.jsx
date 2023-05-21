import React from "react";
import './testimonials.css';
import {Data} from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonials">
            <h2 className="section__title">Recommendation</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container"
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
                        <SwiperSlide className='testimonial__card' key={id}>
                            <img src={image} alt='img'
                            className='testimonial__img' width={80} height={80}/>

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}