import './WhyQwikio.css';
import '../RiidaX/Riidax.css';
import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import arrow from '../../image/arrow.png';
import whiteArrow from '../../image/arrow.png';
import UseWhyQwikio from './UseWhyQwikio';
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

export default function WhyQwikio() {
    const [{ data }] = UseWhyQwikio();
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
        <div className='why-qwikio-main-page-container'>
            <div className="Riidax">
                <Menu name='why-qwikio' />
                <div className="sliders">
                    <Slider {...setting}>
                        <div className="item item1 uk-animation">
                            <div uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 300">
                                <h2>WE ARE QWIKIO</h2>
                                <p className='hidden-visibility'>Battery Capacity 44.5 kWh / 400 hp / 195 mi range</p>
                                <div className='inline-btns-row'>
                                    <Link className="button" to="/reserve-now">
                                        RESERVE NOW
                                    </Link>
                                    <Link className="contact-button" to="/contact">
                                        CONTACT US
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item item2 uk-animation">
                            <div uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 300">
                                <h2>WE ARE QWIKIO</h2>
                                <p className='hidden-visibility'>Battery Capacity 44.5 kWh / 400 hp / 195 mi range</p>
                                <div className='inline-btns-row'>
                                    <Link className="button" to="/reserve-now">
                                        RESERVE NOW
                                    </Link>
                                    <Link className="contact-button" to="/contact">
                                        CONTACT US
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item item3 uk-animation">
                            <div uk-scrollspy="cls: uk-animation-slide-bottom-small; delay: 300">
                                <h2>WE ARE QWIKIO</h2>
                                <p className='hidden-visibility'>Battery Capacity 44.5 kWh / 400 hp / 195 mi range</p>
                                <div className='inline-btns-row'>
                                    <Link className="button" to="/reserve-now">
                                        RESERVE NOW
                                    </Link>
                                    <Link className="contact-button" to="/contact">
                                        CONTACT US
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='page-body-container-qwikio-why'>
                    <p className='about-qwikio-paragraph'>At Qwikio, we are reinventing both the design and production of electric vehicles for end to end sustainability. Only true innovation of both products and processes can deliver the radical impact we need to combat the worst effects of the climate crisis.</p>
                    <div className="boxes-container">
                        <div className='gallery-and-signup-boxes-row'>
                            {/* True SUSTAINBILITY CONTAINER */}
                            <Link className='link-text' to={`/why-qwikio/why-qwikio-true-sustainability`}>
                                <div className="gallery-box-container">
                                    <p className='product-name'> TRUE SUSTAINABILITY</p>
                                    <p className='gallery-desc'>A CLEAR, CIRCULAR, EQUITABLE FUTURE</p>
                                    <div className="box-bottom-row">
                                        <div>
                                        </div>
                                        <div className='arrow-container'>
                                            <img width={16} height={16} src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* SIGNUP CONTAINER */}
                            <Link className='link-text' to={`/subscribe`}>
                                <div className="signup-box-container">
                                    <p className='product-name'>SIGN UP</p>
                                    <p className='signup-desc'>BE THE FIRST TO RECIEVE THE LATEST NEWS FROM QWIKIO</p>
                                    <div className="box-bottom-row">
                                        <div></div>
                                        <div className='arrow-container'>
                                            <img width={16} height={16} src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Why Qwikio Pictures */}
                    {/* METHOD PICTURE */}
                    <div className={`why-qwikio-method-picture-container`}>
                        <div className='heading-name-details-container'>
                            <Link className='link-text' to='/why-qwikio/why-qwikio'>
                                <div className='why-qwikio-icon-and-details-row'>
                                    <div>
                                        <div className='why-qwikio-heading-container'>
                                            <p>Why Arrival</p>
                                        </div>
                                        <div className='why-qwikio-desc-of-heading-container'>
                                            <p>A better approach using New Method</p>
                                        </div>
                                    </div>
                                    <div><img width={25} height={25} src={whiteArrow} alt="" /></div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    {/* FACTORY PICTURE */}
                    <div className={`why-qwikio-factory-picture-container`}>
                        <div className='heading-name-details-container'>
                            <Link to='/why-qwikio/why-qwikio-microfactory'>
                                <div className='why-qwikio-icon-and-details-row'>
                                    <div>
                                        <div className='why-qwikio-heading-container'>
                                            <p>The Microfactory</p>
                                        </div>
                                        <div className='why-qwikio-desc-of-heading-container'>
                                            <p>Empowering comunities</p>
                                        </div>
                                    </div>
                                    <div><img width={25} height={25} src={whiteArrow} alt="" /></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <p className='human-centred-design'>Human-centred design</p>
                    <p className='putting-people-first'>Putting people first</p>
                    {/* Videos Section */}
                    <div className='videos-row'>
                        <div className={`why-qwikio-method-video-container`}>
                            <div className='heading-name-details-container'>
                                <Link className='link-text' to={`/why-qwikio/why-qwikio-true-sustainability`}>
                                    <div className='why-qwikio-icon-and-details-row'>
                                        <div>
                                            <div className='why-qwikio-heading-container'>
                                                <p>True Sustainability</p>
                                            </div>
                                            <div className='why-qwikio-desc-of-heading-container'>
                                                <p>A CLEAR, CIRCULAR, EQUITABLE FUTURE</p>
                                            </div>
                                        </div>
                                        <div><img width={25} height={25} src={whiteArrow} alt="" /></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* FACTORY PICTURE */}
                        <div className={`why-qwikio-factory-video-container`}>
                            <div className='heading-name-details-container'>
                                <Link to='/why-qwikio/why-qwikio-safety'>
                                    <div className='why-qwikio-icon-and-details-row'>
                                        <div>
                                            <div className='why-qwikio-heading-container'>
                                                <p>Safety Strategy</p>
                                            </div>
                                            <div className='why-qwikio-desc-of-heading-container'>
                                                <p>Make roads safer for everyone</p>
                                            </div>
                                        </div>
                                        <div><img width={25} height={25} src={whiteArrow} alt="" /></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* LOWER VIDEO SECTION */}
                    <div className='videos-row'>
                        <div className={`why-qwikio-method-video-container`}>
                            <div className='heading-name-details-container'>
                                <Link to='/why-qwikio/why-qwikio-materials'>
                                    <div className='why-qwikio-icon-and-details-row'>
                                        <div>
                                            <div className='why-qwikio-heading-container'>
                                                <p>Materials</p>
                                            </div>
                                            <div className='why-qwikio-desc-of-heading-container'>
                                                <p>Low cost, strong and lightweight</p>
                                            </div>
                                        </div>
                                        <div><img width={25} height={25} src={whiteArrow} alt="" /></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* FACTORY PICTURE */}
                        <div className={`why-qwikio-factory-video-container`}>
                            <div className='heading-name-details-container'>
                                <Link to='/why-qwikio/why-qwikio-elements'>
                                    <div className='why-qwikio-icon-and-details-row'>
                                        <div>
                                            <div className='why-qwikio-heading-container'>
                                                <p>Elements</p>
                                            </div>
                                            <div className='why-qwikio-desc-of-heading-container'>
                                                <p>The components of our vehicles</p>
                                            </div>
                                        </div>
                                        <div><img width={25} height={25} src={whiteArrow} alt="" /></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* BOXES */}
                    <div className="boxes-container">
                        <div className='gallery-and-signup-boxes-row'>
                            {/* True SUSTAINBILITY CONTAINER */}
                            <Link className='link-text' to={`/why-qwikio/why-qwikio-true-sustainability`}>
                                <div className="gallery-box-container">
                                    <p className='product-name'> TRUE SUSTAINABILITY</p>
                                    <p className='gallery-desc'>A CLEAR, CIRCULAR, EQUITABLE FUTURE</p>
                                    <div className="box-bottom-row">
                                        <div>
                                        </div>
                                        <div className='arrow-container'>
                                            <img width={16} height={16} src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            {/* SIGNUP CONTAINER */}
                            <Link className='link-text' to={`/subscribe`}>
                                <div className="signup-box-container">
                                    <p className='product-name'>SIGN UP</p>
                                    <p className='signup-desc'>BE THE FIRST TO RECIEVE THE LATEST NEWS FROM QWIKIO</p>
                                    <div className="box-bottom-row">
                                        <div></div>
                                        <div className='arrow-container'>
                                            <img width={16} height={16} src={arrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
