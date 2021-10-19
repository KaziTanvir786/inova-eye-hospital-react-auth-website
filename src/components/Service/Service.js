import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, description, totalCured, img } = props.service;
    return (
        <div className="col">
            <div className="card">
                <img height="300px" src={img} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <p className="text-secondary">We cured {totalCured} {name} patients</p>
                    <Link to={`/booking/${id}`}><button className="btn btn-info">Book an appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;