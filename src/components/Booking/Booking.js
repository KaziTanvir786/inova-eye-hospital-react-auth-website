import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const name = services[serviceId - 1]?.name;
    const description = services[serviceId - 1]?.description;
    const img = services[serviceId - 1]?.img;
    const totalCured = services[serviceId - 1]?.totalCured;

    if (services.length !== 0) {
        return (
            <div className="booking mx-auto">
                <img src={img} alt="" />
                <h3 className="p-4">{name}</h3>
                <p style={{ textAlign: "justify" }}>{description}</p>
                <h6 className="text-success">Total {totalCured} patients of {name} have been happily cured by us.</h6>
                <Link to="/done"><button className="btn btn-success my-4 p-3">Book An Appointment Now</button></Link>
            </div>
        );
    }
    else {
        return (
            <div>
                <Spinner style={{ marginTop: "100px", width: "100px", height: "100px" }} animation="grow" />
            </div>
        );
    }
};

export default Booking;