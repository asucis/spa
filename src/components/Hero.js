import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

library.add(fab);

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
      <div className="social-links">
        <div className="icon">
          <a href="https://facebook.com/asucis" target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
        </div>
        <div className="icon">
          <a href="https://twitter.com/asu_cis" target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/asucis/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </div>
        <div className="icon">
          {/* <Link to="/wechat"> */}
          <FontAwesomeIcon icon={['fab', 'weixin']} />
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Hero;
