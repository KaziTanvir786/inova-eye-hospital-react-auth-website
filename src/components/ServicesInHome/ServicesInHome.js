import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesInHome.css';

const ServicesInHome = (props) => {
    const { id, name, description, totalCured, img } = props.service;
    return (
        <div className="button-card">
            <Link to={`/booking/${id}`}>
                <div className="service-in-home card mb-3 mx-auto" style={{ width: "70%" }}>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="Loading..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p style={{ textAlign: "justify" }} className="card-text">{description}</p>
                                <p className="card-text"><small className="text-muted">We have successfully cured {totalCured} {name} patients.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServicesInHome;