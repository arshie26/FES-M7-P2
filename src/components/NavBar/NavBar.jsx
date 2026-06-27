import React from "react";
import logo from '../../assets/blinker-icon.png'
import whitelogo from '../../assets/whitelogo.png' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(props){
    
    return (
        <section id="home">
            
            <nav>
                <div className="nav__container">
                    <div className="icon__container">
                        {props.navColor?
                            <img className="icon" src={logo} />
                            :
                            <img className="icon" src={whitelogo} />
                        }
                        
                    </div>
                    <ul className="nav__links">
                        <li>
                            {props.navColor?
                            <a className="
                            nav__link--home
                            link__hover--effect-black" onClick={props.goHome}>Home</a>
                            :
                            <a className="
                            nav__link
                            link__hover--effect" onClick={props.goHome}>Home</a>
                            }
                        </li>
                        <li>
                            {props.navColor?
                            <a className="
                            nav__link--home
                            link__hover--effect-black" onClick={props.goFind}>Find your car</a>
                            :
                            <a className="
                            nav__link
                            link__hover--effect" onClick={props.goFind}>Find your car</a>
                            }
                            
                        </li>
                        <li>
                            <a className="
                            nav__link--home
                            link__hover--effect
                            nav__link--primary">Contact</a>
                        </li>
                    </ul>
                    <button className="btn__menu btn__menu--open" onClick = {props.openMenu}>
                        <FontAwesomeIcon icon="fa-bars" className="fas fa-bars"></FontAwesomeIcon>
                    </button>
                    <div className="nav__mobile">
                        <button className="btn__menu btn__menu--close" onClick = {props.closeMenu}>
                            <FontAwesomeIcon icon="fa-times" className="fas fa-times"></FontAwesomeIcon>
                        </button>
                        <ul className="mobile__nav--links">
                            <li>
                                <a className="
                                nav__link" onclick="goHome()">Home</a>
                            </li>
                            <li>
                                <a className="
                                nav__link" onclick="goFind()">Find your car</a>
                            </li>
                            <li>
                                <a className="
                                nav__link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default NavBar