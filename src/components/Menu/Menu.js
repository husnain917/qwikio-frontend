import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, Link } from "react-router-dom";
import './Menu.css';
import UseWindowDimensions from '../../customHooks/UseWindowDimensions';
import SideBar from '../sideBar/SideBar';

const Menu = ({ name }) => {
    const { width } = UseWindowDimensions();
    const openMenu = () => {
        document.querySelector('.menu ul').classList.add('animation')
        document.querySelector('.menu ul').classList.remove('removeAnimation')
        setTimeout(() => {
            document.querySelector('.menu ul').style.display = 'block'
        }, 1000)
    }
    const closeMenu = () => {
        document.querySelector('.menu ul').classList.remove('animation')
        document.querySelector('.menu ul').classList.add('removeAnimation')
        setTimeout(() => {
            document.querySelector('.menu ul').style.display = 'none'
        }, 1000)
    }
    return (
        <div className="menu">
            <div className="logo col-md-1">
                <SideBar />
            </div>
            <div className="nav col-md-11">
                <FontAwesomeIcon onClick={openMenu} className='icon' icon={faBars} />
                <ul>
                    <FontAwesomeIcon onClick={closeMenu} className='time' icon={faTimes} />
                    <li onClick={width <= 950 && closeMenu} className={name == "we're-qwikio" ? 'active' : 'not-active'}><Link to="/we're-qwikio">WE'RE QWIKIO</Link></li>
                    <li onClick={width <= 950 && closeMenu} className={name == 'bus' ? 'active' : 'not-active'}><Link to={`/${'bus'}`}>BUS</Link></li>
                    <li onClick={width <= 950 && closeMenu} className={name == 'rideshare' ? 'active' : 'not-active'}><Link to={`/${'rideshare'}`}>RIDESHARE</Link></li>
                    <li onClick={width <= 950 && closeMenu} className={name == 'luxury' ? 'active' : 'not-active'}><Link to={`/${'luxury'}`}>LUXURY</Link></li>
                    <li onClick={width <= 950 && closeMenu} className={name == 'specialty' ? 'active' : 'not-active'}><Link to={`/${'specialty'}`}>SPECIALTY</Link></li>
                    <li onClick={width <= 950 && closeMenu} className={name == 'news' ? 'active' : 'not-active'}><Link to="/news">NEWS</Link></li>
                    <li onClick={width <= 90 && closeMenu} className={name == 'reserve-now' ? 'active btn-reserve' : 'not-active btn-reserve'}><Link to="/reserve-now" className='reser'>RESERVE NOW</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;