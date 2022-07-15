import React from 'react';
import Charging from '../../components/Charging/Charging';
import Connectivity from '../../components/Connectivity/Connectivity';
import Design from '../../components/Design/Design';
import Footer from '../../components/Footer/Footer';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Introduction from '../../components/Introduction/Introduction';
import Performance from '../../components/Performance/Performance';
import HomeIntro from "./HomeIntro";
import './Home.css'

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <div className="introduction">

                <HomeIntro/>
                
            <div className="performance">
                <div>
                    <h6>Max power</h6>
                    <h1>450 <sub>HP</sub></h1>
                </div>
                <div>
                    <h6>Official EPA range up to</h6>
                    <h1>195 <sub>mi</sub></h1>
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
            <div className="carImage"></div>
        </div>
            <Introduction />
            <Design />
            <Performance />
            <Connectivity />
            <Charging />
            <Footer />
        </div>
    );
};

export default Home;