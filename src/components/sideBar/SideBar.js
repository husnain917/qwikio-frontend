import React from 'react'
import logo from '../../image/Group 15.png'
import imgBus from '../../image/mini-bus.png'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

import "./sidebar.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom'



export default function SideBar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <img src={logo} onClick={handleDrawerOpen} style={{ width: "60px", cursor: "grab" }} />
            <Drawer
                open={isOpen}
                direction='left'
                size={"100vw"}
                duration={'650'}
                zIndex={'5000'}
                style={{ background: '#000000' }}
            >
                {/* ist container */}
                <div style={{ backgroundColor: '#e9ecef', padding: '20px', margin: '0px 25px 5px 8px', borderRadius: '5px' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div style={{ backgroundColor: '#000000', borderRadius: '50px', width: '55px' }}>
                                    <img src={logo} onClick={handleDrawerClose} style={{ width: "60px", cursor: "grab" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd container */}
                <div style={{ margin: '0px 25px 0px 8px' }}>
                    <div className="container-fluid">
                        <div className="row">

                            {/* 1st content */}
                            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-0">
                                <div style={{ backgroundColor: '#e9ecef', marginRight: '6px', borderRadius: '5px' }}>
                                    <div className='mb-5 py-4 px-4'>
                                        <p>EXPLORE Qwikio</p>
                                    </div>
                                    <div style={{ margin: '66px 0px' }}>
                                        <ul style={{ listStyle: 'none', fontSize: '22px' }}>
                                            <li>Home</li>
                                            <li>Van</li>
                                            <li>Bus</li>
                                            <li>Car</li>
                                            <li>News</li>
                                            <li>Why Qwikio</li>
                                            <li>Products</li>
                                            <li>Powered by Qwikio</li>
                                            <li>
                                                <span style={{ marginRight: '10px' }}><AiOutlineArrowRight /></span>
                                                Partners
                                            </li>
                                            <li>Talent</li>
                                            <li>Investers</li>
                                        </ul>
                                    </div>
                                    <div className='border-top border-2 border-dark py-2' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 40px' }}>
                                        <div>
                                            FOLLOW US
                                        </div>
                                        <div>
                                            <ul style={{ listStyle: 'none', display: 'flex', marginTop: '10px' }}>
                                                <li className='mx-3'>TWITTER</li>
                                                <li>FACEBOOK</li>
                                                <li className='mx-3'>LINKEDIN</li>
                                                <li>INSTAGRAM</li>
                                                <li className='mx-3'>YOUTUBE</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd content */}
                            <div className="col-lg-6 col-md-6 col-sm-12 m-0 p-0" style={{ backgroundColor: '#e9ecef', borderRadius: '5px' }}>
                                <div>
                                    <div className='mb-3 py-4 px-4'>
                                        <p>My Qwikio</p>
                                    </div>
                                    <div>
                                        <ul style={{ listStyle: 'none', fontSize: '22px', paddingBottom: '30px', paddingTop: '45px' }}>
                                            <li>Profile</li>
                                            <li>Orders</li>
                                            <li>Configuration</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='d-md-flex d-sm-inline-flex border border-top border-end-0 border-bottom-0 border-start-0 border-dark border-5'>
                                    {/* 1st content */}
                                    <div style={{ backgroundColor: '#e9ecef', borderRadius: '5px', width: '49%', marginRight: '5px' }}>
                                        <div style={{padding:'30px'}}>
                                            <p>GET IN TOUCH</p>
                                        </div>
                                        <div>
                                            <ul style={{ listStyle: 'none', fontSize: '22px', paddingTop: '72px' }}>
                                                <li className='my-2'>GET HELP</li>
                                                {/* <Link path={'/partners'} style={{textDecoration:'none'}}> */}
                                                <li className='my-2'>BECOME A PARTNER</li>
                                                {/* </Link> */}
                                                {/* <Link path={'/supplier'} style={{textDecoration:'none'}}> */}
                                                <li className='my-2'>BECOME A SUPPLIER</li>
                                                {/* </Link> */}
                                                {/* <Link path={'/joinUs'} style={{textDecoration:'none'}}> */}
                                                <li className='my-2'>JOIN OUR TEAM</li>
                                                {/* </Link> */}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* 2nd content */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 border border-top-0 border-end-0 border-bottom-0 border-start border-dark border-5" style={{ backgroundColor: '#e9ecef', width: '50%' }}>
                                        <div>
                                            <div style={{padding:'30px'}}>
                                                <p>SHOW INTERST</p>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src={imgBus} alt="Image Not Found" height={"150px"} width={"200px"} />
                                            </div>
                                            <div>
                                                <p className='mb-2 py-4 px-4' style={{ fontSize: '22px' }}>
                                                    SHOW YOUR INTERST IN THE VAN OR BUS
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}