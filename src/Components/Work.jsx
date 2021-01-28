import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Mar from '../Img/Mar.png'

const Work = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    return (
      <div className="work-container" >
        <h1 data-aos="zoom-in-up" className="work-header">
          Work Experience
        </h1>
        <div className="work-company-container">
          <div className="work-company-logo-container">
            <img data-aos="fade-in" src={Mar} alt="mar" className="work-company-logo" />
          </div>
          <div className="work-company-info-container">
            <div className="work-company-position-container">
              <div data-aos="fade-in" className="work-company-position">Manager (MAR Training)</div>
            </div>
            <ul className="work-company-description-container">
              <li data-aos="fade-right" className="work-company-description">
                Processed more than 150 fitness and evaluation reports, 1,000+ command instructions, and 100s of temporary duty orders.
              </li>
              <li data-aos="fade-right" className="work-company-description">
                Managed all gym operations, from cleaning the equipment daily, mopping the gym floor weekly, recruiting and evaluating new clients, and training individual clients to groups of 10+
              </li>
              <li data-aos="fade-right" className="work-company-description">
                In charge scheduling client training sessions, logging works hours for trainers, and processing payment plans for each individual or team
              </li>
            </ul>
          </div>
        </div>
        <div className="work-company-container">
          <div className="work-company-logo-container">
            <img data-aos="flip-up"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/L%26L_Hawaiian_Barbecue_logo.svg/128px-L%26L_Hawaiian_Barbecue_logo.svg.png"
              alt="landl"
              className="work-company-logo"
            />
          </div>
          <div className="work-company-info-container">
            <div className="work-company-position-container">
              <div data-aos="flip-up" className="work-company-position">Manager</div>
            </div>
            <ul className="work-company-description-container">
              <li data-aos="fade-right" className="work-company-description">
                Oversaw restaurant operations completing over 100,000 orders successfully 
              </li>
              <li data-aos="fade-right" className="work-company-description">
                Increased Revenue by over 15% for the year streamlining the payment process and designed logistic system to get orders out as efficiently as possible
              </li>
            </ul>
          </div>
        </div>
        <div className="work-company-container">
          <div className="work-company-logo-container">
            <img data-aos="fade-in"
              src="https://hsba.org/images/HSBA/Header/images/HSBA_TAG_LOGO_Blue_Transparent.png"
              alt="hsba"
              className="work-company-logo"
            />
          </div>
          <div className="work-company-info-container">
            <div className="work-company-position-container">
              <div data-aos="flip-up" className="work-company-position">CLE Assistant/Executive Secretary</div>
            </div>
            <ul className="work-company-description-container">
              <li data-aos="fade-right" className="work-company-description">
                Coordinated more than 100 Board and Executive meetings and managed event registration for all lawyers based in Hawaii
              </li>
              <li data-aos="fade-right" className="work-company-description">
                Built strong trust with Executive Director to handle highly sensitive materials 
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Work