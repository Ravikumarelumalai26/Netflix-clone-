import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/navbar'; 
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/footer/footer';

function Home() {

  return (
    <div className="home-container"> 
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <h1 className='title'> Never Have I Ever</h1> 
         
          <p className='des'>After a traumatic year, an Indian American teen just wants to spruce <br />up her social status — but friends, family and feelings won't make <br />it easy on her.</p>
          <div className="hero-btns">

          <button className="btn">
          
            <img src={play_icon} alt="" /> Play
          </button>
          
          <button className="btn dark-btn">
            <img src={info_icon} alt="" /> More Info
          </button>
        </div>
        <TitleCards/>
        
        </div>
        
      </div>
      
      <div className='more-cards'>
      
  
      
      <TitleCards  title={"Top Searches"}category={"top_rated"} />
      <TitleCards  title={"MY List"}category={"upcoming"} />

      <TitleCards title={"Today's Top Pic for You"} category={"top_rated"} />
      
      
     
      </div>
      <Footer/>
      
    </div>
  )
}

export default Home