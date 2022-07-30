import React, { useState, useEffect } from 'react'
import { BsAsterisk } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { RiAddLine } from "react-icons/ri";
import { BsArrowUpRightSquare } from "react-icons/bs";
import imgJoin from "../../image/imgJoin.jpg";
import "./joinUs.css";

export default function JoinUs() {
    const [formUi, setFormUi] = useState(true);

    const useOverFlowHidden = () => {
        useEffect(() => {
            document.body.style.overflow = 'hidden'

            return () => {
                document.body.style.overflow = 'auto' // cleanup or run on page unmount
            }
        }, [])
    }

    useOverFlowHidden();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* ist content */}
                    <div className="col-lg-5 col-md-12 col-sm-12 py-4 px-5" style={{ overflow: 'scroll', height: '100vh' }}>
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
                                    </button> <br />
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
                        <div className="card pointerC col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5" onClick={() => setFormUi(false)}>
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
                        <div className="card pointerC col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5" onClick={() => setFormUi(false)}>
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
                        <div className="card pointerC col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5" onClick={() => setFormUi(false)}>
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
                        <div className="card pointerC col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5" onClick={() => setFormUi(false)}>
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
                        <div className="card pointerC col-12 border-2 border-bottom border-start-0 border-end-0 border-top-0 mt-5 lastCard" onClick={() => setFormUi(false)}>
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
                                <RiAddLine style={{ color: 'white' }} />
                            </p>
                        </div>
                    </div>


                    {/* 2nd content */}
                    {
                        formUi ?
                            <div className="col-lg-7 col-md-12 col-sm-12 m-0 p-0 imgDiv" style={{ overflow: 'scroll' }}>
                                <img src={imgJoin} alt="Image Not Found" className='img-fluid' style={{ height: '100vh', width: '100%' }} />
                            </div> :
                            <div className='col-lg-7 col-md-12 col-sm-12 m-0 p-0' style={{ height: '100vh', overflow: 'scroll' }}>
                                <div className='iconArrow'>
                                    <BsArrowUpRightSquare />
                                </div>
                                <div className='textHeadingDiv'>
                                    <p>
                                        Technology \ Tbilisi
                                    </p>
                                    <h2>
                                        Software Test Enigineer (MATLAB)
                                    </h2>
                                    <p style={{ fontSize: '16px', marginTop: '20px' }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                    </p>
                                    <p style={{ fontSize: '16px' }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                    <p style={{ fontSize: '16px', marginTop: '40px' }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                    </p>

                                    <div className='d-flex justify-content-around'>
                                        <div>
                                            Your tasks will be
                                        </div>
                                        <div style={{ lineHeight: 2 }}>
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around'>
                                        <div>
                                            Skills and Qualifications
                                        </div>
                                        <div style={{ lineHeight: 2 }}>
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-around'>
                                        <div>
                                            Nice to have
                                        </div>
                                        <div style={{ lineHeight: 2 }}>
                                            - Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            - Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                            -  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                                            Laborum saepe temporibus voluptas necessitatibus reprehenderit dicta! <br />
                                        </div>
                                    </div>

                                    <p style={{ fontSize: '16px', margin: '100px 0px' }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        In nam debitis maxime minima nisi consequatur sapiente soluta temporibus dolores,
                                        alias inventore nesciunt sint saepe animi dignissimos officia culpa repellat laboriosam.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                                {/* footer card */}
                                <div className='footerCardR bg-primary px-3 my-4'>
                                    <p className='text-light'>
                                        DON'T SEE A ROLE THAT'S <br /> A MATCH? SEE YOUR CV
                                    </p>
                                    <p>
                                        <RiAddLine style={{ color: 'white' }} />
                                    </p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
