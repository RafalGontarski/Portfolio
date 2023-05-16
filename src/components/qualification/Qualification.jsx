import React, {useState} from "react";
import './qualification.css';

export const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                         onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">React</h3>
                                <span className="qualification__subtitle">
                                    CodeCool
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2023.III - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">OOP - Java</h3>
                                <span className="qualification__subtitle">
                                    CodeCool
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2022.XII - 2023.III
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Database, SQL</h3>
                                <span className="qualification__subtitle">
                                    CodeCool
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2022.IX - 2022.XII
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Java</h3>
                                <span className="qualification__subtitle">
                                    CodeCool
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2022.V - 2022.VIII
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Looking for :)</h3>
                                <span className="qualification__subtitle">
                                    CodeCool
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>
                                    2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*<div className="qualification__data">*/}
                        {/*    <div></div>*/}

                        {/*    <div>*/}
                        {/*        <span className="qualification__rounder"></span>*/}
                        {/*        <span className="qualification__line"></span>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <h3 className="qualification__title">Database, SQL</h3>*/}
                        {/*        <span className="qualification__subtitle">*/}
                        {/*            CodeCool*/}
                        {/*        </span>*/}
                        {/*        <div className="qualification__calendar">*/}
                        {/*            <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>*/}
                        {/*            2022.IX - 2022.XII*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="qualification__data">*/}
                        {/*    <div>*/}
                        {/*        <h3 className="qualification__title">OOP - Java</h3>*/}
                        {/*        <span className="qualification__subtitle">*/}
                        {/*            CodeCool*/}
                        {/*        </span>*/}
                        {/*        <div className="qualification__calendar">*/}
                        {/*            <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>*/}
                        {/*            2022.XII - 2023.III*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <span className="qualification__rounder"></span>*/}
                        {/*        <span className="qualification__line"></span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="qualification__data">*/}
                        {/*    <div></div>*/}

                        {/*    <div>*/}
                        {/*        <span className="qualification__rounder"></span>*/}
                        {/*        <span className="qualification__line"></span>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <h3 className="qualification__title">Accordionist</h3>*/}
                        {/*        <span className="qualification__subtitle">*/}
                        {/*            CodeCool*/}
                        {/*        </span>*/}
                        {/*        <div className="qualification__calendar">*/}
                        {/*            <i className="uil uil-calendar-alt" style={{marginRight: '0.3rem'}}></i>*/}
                        {/*            2014 - Present*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}