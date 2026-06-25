import React, { useEffect } from "react";
import { useState } from "react";
import '../../styles.css'

function Find(props){

    props.navStyle(false)

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("movies")){
            getMoviesFromStorage();
        }
    }, [])

    

    function getMoviesFromStorage(){
        console.log("getting movies")
        let movies = JSON.parse(localStorage.getItem("movies"));
        if(movies){
            console.log("movies has movies")
            setMoviesList(movies.Search)
        }
        console.log("Movies is ", movies)
        console.log("MoviesList is ", moviesList)
    }
   
    async function getMovies(event){
        let cardsWrapper = document.querySelector(".cards");
        cardsWrapper.innerHTML = `
            <div class="spinner__container">
                <i className="fas fa-spinner movies__loading--spinner"></i>
            </div>`;
        let query = document.querySelector(".search");
        let userSearch = query.value;
        let moviesPromise = await fetch(`https://www.omdbapi.com/?s=${userSearch}&apikey=b971c236`);
        moviesList = await moviesPromise.json();
        renderMovies();
    }
    
    function renderMovies(filter){
        console.log(filter);
        console.log(moviesList)
        let updatedMovies;
        if(filter === "year"){
            console.log("filtering by year");
            updatedMovies = moviesList.sort((a, b) => {
                if(a.Year.includes("–")){
                    console.log("year has -");
                    return year = a.Year.substring(0,4) - b.Year;
                } 
                else if (b.Year.includes("–")){
                    console.log("year has -");
                    return a.Year - b.Year.substring(0,4);
                }
                return a.Year > b.Year;
            });
            
        }
        else if(filter === "name"){
            updatedMovies = moviesList.sort((a, b) => {
                return b.Title < a.Title;
            });
            
        }
        else{
            setMoviesList(moviesList.sort((a, b) => {
                return b.Type < a.Type;
            }))
        }
        console.log(moviesList);
        setMoviesList(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(moviesList))
    }


    return (
        <div>
            <section id="landing">
                <div className="browse__container">
                    <h1 className="hero__title">Browse our movies</h1>
                    <div className="find__search--container">
                        <input className="search" placeholder="Search by Make, Model or Keyword" onInput="getMovies(event)" />
                        <button className="find__search--button" onClick = "getMovies(event)">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <div className="overlay">    
                </div>
            </section>
            <section id="results">
                <div className="sorting__bar">
                    <h2 className="results__title">Search results: </h2>
                    <select className="sort__movies" onChange={() => {renderMovies(event.target.value)}}>
                        <option value="Select" selected disabled>Sort</option>
                        <option value="year">Year</option>
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                    </select>
                </div>
                <div className="cards">
                    {moviesList?
                        moviesList.map((movie, index) => {
                            return ( 
                            <div key={index} className="card">
                                <div className="img__container">
                                    <img className="img" src={movie.Poster} />
                                </div>
                                <div className="description">
                                    <h4 className="title">{movie.Title}</h4>
                                    <div>
                                        <i className="fa-solid fa-calendar"></i>
                                        <p className="year">{movie.Year}</p>
                                    </div>
                                    <div>
                                        <i className="fa-regular fa-id-badge"></i>
                                        <p className="imdbID">{movie.imdbID}</p>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-tv"></i>
                                        <p className="type">{movie.Type}</p>
                                    </div>
                                </div>
                            </div>
                        )})
                        :
                        <div className="spinner__container">
                            <i className="fas fa-spinner movies__loading--spinner"></i>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default Find