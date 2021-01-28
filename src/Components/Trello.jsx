import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TrelloSplash from "../Img/trelloSplash.png";
import TrelloMain from "../Img/trello-main.png";
import TrelloBoard from "../Img/trello-board.png";
import LeftArrow from "../Img/left-arrow.svg";
import RightArrow from "../Img/right-arrow.svg";
import TrelloGif from "../Img/trello.gif";
import CarouselContainer from "./CarouselContainer";

const Trello = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    setTranslate(getWidth());
    setSlides([lastSlide, firstSlide, secondSlide]);
  }, []);
  const [idx, setIdx] = useState(0);
  const [transition, setTransition] = useState(0.45);
  const [translate, setTranslate] = useState();
  const imgs = [TrelloSplash, TrelloGif, TrelloMain, TrelloBoard];
  const firstSlide = imgs[0];
  const secondSlide = imgs[1];
  const lastSlide = imgs[3];
  const [slides, setSlides] = useState([]);
  const imgContainer = useRef();
  const transitionRef = useRef();

  const getWidth = () => {
    return imgContainer.current.offsetWidth - 20;
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
            <a href="https://trello2.herokuapp.com/">Trello Clone</a>
          </h1>
          <p data-aos="fade-right" className="project-description">
            Web based, Kan-ban style, list making application to organize
            projects and more.
          </p>
          <ul>
            <li data-aos="fade-left" className="project-point">
              Architected SPA (Single-Page Application) using best practices in
              state management by incorporating Vue.js and Vuex
            </li>
            <li data-aos="fade-right" className="project-point">
              Led a 4-person team developing a project managing application,
              controlling Git workflow and leading system design while
              overseeing completion within 2 months time frame
            </li>
            <li data-aos="fade-left" className="project-point">
              Utilized Socket.io to implement realtime communication between web
              clients and server
            </li>
            <li data-aos="fade-right" className="project-point">
              Implemented fully responsive, device-agnostic front end web page
              using CSS flexbox and media queries
            </li>
          </ul>
          <h3 data-aos="zoom-in-up" className="project-technology-header">
            Technologies
          </h3>
          <div className="project-technologies-container">
            <li data-aos="zoom-in-up" className="project-technology">
              Vue.js
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              Node.js
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              Express.js
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              MongoDB
            </li>
            <li data-aos="zoom-in-up" className="project-technology">
              Socket.io
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

export default Trello;
