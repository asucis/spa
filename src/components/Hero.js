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
        <h2>
          Valuing our organization by whom we include and how they succeed
        </h2>
      </div>
    </header>
  );
}

export default Hero;
