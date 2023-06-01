import React, {useContext, useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {DarkModeContext} from "../../context/DarkModeContext";
import {useTranslation} from "react-i18next";


export const Contact = () => {
    const form = useRef();
    const { isDarkMode} = useContext(DarkModeContext);
    const [t] = useTranslation("global");

    // const notify = () =>
    //     toast.success('Success sending!', {
    //         position: toast.POSITION.TOP_RIGHT
    //     });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qz30z4o',
            'template_jw2uqbe',
            form.current,
            'llomuTlqWtnrTfYaL')
            .then((result) => {
                toast.success("Thank's! I'll answer soon", {
                    position: toast.POSITION.TOP_RIGHT
                })
                e.target.reset()
            }, (error) => {
                toast.error('Something went wrong', {
                    position: toast.POSITION.TOP_RIGHT
                })
            });

    };

    return (
        <section className="contact section" id="contact">
            <h2 className={`section__title ${isDarkMode ? "section__title-dark-mode" : "section__title-light-mode"}`}>{t("contact.title")}</h2>
            <span className={`section__subtitle ${isDarkMode ? "section__subtitle-dark-mode" : "section__subtitle-light-mode"}`}>{t("contact.subtitle")}</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className={`contact__title ${isDarkMode ? 
                        "section__title-dark-mode" : 
                        "section__title-light-mode"}`}
                        >{t("contact.container.talkToMe.title")}
                    </h3>

                    <div className="contact__info">
                        <div className={`contact__card ${isDarkMode ? 
                            "contact__card-dark-mode" : 
                            "contact__card-light-mode"}`}>
                            <i className={`bx bx-mail-send contact__card-icon ${isDarkMode ?
                                "contact__card-icon-dark-mode" :
                                "contact__card-icon-light-mode"}`}></i>

                            <h3 className={`contact__card-title ${isDarkMode ?
                                "contact__card-title-dark-mode" :
                                ""}`}>Email </h3>
                            <span className={`contact__card-data ${isDarkMode ?
                                "contact__card-data-dark-mode" :
                                ""}`}>gontarskirafal@gmail.com</span>

                            <a href="mailto:gontarskirafal@gmail.com"
                               target='_blank'
                               className={`contact__button ${isDarkMode ?
                                   'contact__button-dark-mode' : 
                                   'contact__button-light-mode'}`}
                                    >{t("contact.container.talkToMe.content1.button")}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>

                        <div className={`contact__card ${isDarkMode ? 
                            "contact__card-dark-mode" : 
                            "contact__card-light-mode"}`}>
                            <i className={`bx bxl-whatsapp contact__card-icon ${isDarkMode ?
                                "contact__card-icon-dark-mode" :
                                "contact__card-icon-light-mode"}`}></i>

                            <h3 className={`contact__card-title ${isDarkMode ?
                                "contact__card-title-dark-mode" :
                                ""}`}>Whatsapp</h3>
                            <span className={`contact__card-data ${isDarkMode ?
                                "contact__card-data-dark-mode" :
                                ""}`}>511-670-859</span>

                            <a href="https://api.whatsapp.com/send?phone=48511670859&test=Hello, more information!"
                               target='_blank'
                               className={`contact__button ${isDarkMode ?
                                   'contact__button-dark-mode' : 
                                   'contact__button-light-mode'}`}>{t("contact.container.talkToMe.content2.button")}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>

                        </div>

                        <div className={`contact__card ${isDarkMode ? 
                            "contact__card-dark-mode" : 
                            "contact__card-light-mode"}`}>
                            <i className={`bx bxl-discord contact__card-icon ${isDarkMode ?
                                "contact__card-icon-dark-mode" :
                                "contact__card-icon-light-mode"}`}></i>

                            <h3 className={`contact__card-title ${isDarkMode ?
                                "contact__card-title-dark-mode" :
                                ""}`}>Discord</h3>
                            <span className={`contact__card-data ${isDarkMode ?
                                "contact__card-data-dark-mode" :
                                ""}`}>RafalGontarski#1582</span>

                            {/*<a href="https://m.me/rafalgontarski" className={`contact__button ${isDarkMode ?*/}
                            {/*       'contact__button-dark-mode' : */}
                            {/*       'contact__button-light-mode'}`}>{t("contact.container.talkToMe.content3.button")}*/}
                            {/*    <i className="bx bx-right-arrow-alt contact__button-icon"></i>*/}
                            {/*</a>*/}
                            <div><br/></div>

                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className={`contact__title ${isDarkMode ? 
                        "section__title-dark-mode" : 
                        "section__title-light-mode"}`}
                        >{t("contact.container.writeToMe.title")}
                    </h3>

                    <form
                        ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className={`contact__form-tag ${isDarkMode ?
                                'contact__form-tag-dark-mode' :
                                'contact__form-tag-light-mode'}`}>{t("contact.container.writeToMe.contactForm.name")}</label>
                            <input
                                type="text"
                                name='name'
                                className={`contact__form-input ${isDarkMode ?
                                    'contact__form-input-dark-mode' :
                                    'contact__form-input-light-mode'}`}
                                placeholder={t("contact.container.writeToMe.contactForm.nameInput")}
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className={`contact__form-tag ${isDarkMode ?
                                'contact__form-tag-dark-mode' :
                                'contact__form-tag-light-mode'}`}>{t("contact.container.writeToMe.contactForm.mail")}</label>
                            <input
                                type="email"
                                name='email'
                                className={`contact__form-input ${isDarkMode ?
                                    'contact__form-input-dark-mode' :
                                    'contact__form-input-light-mode'}`}
                                placeholder={t("contact.container.writeToMe.contactForm.mailInput")}
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className={`contact__form-tag ${isDarkMode ?
                                'contact__form-tag-dark-mode' :
                                'contact__form-tag-light-mode'}`}>{t("contact.container.writeToMe.contactForm.project")}</label>
                            <textarea
                                name="project" cols="30" rows="10"
                                className={`contact__form-input ${isDarkMode ?
                                    'contact__form-input-dark-mode' :
                                    'contact__form-input-light-mode'}`}
                                placeholder={t("contact.container.writeToMe.contactForm.projectInput")}></textarea>
                        </div>

                        <button className={`button button--flex ${isDarkMode ? "button__dark-mode" : "button__light-mode"}`}
                                // onClick={notify}
                                type='submit'
                                value="Send"
                                >
                            {t("contact.container.button")}
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