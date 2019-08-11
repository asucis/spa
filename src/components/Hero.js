import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
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
      <div className="action">
        <Link
          activeClass="active"
          to="content"
          spy={true}
          smooth={true}
          duration={800}
        >
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </Link>
      </div>
    </header>
  );
}

export default Hero;
