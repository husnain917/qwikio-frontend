import React from "react";
import Charging from "../../components/Charging/Charging";
import Connectivity from "../../components/Connectivity/Connectivity";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import "./Home.css";
import HomeIntro from "./HomeIntro";

const Home2 = () => {
  return (
    <div>
      <div className="homeHeader home2Header">
        <Menu />
        <div className="content">
          <div>
            <h2>Welcome To The Future</h2>
            <h3>Of Rideshare And Last-mile Mobility</h3>
          </div>
          <div>
            <h4>Qwikio Riida X</h4>
          </div>
        </div>
      </div>
      <div className="introduction">
        <div>
          <HomeIntro/>
        </div>
        <div className="performance">
          <div>
            <h6>Max power</h6>
            <h1>
              400 <sub>HP</sub>
            </h1>
          </div>
          <div>
            <h6>Official EPA range up to</h6>
            <h1>
              195 <sub>mi</sub>
            </h1>
          </div>
          <div>
            <h6>Approximate minutes to charge 300 miles</h6>
            <h1>40</h1>
          </div>
          <div>
            <h6>Secondes 0-60 mph</h6>
            <h1>10</h1>
          </div>
        </div>
        <div className="home2carImage carImage"></div>
      </div>
      <div className='design'>
            <h2>Design</h2>
            <p>Rideshare mobility has never been so clean. The Riida is purpose-designed to provide comfort for passengers and make driving easy and safe for drivers. The Riida packs premium features in an affordable car made for ride-share drivers.</p>
            <div className="features">
                <div>
                    <h2>0.25</h2>
                    <h6>coefficient of drag</h6>
                </div>
                <div>
                    <h2>Sustainable</h2>
                    <h6>materials and finishes</h6>
                </div>
                <div>
                    <h2>Large cargo trunk</h2>
                    <h6>suitable for rideshare</h6>
                </div>
                <div>
                    <h2>Spacious</h2>
                    <h6>Legroom and lots of spaces</h6>
                </div>
            </div>
            <div className="home2carImage2 carImage2">
                
            </div>
        </div>
        <div className='performance design'>
            <h2>Performance</h2>
            <p>Designed for the rideshare driver with safety and unrivaled technology developed to delivery and intelligent car that makes the driver's life easy</p>
            <div className="features">
                <div>
                    <h2>450 <sub>HP</sub></h2>
                    <h6>Max power</h6>
                </div>
                <div>
                    <h2>195 miles</h2>
                    <h6>Official EPA range up to</h6>
                </div>
                <div>
                    <h2>Map Head Display</h2>
                    <h6>advanced driver assistance system</h6>
                </div>
                <div>
                    <h2>Ultra-efficient</h2>
                    <h6>miniaturized EV powertrain</h6>
                </div>
            </div>
            <div className="homePerCarImage carImage2 perCarImage">
                
            </div>
        </div>
        <Connectivity />
        <div className='charging2 design'>
            <h2>Charging</h2>
            <p>Because rideshare drivers cannot afford downtime we gave priory to the battery that will go into the Riida XL</p>
            <div className="features">
                <div>
                    <h2>40 minutes</h2>
                    <h6>approximately for 300-mile charge³</h6>
                </div>
                <div>
                    <h2>Ultrafast 650V+</h2>
                    <h6>charging system</h6>
                </div>
                <div>
                    <h2>2,400+ chargers</h2>
                    <h6>through Electrify America</h6>
                </div>
                <div>
                    <h2>Bi-directional</h2>
                    <h6>charging capabilities</h6>
                </div>
            </div>
            <div className="carImage2 charCarImage2">
                
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Home2;
