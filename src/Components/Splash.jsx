import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Splash() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="splash-page">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        data-aos-delay="2500"
        className="splash-background"
      ></div>
      <div className="header-text-container">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="header-text"
        >
          Software Engineering.
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="header-text"
        >
          Investing.
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="header-text"
        >
          Gardening.
        </div>
      </div>
      <div className="header-container">
        <h1
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="2500"
          className="header-name"
        >
          RYAN LEUNG
        </h1>
        <div className="profile-links-container">
          <a
            data-aos="zoom-in-right"
            data-aos-duration="3000"
            data-aos-delay="2500"
            className="profile-link"
            target="_blank"
            href="https://www.linkedin.com/in/ryan-leung-324a45188/"
          >
            <i style={{ fontSize: "20px" }} className="fab fa-linkedin"></i>
          </a>
          <a
            data-aos="zoom-in-right"
            data-aos-duration="3000"
            data-aos-delay="2500"
            className="profile-link"
            target="_blank"
            href="https://github.com/mckgegis"
          >
            <i style={{ fontSize: "20px" }} className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-delay="3000"
        className="splash-arrow-container"
        data-aos-anchor-placement="top"
      >
        ><div className="splash-arrow"></div>
        <div className="splash-arrow"></div>
        <div className="splash-arrow"></div>
      </div>
    </div>
  );
}

export default Splash;
