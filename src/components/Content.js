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
    adaptiveHeight: true,
    autoplay: true
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
      <div className="item-container">
        <div className="item event-list">
          <h1>Our events</h1>
          <div className="event">
            <h2>Welcome Carnival</h2>
            <p>
              Introducing new international Sun Devils what it is like to be an
              ASU student.
            </p>
            <button>
              <a
                href="https://www.facebook.com/events/534568717282189/"
                target="blank"
              >
                16 August 2019
              </a>
            </button>
          </div>
          <div className="event">
            <h2>What the Football</h2>
            <p>
              Introducing new international Sun Devils what it is like to be an
              ASU student.
            </p>
            <button>
              <a
                href="https://www.facebook.com/events/702003033570485/"
                target="blank"
              >
                29 August 2019
              </a>
            </button>
          </div>
          <div className="event">
            <h2>International Night</h2>
            <p>
              Our flagship event of the fall semester to highlight and celebrate
              international students on campus.
            </p>
            <button>
              <a href="https://www.facebook.com/asucis" target="blank">
                15 November 2019
              </a>
            </button>
          </div>
          <div className="event">
            <h2>Career Conference</h2>
            <p>
              Helping international students create a pathway for their career
              and future in a one day conference.
            </p>
            <button>
              <a href="https://www.facebook.com/asucis" target="blank">
                TBD
              </a>
            </button>
          </div>
          <div className="event">
            <h2>Glo-Ball Night</h2>
            <p>
              End of academic year celebration dedicated for our partner
              organizations.
            </p>
            <button>
              <a href="https://www.facebook.com/asucis" target="blank">
                TBD
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="item-container">
        <div className="item">
          <div className="left">
            <h1>Contact Us</h1>
          </div>
          <div className="right">
            <p>
              Get in touch with us to learn more about our work and how you can
              get involved. Reach out to our public relations manager - Yi Ao
            </p>
            <p>
              <a href="mailto:hsingyia@asu.edu">hsingyia@asu.edu</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
