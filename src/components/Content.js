import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import office from '../assets/cis-office.jpg';
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.JPG';
import slide4 from '../assets/slide-4.JPG';
import slide5 from '../assets/slide-5.jpg';
import slide6 from '../assets/slide-6.jpg';

function Content() {
  const settings = {
    className: 'slider',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <main>
      <div className="item-container">
        <div className="item">
          <div className="left">
            <img src={office} alt="asucis-office" />
          </div>
          <div className="right">
            <h1>Our mission</h1>
            <p>
              CIS is a student led organization that acts as a bridge to reflect
              the needs of international students to university administration.
              We aim to enhance international student experience, promote
              cultural diversity and inclusivity in ASU through events and
              service.
            </p>
          </div>
        </div>
      </div>
      <div className="item-container">
        <div className="slider-item">
          <Slider {...settings}>
            <div>
              <img src={slide1} alt="asu-cis-retreat-spring-2018" />
            </div>
            <div>
              <img src={slide2} alt="asu-cis-retreat-spring-2018" />
            </div>
            <div>
              <img src={slide3} alt="asu-cis-retreat-fall-2018" />
            </div>
            <div>
              <img src={slide4} alt="asu-cis-retreat-fall-2018" />
            </div>
            <div>
              <img src={slide5} alt="asu-cis-pitchfork-award-trophy" />
            </div>
            <div>
              <img src={slide6} alt="cis-coffee-with-cops-spring-2018" />
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
}

export default Content;
