import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero (props){

    const [movieName, setMovieName] = useState("");
    const [onSearch, setOnSearch] = useState(false);

    function nameUpdate(event){
        setMovieName(event.target.value)
    }

    return (
        <section id="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <h1 className="home__title">Australia's most awarded movie subscription platform</h1>
                    <h2 className="home__subtitle">WATCH YOUR FAVORITE MOVIES WITH <span className="purple">BLINKER</span></h2>
                    <div className="home__search--container">
                        <input className="home__search" placeholder="Search by Title" value={movieName} onChange={nameUpdate} onKeyDown={(e) => {console.log(e); if(e.key==="Enter"){ setOnSearch(true); return props.searchFromHome(movieName);}}} />
                        <button className="search__button" onClick={() => {setOnSearch(true); return props.searchFromHome(movieName);}} >
                            {onSearch?
                                <FontAwesomeIcon icon="fa-spinner" className="movies__loading--spinner" />
                                :
                                <FontAwesomeIcon icon="fa-magnifying-glass" />  
                            }
                        </button>
                    </div>
                    <div className="home__img--container">
                        <img className="home__image" src="./building.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero