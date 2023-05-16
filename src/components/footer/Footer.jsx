import React from 'react';
import './footer.css';
import CrypticalLogo from '../../assets/crypticallogo.jpeg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Gontarski</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/rafa%C5%82-gontarski/"
                       className="footer__social-link" target='_blank'>
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/RafalGontarski"
                       className="footer__social-link" target='_blank'>
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="mailto:gontarskirafal@gmail.com"
                       className="footer__social-link" target='_blank'>
                        <i className="bx bxl-gmail"></i>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=48511670859&test=Hello, more information!"
                       className="footer__social-link" target='_blank'>
                        <i className="bx bxl-whatsapp"></i>
                    </a>

                    {/*<a href="https://www.youtube.com/watch?v=3aCoZudPEKE&t=8797s"*/}
                    {/*   className="footer__social-link" target='_blank'>*/}
                    {/*    <i className="bx bxl-youtube"></i>*/}
                    {/*</a>*/}




                </div>
                <span className="footer__copy">
                        &#169; All rights reserved. Special thanks for <a href="https://www.youtube.com/watch?v=3aCoZudPEKE&t=8797s">Cryptical Coder</a>.
                    </span>
            </div>
        </footer>
    )
}