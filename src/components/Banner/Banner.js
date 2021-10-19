import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-container">
                <div className="banner-text w-75 ms-4">
                    <h1 style={{ marginTop: "200px", fontWeight: "700" }}>We promise to keep your eye's healthier like when!</h1>
                    <Link to="/services"><button className="btn btn-success">Visit Our Services</button></Link>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;