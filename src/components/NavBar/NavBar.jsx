import React from "react";
import logo from '../../assets/blinker-icon.png' 

function NavBar(props){
    
    return (
        <section id="home">
            
            <nav>
                <div className="nav__container">
                    <div className="icon__container">
                        <img className="icon" src={logo} />
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
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="nav__mobile">
                        <button className="btn__menu btn__menu--close" onClick = {props.closeMenu}>
                            <i className="fas fa-times"></i>
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