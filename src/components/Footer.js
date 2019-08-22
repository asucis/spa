import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Footer() {
  return (
    <footer>
      <div className="sign-up">
        <div className="text">
          <h3>
            <span role="img" aria-label="excited-hands">
              🙌🏼
            </span>{' '}
            Recruitment for the Fall 2019 semester is now open till August 24.
          </h3>
        </div>
        <div className="action">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYWH-jgigFyOBrsvxmumMnOsHjvbhKMR4PUWByAJzz8q9i0Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Sign up</button>
          </a>
        </div>
      </div>
      <div className="address">
        Visit us:
        <br />
        <br />
        RM 225J, Student Pavilion,
        <br />
        400 E Orange St,
        <br />
        Tempe, Arizona 85281.
      </div>
      <div className="social-links">
        <div className="icon">
          <a
            href="https://facebook.com/asucis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://twitter.com/asu_cis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.instagram.com/asucis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </div>
        <div className="icon">
          <a href="/weixin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'weixin']} />
          </a>
        </div>
      </div>
      <div className="copyright-text">
        Arizona State University © Coalition of International Students. 2019.
        All rights reserved.
      </div>
      <div className="credits">
        Built by{' '}
        <a
          href="https://www.dickwyn.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          dickwyn
        </a>
        . The code is available under the{' '}
        <a
          href="https://github.com/asucis/single-page-website/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT License
        </a>
      </div>
    </footer>
  );
}

export default Footer;
