import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SheepSplash from "../Img/sheepsplash.png";
import SheepSneakers from "../Img/sheepsneakers.png";
import SheepCart from "../Img/sheepcart.png";
import SheepGif from "../Img/sheep.gif";
import LeftArrow from "../Img/left-arrow.svg";
import RightArrow from "../Img/right-arrow.svg";
import CarouselContainer from "./CarouselContainer";

const Sheep = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    setTranslate(getWidth());
    setSlides([lastSlide, firstSlide, secondSlide]);
  }, []);
  const [idx, setIdx] = useState(0);
  const [transition, setTransition] = useState(0.45);
  const [translate, setTranslate] = useState();
  const imgs = [SheepSplash, SheepGif, SheepSneakers, SheepCart];
  const firstSlide = imgs[0];
  const secondSlide = imgs[1];
  const lastSlide = imgs[3];
  const [slides, setSlides] = useState([]);
  const imgContainer = useRef();
  const transitionRef = useRef();

  const getWidth = () => {
    return imgContainer.current.offsetWidth - 16;
  };

  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const resize = () => {
      setTranslate(getWidth());
      setTransition(0);
    };

    const smooth = e => {
      if (e.target.className.includes("CarouselContainer")) {
        transitionRef.current();
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("transitionend", smooth);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("transitionend", smooth);
    };
  });

  useEffect(() => {
    if (transition === 0) setTransition(0.45);
  }, [transition]);

  const smoothTransition = () => {
    let update = [];

    if (idx === imgs.length - 1) {
      update = [imgs[imgs.length - 2], lastSlide, firstSlide, secondSlide];
    } else if (idx === 0) {
      update = [lastSlide, firstSlide, secondSlide];
    } else {
      update = imgs.slice(idx - 1, idx + 2);
    }

    setSlides(update);
    setTranslate(getWidth());
    setTransition(0);
  };

  const nextSlide = () => {
    if (idx === 3) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
    setTranslate(translate + getWidth());
  };

  const prevSlide = () => {
    if (idx === 0) {
      setIdx(3);
    } else {
      setIdx(idx - 1);
    }
    setTranslate(0);
  };

  return (
    <div data-aos="fade" className="project-container">
      <div className="project-main-section">
        <div className="project-left">
          <h1
            className="project-splash-header"
            data-aos-duration="3000"
            data-aos="zoom-in-down"
          >
            <a href="https://trello2.herokuapp.com/">Sheep</a>
          </h1>
          <p data-aos="fade-right" className="project-description">
            A clone of goat.com, where users can buy/sell rare and exclusive
            sneakers and apparel
          </p>
          <ul>
            <li data-aos="fade-left" className="project-point">
              Solely developed an e-commerce website over a 14-day timeframe,
              following RESTful APIs and reactive design principles in designing
              a single-page website using React.js and Redux
            </li>
            <li data-aos="fade-right" className="project-point">
              Integrated the backend with the AWS S3 with Active Storage to
              populate product images
            </li>
            <li data-aos="fade-left" className="project-point">
              Designed flat payload with JBuilder on backend to render frontend
              components and update in real-time
            </li>
            <li data-aos="fade-right" className="project-point">
              Optimized PostgreSQL database to avoid N+1 queries with Active
              Record associations by extracting data from multiple tables in a
              single query
            </li>
          </ul>
          <h3 data-aos="zoom-in-up" className="project-technology-header">
            Technologies
          </h3>
          <div className="project-technologies-container">
            <li data-aos="zoom-in-up" className="project-technology">
              Rails
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              AWS S3
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              React.js
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              Webpack
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              PostgreSQL
            </li>
          </div>
        </div>
        <div className="project-right">
          <div
            data-aos="zoom-in-down"
            className="project-img-container"
            ref={imgContainer}
          >
            <div className="project-arrow-background-left">
              <img
                className="project-scroll-arrow"
                src={LeftArrow}
                onClick={prevSlide}
                alt=""
              />
            </div>
            <CarouselContainer translate={translate} transition={transition}>
              {slides.map((image, i) => (
                <img key={i + 1} src={image} className="project-img" />
              ))}
            </CarouselContainer>
            <div className="project-arrow-background-right">
              <img
                className="project-scroll-arrow"
                onClick={nextSlide}
                src={RightArrow}
                alt=""
              />
            </div>
          </div>
          <div data-aos="fade-up" className="project-links-container">
            <div className="project-link-background">
              <a className="project-link" href="https://trello2.herokuapp.com/">
                Live Site
              </a>
            </div>
            <div className="project-link-background">
              <a
                className="project-link"
                href="https://github.com/hkryucr/trello-clone"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheep;
