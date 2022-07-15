import React from "react";
import Menu from "../../components/Menu/Menu";
import image1 from "../../image/f10f65a005c0cf72663f33694ffafd24";
import image2 from "../../image/663e1d2042cfc2da54c713bc81ba4a68";
import image3 from "../../image/7c60c1012821ce5e0cd611fea12e2617";
import Footer from '../../components/Footer/Footer'
import "./Qwlklo.css";
import QwlkloIntro from "../../components/QwlkloIntro/QwlkloIntro";

const Qwlklo = () => {
  return (
    <div className="qwlklo">
      <div className="Header">
        <div>
          <Menu name='why-qwikio' />
          <h1>WE ARE QWIKIO</h1>
        </div>
      </div>
      <div className="qwlkloContent">
        <QwlkloIntro />
      </div>
      <div className="Commitment">
        <div className="left">
          <h4>Commitment to Sustainbility</h4>
          <p>
            We want to build intelligent, inspiring cars designed for all modes
            of transportation while also being environmentally friendly. Qwikio
            places a premium on efficiency because our vehicles must make the
            best use of the world's resources and be affordable and sustainable.
            As a result, each Qwikio provides an exceptional range while
            maintaining high performance and unmatched comfort.
          </p>
        </div>
        <div className="right">
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="leaderShip">
        <div className="left">
          <img src={image2} alt="" />
        </div>
        <div className="right">
          <h4>Our Leadership Team</h4>
          <p>
            The executive team at Qwikio has extensive knowledge and experience
            in the automotive and technology sectors and executive experience in
            consulting, manufacturing, and Fortune 500 companies. Our greatest
            strength is our team's experience. Our President/ CTO is an
            entrepreneur with Bain consulting experience and over 20 years of
            experience manufacturing aftermarket sensors and chips for Chrysler,
            Ford, and GM. Our co-founders have over 60 years of combined
            experience in the military, manufacturing, consulting, and business.
            Our advisory board comprises people with military, legal,
            entrepreneurial, and Fortune 500 experience and years of strategy
            consulting at McKinsey, Bain, and KPMG. This multifaceted approach
            is critical to the company's credibility and success in today's
            market.
          </p>
        </div>
      </div>
      <div className="Commitment">
        <div className="left">
          <h4>Become a Qwikio Person</h4>
          <p>
            Join our team and learn from some of the best minds in automotive
            and technology. Not only do we offer competitive salaries, but our
            goal is to cultivate a network of innovators who will impact the
            future of sustainable mobility today. Send resumes to
            careers@qwikio.com.
          </p>
        </div>
        <div className="right">
          <img src={image3} alt="" />
        </div>
      </div>
      <div className="aboutQwikio">
        <h3>About Qwikio</h3>
        <p className="first">Qwikio, Inc. is a Chicago, Illinois-based electric vehicle (EV) and mobility technology company. Qwikio was established by individuals who had previously served in the armed forces of the United States.</p>
        <p>The company also has a global headquarters and innovation center in Dubai, located in the United Arab Emirates. We incorporate cutting-edge technologies such as the Internet, artificial intelligence, and driver assistance systems into the intelligent electric vehicles we design and manufacture. These vehicles have long-range batteries and are built to be affordable for ridesharing services, taxi services, and families with middle incomes.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Qwlklo;
