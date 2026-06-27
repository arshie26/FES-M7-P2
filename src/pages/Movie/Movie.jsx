import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../../components/Rating";

function Movie(props){

    props.navStyle(true);

    const { id } = useParams();
    const [movie, setMovie] = useState({});

    async function getMovie(){
        let movieRequest = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=b971c236`);
        let movieDetails = await movieRequest.json();
        console.log("Rating is ", movieDetails.imdbRating)
        console.log("Movie is ", movieDetails);
        setMovie(movieDetails);
    }

    useEffect(() => {
        getMovie();
    }, [])
    


    return (
        <div id="books__body">
                <main id="books__main">
                    <div className="books__container">
                        <div className="row">
                            <div className="book__selected--top">
                                <Link to="/find/" className="book__link">
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Link>
                                <Link to="/find/" className="book__link">
                                    <h2 className="book__selected--title--top">Find</h2>
                                </Link>
                            </div>
                            {Object.keys(movie).length > 0?
                                <div className="book__selected">
                                    <figure className="book__selected--figure">
                                        <img className="book__selected--img" src={movie?.Poster} alt=""/>
                                    </figure>
                                    <div className="book__selected--description">
                                        <h2 className="book__selected--title">{movie?.Title}</h2>
                                        
                                        <Rating rating={movie?.imdbRating} />
                                        <div className="book__summary">
                                            <div className="book__summary--title">Summary</div>
                                            <p className="book__summary--para">
                                                {movie.Plot}
                                            </p>
                                            <p className="book__summary--para">
                                                {movie.Actors}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="spinner__container">
                                    <FontAwesomeIcon icon="fa-spinner" className="movies__loading--spinner" />
                                </div>
                            }
                        </div>
                    </div>

                </main>
            
        </div>
    )
}

export default Movie