import React from "react";
import Charging from "../../components/Charging/Charging";
import Connectivity from "../../components/Connectivity/Connectivity";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import './Home.css'
import HomeIntro from "./HomeIntro";

const Home3 = () => {
  return (
    <div>
      <div className="homeHeader home3Header">
        <div>
          <Menu />
          <div className="content">
            <div>
              <h2>Luxury Reimagined</h2>
            </div>
            <div>
              <h4>Qwikio Pride</h4>
            </div>
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
              550 <sub>HP</sub>
            </h1>
          </div>
          <div>
            <h6>Official EPA range up to</h6>
            <h1>
              275 <sub>mi</sub>
            </h1>
          </div>
          <div>
            <h6>Approximate minutes to charge 300 miles</h6>
            <h1>25</h1>
          </div>
          <div>
            <h6>Secondes 0-60 mph</h6>
            <h1>7.5</h1>
          </div>
        </div>
        <div className="home3carImage carImage"></div>
      </div>
      <div className="design">
        <h2>Design</h2>
        <p>
        The Qwikio Pride is designed for comfort, stabilitiy and a compact cross-over body that handles well in all driving condition. The Qwikio Driver Assistance platform delivers a pleasureable driving experience.
        </p>
        <div className="features">
          <div>
            <h2>0.23</h2>
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
        <div className="home3carImage2 carImage2"></div>
      </div>
      <div className="performance design">
        <h2>Performance</h2>
        <p>
          Delivers the performance of a four-wheel with dynamism of a cross-over
        </p>
        <div className="features">
          <div>
            <h2>
              550 <sub>HP</sub>
            </h2>
            <h6>Max power</h6>
          </div>
          <div>
            <h2>275 miles</h2>
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
        <div className="home3PerCarImage carImage2 perCarImage"></div>
      </div>
      <div className='Connectivity design'>
            <h2>Connectivity</h2>
            <p>Get the premium connected car experience with the Riida XL. Enjoy the space, start the car with the Qwikio App</p>
            <div className="features">
                <div>
                    <h2>16-inch, 5K</h2>
                    <h6>Glass Cockpit display</h6>
                </div>
                <div>
                    <h2>Over-the-air</h2>
                    <h6>software updates</h6>
                </div>
                <div>
                    <h2>16-speaker</h2>
                    <h6>Surreal Sound™ system</h6>
                </div>
                <div>
                    <h2>Alexa Enabled</h2>
                    <h6>Voice command</h6>
                </div>
            </div>
            <div className="carImage2 home3ConnectCarImage">
                
            </div>
        </div>
        <div className='charging design'>
            <h2>Charging</h2>
            <p>Fast charging delivered with the best charging technology</p>
            <div className="features">
                <div>
                    <h2>25 minutes</h2>
                    <h6>approximately for 150-mile charge³</h6>
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
            <div className="carImage2 home3CharCarImage">
                
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default Home3;
