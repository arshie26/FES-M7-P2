import { use, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Find from './pages/Find/Find'
import Movie from './pages/Movie/Movie'
import './styles.css'

function App() {
  const [navColor, setNavColor] = useState(false);

  let navigate = useNavigate();

  function openMenu(){
      document.body.classList += "open__menu";
  }

  function closeMenu(){
      document.body.classList.remove("open__menu");
  }

  async function searchFromHome(movieName){
      let moviesPromise = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=b971c236`);
      let moviesJson = await moviesPromise.json();
      let moviesList = moviesJson.Search;
      console.log(moviesList);
      localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  function goHome(){
      navigate("/")
  }

  function goFind(){
      navigate("find/")
  }

  function navStyle(page){
    setNavColor(page);
  }

  return (
    <>
      <NavBar openMenu={openMenu} closeMenu={closeMenu} goHome={goHome} goFind={goFind} navColor={navColor} />
      
      
        <Routes>
          <Route path="/" element={<Home searchFromHome={searchFromHome} navStyle={navStyle} />}  />
          <Route path="/find" element={<Find navStyle={navStyle} searchFromHome={searchFromHome} />} />
          <Route path='/movie/:id' element={<Movie navStyle={navStyle} />} />
        </Routes>
      

    </>
  )
}

export default App
