import React from 'react';
import Navbar from './Navbar';
import '../style/Homepage.css';
import logo from '../assets/bg1.png';

const Homepage = () => {
  return (
    <div className='home'>
     
        <img src={logo} alt="logo" className="homelogo" id='home' />
        <button className="homebutton">REGISTER NOW</button>
        {/* background-image: url("../assets/bg5.png"); */}
      <Navbar />
    </div>
  );
};

export default Homepage;
