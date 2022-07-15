import React from 'react';
import './Charging.css'

const Charging = () => {
    return (
        <div className='charging design'>
            <h2>Charging</h2>
            <p>Because rideshare drivers cannot afford downtime we gave priory to the battery that will go into the Riida XL</p>
            <div className="features">
                <div>
                    <h2>40 minutes</h2>
                    <h6>approximately for 300-mile charge³</h6>
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
            <div className="carImage2 charCarImage">
                
            </div>
        </div>
    );
};

export default Charging;