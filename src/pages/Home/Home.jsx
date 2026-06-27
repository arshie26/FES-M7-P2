import React from "react";
import Hero from "../../components/Hero/Hero";
import Footer from '../../components/Footer/Footer'
import NavBar from "../../components/NavBar/NavBar";


function Home(props){

    props.navStyle(true)

    return (
        <>
            <Hero searchFromHome={props.searchFromHome} />
            <Footer />
        </>
    )
}

export default Home