import React from 'react'
import "./Home.css"
//import isotipo from "../../src/assets/isotipoEstampa.png";
import NavBar from '../components/NavBar';
function Home() {
  return (
    <>
          <NavBar />
    {/*
          <div className='inicio'>
        <a href="#home">
          <img className='img-centro' src={isotipo} alt="estampa-centro" />
        </a>
        <h1 className='h1-hero'>BIENVENIDOS A ESTAMPA</h1>
        <h2 className='h2-hero'>Todo para promociones empresariales</h2>
      </div>
  */}
<div  id="home" className='background'></div>
    </>
  )
}

export default Home