import { use, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Find from './pages/Find/Find'
import './styles.css'

function App() {
  const [navColor, setNavColor] = useState(false);
  const [onSearch, setOnSearch] = useState(false);

  /*setTimeout(() => {
    let searchBar = document.querySelector(".home__search");
    searchBar.addEventListener('keydown', (event) => {
        if(event.key === "Enter"){
            searchFromHome(event);
        }
    });
  })*/

  function openMenu(){
      document.body.classList += "open__menu";
  }

  function closeMenu(){
      document.body.classList.remove("open__menu");
  }

  async function searchFromHome(movieName){
      /*console.log(event);
      let query = document.querySelector(".home__search");
      let buttonWrapper = document.querySelector(".search__button");
      buttonWrapper.focus();
      buttonWrapper.innerHTML = `<i class="fas fa-spinner movies__loading--spinner"></i>`;
      console.log("Search term was ", query.value);*/
      setOnSearch(true)
      let moviesPromise = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=b971c236`);
      let moviesList = await moviesPromise.json();
      localStorage.setItem("movies", JSON.stringify(moviesList));
      goFind();
  }

  function goHome(){
      let url = window.location.href;
      window.location.href=url;
  }

  function goFind(){
      let url = window.location.href;
      if(window.location.href.includes("index.html")){
          url = window.location.href.slice(0, window.location.href.length-10);
      }
      url += "find/";
      window.location.href=url;
  }

  function navStyle(page){
    setNavColor(page);
  }

  return (
    <>
      <NavBar openMenu={openMenu} closeMenu={closeMenu} goHome={goHome} goFind={goFind} navColor={navColor} />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home searchFromHome={searchFromHome} onSearch={onSearch} />}  />
          <Route path="/find" element={<Find navStyle={navStyle} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
