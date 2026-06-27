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
        
                        <div className="row">
                            <div className="movie__selected--top">
                                <Link to="/find/" className="movie__link">
                                    <FontAwesomeIcon icon="arrow-left" />
                                </Link>
                                <Link to="/find/" className="movie__link">
                                    <h2 className="movie__selected--title--top">Find</h2>
                                </Link>
                            </div>
                            {Object.keys(movie).length > 0?
                                <div className="movie__selected">
                                    <figure className="movie__selected--figure">
                                        <img className="movie__selected--img" src={movie?.Poster} alt=""/>
                                    </figure>
                                    <div className="movie__selected--description">
                                        <h2 className="movie__selected--title">{movie?.Title}</h2>
                                        
                                        <Rating rating={movie?.imdbRating} />
                                        <div className="movie__summary">
                                            <div className="movie__summary--title">Summary</div>
                                            <p className="movie__summary--para">
                                                {movie.Plot}
                                            </p>
                                            <p className="movie__summary--para">
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
              
    )
}

export default Movie