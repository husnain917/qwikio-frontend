import React, { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../image/7c60c1012821ce5e0cd611fea12e2617";
import image2 from "../../image/1ddd518cde1f9bbebcd081af43a25f56";
import image4 from "../../image/ffe9bc991256ac445f0ca145bff48f85";
import image5 from "../../image/e022ca0fd51c6dff646c69a02883a139";
import "./Models.css";
import Footer from "../../components/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
import UseModels from "./UseModels";

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

const Models = () => {
  const [{ data }] = UseModels();
  const location = useLocation();
  const name = location.pathname.split("/").pop();
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
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="Riidax Riida">

      <Menu name={name} />
      {/* <div className="RiidaHeader Header">
        <div className="items" uk-scrollspy="cls: uk-animation-slide-left-small; delay: 400">
          <h4>Delivering Fall 2022</h4>
          <h2>Qwikio Riida X</h2>
          <p>Battery Capacity 44.5 kWh / 400 hp / 195 mi range</p>
          <Link className="butt" to="/Product">Discover Riida X</Link>
        </div>
      </div> */}
      {
        data?.filter((item) => {
          if (item.name == name) {
            return item;
          }
        })[0]?.models?.map((item) => {
          return (
            <div className={item?.className}>
              <div className='black-shadow'>
                <div>
                  <h4 className='deliver-date-text'>Delivering Fall 2022</h4>
                  <h2 className='model-name'>{item?.modelName}</h2>
                  <p className='model-desc'>{item?.desc}</p>
                  <Link className="product-page-link" to={`/${name}/${item?.id}`}>Discover {item?.modelName}</Link>
                </div>
              </div>
            </div>
          )
        })
      }
      {/* <div className="items items2">
        <div uk-scrollspy="cls: uk-animation-slide-right-small; delay: 400">
          <h4>Delivering Fall 2022</h4>
          <h2>Qwikio Riida XL</h2>
          <p>Battery Capacity 44.5 kWh / 450 hp / 195 mi range</p>
          <Link className="butt" to="/Products">Discover Riida XL</Link>
        </div>
      </div>
      <div className="items items3">
        <div uk-scrollspy="cls: uk-animation-slide-left-small; delay: 400">
          <h4>Delivering Fall 2022</h4>
          <h2>Qwikio Pride</h2>
          <p>Battery Capacity 66.5 kWh / 550 hp / 275 mi range</p>
          <Link className="butt" to="/luxury">Discover Pride</Link>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Models;
