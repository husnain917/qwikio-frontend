import React, { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../image/7c60c1012821ce5e0cd611fea12e2617'
import image2 from '../../image/1ddd518cde1f9bbebcd081af43a25f56'
import image4 from '../../image/ffe9bc991256ac445f0ca145bff48f85'
import image5 from '../../image/e022ca0fd51c6dff646c69a02883a139'
import "./Pride.css";
import Footer from "../../components/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Pride = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="Riidax">
      <div className="Header PrideHeader">
        <div className="Head">
          <Menu />
          <div>
            <h1>Qwikio Pride</h1>
            <button>Discover Pride</button>
          </div>
          <div className="speed">
            <div>
              <h6>Official EPA range up to</h6>
              <h2>195 mi</h2>
            </div>
            <div>
              <h6>Starting from</h6>
              <h2>$29,500</h2>
            </div>
            <div>
              <h6>Max Power</h6>
              <h2>450 hp</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="PrideSlider sliders">
        <Slider {...setting}>
          <div className="item item1">
            <div>
              <h4>Delivering Fall 2022</h4>
              <h2>Qwikio Riida X</h2>
              <p>From $25,500 / 400 hp / 195 mi range</p>
              <button>Discover Riida X</button>
            </div>
          </div>
          <div className="item item2">
            <div>
              <h4>Delivering Fall 2022</h4>
              <h2>Qwikio Riida XL</h2>
              <p>From $28,500 / 450 hp / 195 mi range</p>
              <button>Discover Riida XL</button>
            </div>
          </div>
          <div className="item item3">
            <div>
              <h4>Delivering Fall 2022</h4>
              <h2>Qwikio Pride</h2>
              <p>From $32,500 / 550 hp / 275 mi range</p>
              <button>Discover Pride</button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="vision">
        <h2>
          <span>Our</span> Vision
        </h2>
        <p>
          <span>
            At Qwikio, we are guided by the firm belief that the future of our
            planet is our collective responsibility. This belief propels our
            business policies and
          </span>{" "}
          our innovative product designs. At every step in our process, we
          prioritize building cars and mobility solutions that are both
          comfortably affordable and eco-friendly. Above all else, we want to
          play a lead role in the propagation of a clean environment for
          everyone.
        </p>
      </div>
      <div className="riidaxImg"></div>
      <div className="riidaX">
        <div>
          <div>
            <h4>#Riida X #Riida XL #Pride</h4>
          </div>
          <div>
            <h4>Follow us @Qwikio</h4>
          </div>
        </div>
      </div>
      <div className="multipleSlider">
        <Slider {...settings}>
            <div className="item">
                <img src={image1} alt="" />
            </div>
            <div className="item">
                <img src={image2} alt="" />
            </div>
            <div className="item">
                <img src={image4} alt="" />
            </div>
            <div className="item">
                <img src={image5} alt="" />
            </div>
            </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default Pride;
