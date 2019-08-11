import React from 'react';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <header className="hero">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="content">
        <h1>We believe in diversity</h1>
        <h2>We value ourself by whom we include, not whom we exclude</h2>
      </div>
    </header>
  );
}

export default Hero;
