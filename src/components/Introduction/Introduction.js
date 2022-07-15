import React from 'react';
import './Introduction.css'

const Introduction = () => {
    return (
        <div className="introduction">
            <div>
                <p><span>Introducing Qwikio Riida XL. The Riida delivers the best range and astest charging at its price</span> point globally. Its horsepower is unrivaled, and even with seven (7) passengers, the Riida has incredible space, legroom and all rideshare apps integrated on its 21inch driver touchscreen and a head-up display map to keep the driver-focused.</p>
            </div>
            <div className="performance">
                <div>
                    <h6>Max power</h6>
                    <h1>400 <sub>HP</sub></h1>
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
    );
};

export default Introduction;