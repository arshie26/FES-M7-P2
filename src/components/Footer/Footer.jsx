import React from "react";
import whitelogo from '../../assets/whitelogo.png'

function Footer(){
    return (
        <footer>
            <div className="footer__wrapper">
                    <div className="icon__container">
                        <img className="icon" src={whitelogo} />
                    </div>
                    <div className="footer__links">
                        <li>
                            <a className="
                            footer__link
                            link__hover--effect" onclick="goHome()">Home</a>
                        </li>
                        <li>
                            <a className="
                            footer__link
                            link__hover--effect" onclick="goFind()">Find your movie</a>
                        </li>
                        <li>
                            <a className="
                            footer__link
                            link__hover--effect">Contact</a>
                        </li>
                    </div>
                    <div className="footer__copyright">Copyright &copy; Arsh Agarwal 2026</div>
            </div>
        </footer>
    )
}

export default Footer