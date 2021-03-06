import React from 'react';
import { Link } from 'react-router-dom';
import { Wave } from 'react-animated-text';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-container">
                <div className="banner-text w-75 ms-4">
                    <h1 style={{ marginTop: "140px", fontSize: "42px", lineHeight: "60px", fontWeight: "700" }}>
                        <Wave text="Welcome" />
                        <div>
                            <h1>to</h1>
                        </div>
                        <div>
                            <h1>IN<span style={{ color: "#0bcfce" }}>O</span>VA Eye Hospital</h1>
                        </div>
                        <div>
                            <h6 style={{ color: "gray" }}>We promise to keep your eyes healthier than ever!</h6>
                        </div>
                    </h1>
                    <Link to="/services"><button className="banner-button m-4">Visit Our Services</button></Link>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;