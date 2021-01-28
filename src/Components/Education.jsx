import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hawaii from '../Img/hawaii.svg';
import Pepperdine from '../Img/pepperdine.svg';

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="education-container"
    >
      <h1 data-aos="fade-down" className="education-header">
        Education
      </h1>
      <div className="education-info-container">
        <div className="education-logo-container">
          <img data-aos="flip-up"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png"
            alt="aA"
            className="education-logo"
          />
        </div>
        <div className="education-details-container">
          <div data-aos="fade-down" className="education-title">App Academy</div>
          <p data-aos="fade-down" className="education-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius
            animi obcaecati magni suscipit temporibus neque officia, nemo,
            corporis non, omnis nobis nulla porro ducimus et blanditiis?
            Obcaecati, ipsam nostrum.
          </p>
        </div>
      </div>
      <div className="education-info-container">
        <div className="education-logo-container">
          <img data-aos="flip-up"
            src={Hawaii}
            alt="warriors"
            className="education-logo"
          />
        </div>
        <div className="education-details-container">
          <div data-aos="fade-down" className="education-title">University of Hawaii, Mano'a</div>
          <p data-aos="fade-down" className="education-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius
            animi obcaecati magni suscipit temporibus neque officia, nemo,
            corporis non, omnis nobis nulla porro ducimus et blanditiis?
            Obcaecati, ipsam nostrum.
          </p>
        </div>
      </div>
      <div className="education-info-container">
        <div className="education-logo-container">
          <img data-aos="flip-up"
            src={Pepperdine}
            alt="waves"
            className="education-logo"
          />
        </div>
        <div className="education-details-container">
          <div data-aos="fade-down" className="education-title">Pepperdine University</div>
          <p data-aos="fade-down" className="education-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius
            animi obcaecati magni suscipit temporibus neque officia, nemo,
            corporis non, omnis nobis nulla porro ducimus et blanditiis?
            Obcaecati, ipsam nostrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
