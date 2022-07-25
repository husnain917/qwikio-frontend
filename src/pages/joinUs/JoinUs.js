import React from 'react'
import { BsAsterisk } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { RiAddLine } from "react-icons/ri";
import imgJoin from "../../image/imgJoin.jpg";
import "./joinUs.css";

export default function JoinUs() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* ist content */}
                    <div className="col-lg-5 col-md-12 col-sm-12 py-4 px-5" style={{overflow:'scroll',height:'100vh'}}>
                        <div className='btnDiv'>
                            {/* buttons */}
                            <button className='btn text-dark border-0' style={{ backgroundColor: '#dee2e6' }}>
                                <BsAsterisk />
                            </button>
                            <button className='btn text-dark mx-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                TALENT
                            </button>
                        </div>

                        {/* join us */}
                        <div className='joinUsDiv'>
                            <h4 className='my-3'>
                                Join Us
                            </h4>
                            <div>
                                <div className='mt-3'>
                                    <button className='btn text-dark m-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                        DESIGN
                                    </button>
                                    <button className='btn text-dark m-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                        ENGINEERING
                                    </button>
                                    <button className='btn text-dark m-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                        HARDWARE
                                    </button>
                                    <button className='btn text-dark m-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                        PRODUCTION
                                    </button>
                                </div>
                                <div>
                                    <button className='btn text-dark m-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                        SALES & MARKETING
                                    </button>
                                    <button className='btn text-dark m-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                        FINANCE & LEGAL
                                    </button>
                                    <button className='btn text-dark m-2 border-0' style={{ backgroundColor: '#dee2e6' }}>
                                        <BsThreeDots />
                                    </button>
                                    <button className="btn dropdown-toggle m-2 border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#dee2e6' }}>
                                        LOCATION
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item text-decoration-none" href="#">BANBURY</a></li>
                                        <li><a className="dropdown-item text-decoration-none" href="#">BERLIN</a></li>
                                        <li><a className="dropdown-item text-decoration-none" href="#">TBILISI</a></li>
                                        <li><a className="dropdown-item text-decoration-none" href="#">LONDON</a></li>
                                        <li><a className="dropdown-item text-decoration-none" href="#">ROCK HILL</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* cards */}
                        {/* card 1 */}
                        <div className="card col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Senior Embedded SW Engineer - London/Banbury/Hybird</h5>

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">TECHNOLOGY</li>
                                            <li className="breadcrumb-item active" aria-current="page">BANBURY</li>
                                        </ol>
                                    </nav>
                                </blockquote>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Software Test Engineer (MATLAB)</h5>

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">TECHNOLOGY</li>
                                            <li className="breadcrumb-item active" aria-current="page">TBILISI</li>
                                        </ol>
                                    </nav>
                                </blockquote>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="card col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Embedded QA Engineer (CommPlatform)</h5>

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">TECHNOLOGY</li>
                                            <li className="breadcrumb-item active" aria-current="page">TBILISI</li>
                                        </ol>
                                    </nav>
                                </blockquote>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="card col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Embedded System Engineer</h5>

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">TECHNOLOGY</li>
                                            <li className="breadcrumb-item active" aria-current="page">TBILISI</li>
                                        </ol>
                                    </nav>
                                </blockquote>
                            </div>
                        </div>
                        {/* card 5 */}
                        <div className="card col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <h5>Hardware Engineer</h5>

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">TECHNOLOGY</li>
                                            <li className="breadcrumb-item active" aria-current="page">TBILISI</li>
                                        </ol>
                                    </nav>
                                </blockquote>
                            </div>
                        </div>
                        {/* footer card */}
                        <div className='footerCard bg-dark px-3 my-4'>
                            <p className='text-light'>
                                DON'T SEE A ROLE THAT'S <br /> A MATCH? SEE YOUR CV
                            </p>
                            <p>
                                <RiAddLine style={{color:'white'}} />
                            </p>
                        </div>
                    </div>


                    {/* 2nd content */}
                    <div className="col-lg-7 col-md-12 col-sm-12 m-0 p-0 imgDiv">
                        <img src={imgJoin} alt="Image Not Found" className='img-fluid' style={{height:'100vh',width:'100%'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}
