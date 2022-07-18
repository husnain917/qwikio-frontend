import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../image/7c60c1012821ce5e0cd611fea12e2617";
import image2 from "../../image/1ddd518cde1f9bbebcd081af43a25f56";
import image4 from "../../image/ffe9bc991256ac445f0ca145bff48f85";
import image5 from "../../image/e022ca0fd51c6dff646c69a02883a139";
import "./Riidax.css";
import Footer from "../../components/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Vision from "../../components/Vision/Vision";

import video from "../../videos/home.mp4"

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

const Riidax = () => {

  const [slideval, setslideval] = useState(3);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: slideval,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {

    function myFunction(x) {
      if (x.matches) {
        setslideval(1);
      } else {
        setslideval(3);
      }
    }

    var x = window.matchMedia("(max-width: 500px)")
    myFunction(x) // Call listener function at run time
    x.addEventListener('change', myFunction) // Attach listener function on state changes

  });

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (



    <div className="Riidax">
      <Menu />
      <div className="sliders">
        <Slider {...setting}>
          <div className="item item1 uk-animation">
            <div uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 300">
              <h4>Delivering Fall 2022</h4>
              <h2>Qwikio Riida XL</h2>
              <p>Battery Capacity 44.5 kWh / 400 hp / 195 mi range</p>
              <Link className="button" to="/Product">
                Discover Riida XL
              </Link>
            </div>
          </div>
          <div className="item item2 uk-animation">
            <div uk-scrollspy="cls: uk-animation-slide-left-small; delay: 300">
              <h4>Delivering Fall 2022</h4>
              <h2>Qwikio Riida X</h2>
              <p>Battery Capacity 44.5 kWh  / 400 hp / 195 mi range</p>
              <Link className="button" to="/Product">
                Discover Riida X
              </Link>
            </div>
          </div>
          <div className="item item3 uk-animation">
            <div uk-scrollspy="cls: uk-animation-slide-right-small; delay: 300">
              <h4>Delivering Fall 2022</h4>
              <h2>Qwikio Pride</h2>
              <p>Battery Capacity 66.5 kWh  / 500 hp / 275 mi range</p>
              <Link className="button" to="/luxury">
                Discover Riida XL
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      {/* Bus */}
      <div className='bus-vehicle-container'>
        <div className='name-desc-row'>
          <div className='vehcile-name-container'>
            <p>QWIKIO BUS</p>
          </div>
          <div className='desc-container'>
            <p> A RADICALLY REIMAGINED URBAN UTILITY VEHICLE. BEAUTIFUL, FUNCTIONAL, AFFORDABLE AND SUSTAINABLE. CUSTOMISABLE TO SUIT YOUR NEEDS.</p>
            <Link className='link-text' to='/bus'><button className='learn-more-btn'>LEARN MORE</button></Link>
          </div>
        </div>
      </div>
      {/* Rideshare */}
      <div className='rideshare-vehicle-container'>
        <div className='name-desc-row'>
          <div className='vehcile-name-container'>
            <p>QWIKIO RIDESHARE</p>
          </div>
          <div className='desc-container'>
            <p> A RADICALLY REIMAGINED URBAN UTILITY VEHICLE. BEAUTIFUL, FUNCTIONAL, AFFORDABLE AND SUSTAINABLE. CUSTOMISABLE TO SUIT YOUR NEEDS.</p>
            <Link className='link-text' to='/rideshare'><button className='learn-more-btn'>LEARN MORE</button></Link>
          </div>
        </div>
      </div>
      {/* luxury */}
      <div className='luxury-vehicle-container'>
        <div className='name-desc-row'>
          <div className='vehcile-name-container'>
            <p>QWIKIO LUXURY</p>
          </div>
          <div className='desc-container'>
            <p> A RADICALLY REIMAGINED URBAN UTILITY VEHICLE. BEAUTIFUL, FUNCTIONAL, AFFORDABLE AND SUSTAINABLE. CUSTOMISABLE TO SUIT YOUR NEEDS.</p>
            <Link className='link-text' to='/luxury'><button className='learn-more-btn'>LEARN MORE</button></Link>
          </div>
        </div>
      </div>
      {/* Police Van */}
      <div className='police-van-vehicle-container'>
        <div className='name-desc-row'>
          <div className='vehcile-name-container'>
            <p>QWIKIO POLICE VAN</p>
          </div>
          <div className='desc-container'>
            <p> A RADICALLY REIMAGINED URBAN UTILITY VEHICLE. BEAUTIFUL, FUNCTIONAL, AFFORDABLE AND SUSTAINABLE. CUSTOMISABLE TO SUIT YOUR NEEDS.</p>
            <Link className='link-text' to='/specialty'><button className='learn-more-btn'>LEARN MORE</button></Link>
          </div>
        </div>
      </div>
      {/* Ambulance */}
      <div className='ambulance-vehicle-container'>
        <div className='name-desc-row'>
          <div className='vehcile-name-container'>
            <p>QWIKIO AMBULANCE</p>
          </div>
          <div className='desc-container'>
            <p> A RADICALLY REIMAGINED URBAN UTILITY VEHICLE. BEAUTIFUL, FUNCTIONAL, AFFORDABLE AND SUSTAINABLE. CUSTOMISABLE TO SUIT YOUR NEEDS.</p>
            <Link className='link-text' to='/specialty'><button className='learn-more-btn'>LEARN MORE</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Riidax;
