import React, {useContext, useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {DarkModeContext} from "../../context/DarkModeContext";


export const Contact = () => {
    const form = useRef();
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const notify = () =>
        toast.success('Success sending !', {
            position: toast.POSITION.TOP_RIGHT
        });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qz30z4o',
            'template_jw2uqbe',
            form.current,
            'llomuTlqWtnrTfYaL')
            e.target.reset()
    };

    return (
        <section className="contact section" id="contact">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>Get in touch</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>Contact me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact_-card-title">Email </h3>
                            <span className="contact__card-data">gontarskirafal@gmail.com</span>

                            <a href="mailto:gontarskirafal@gmail.com" className="contact__button">Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact_-card-title">Whatsapp</h3>
                            <span className="contact__card-data">511-670-859</span>

                            <a href="https://api.whatsapp.com/send?phone=48511670859&test=Hello, more information!" className="contact__button">Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-discord contact__card-icon"></i>

                            <h3 className="contact__card-title">Discord</h3>
                            <span className="contact__card-data">RafalGontarski#1582</span>

                            <a href="https://m.me/rafalgontarski" className="contact__button">Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form
                        ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name='name'
                                className='contact__form-input'
                                placeholder='Insert your name'
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input
                                type="email"
                                name='email'
                                className='contact__form-input'
                                placeholder='Insert your email'
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project" cols="30" rows="10"
                                className='contact__form-input'
                                placeholder='Write your project'></textarea>
                        </div>

                        <button className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`} onClick={notify}>
                            Send Message
                            <svg
                                width={24}
                                height={24}
                                fill='none'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                id="message"
                                className='button__icon'>
                                <path fill="var(--container-color)"
                                      d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z">
                                </path>
                            </svg>
                        </button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </section>
    )
}