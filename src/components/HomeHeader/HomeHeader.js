import React from 'react';
import Menu from '../Menu/Menu';
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className='homeHeader'>
            <Menu />
            <div className="content">
                <div>
                    <h2>Welcome To The Future</h2>
                    <h3>Of Rideshare And Last-mile Mobility</h3>
                </div>
                <div>
                    <h4>Qwikio Riida XL</h4>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;