import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    const { user } = useAuth();
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
                <div>
                    <img src={img} alt="" />
                    <h3 className="p-4">{name}</h3>
                    <p style={{ textAlign: "justify" }}>{description}</p>
                    <h6 className="text-success">Total {totalCured} patients of {name} have been happily cured by us.</h6>
                </div>
                <br />
                <h2 className="heading mx-auto w-75 my-5">Enter your details and book an appointment</h2>
                <div>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input required value={user.displayName} type="text" class="form-control" id="inputName" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input required value={user.email} type="email" class="form-control" id="inputEmail" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input required type="text" class="form-control" id="inputAddress" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Road</label>
                            <input required type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputZip" class="form-label">City</label>
                            <input required type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputState" class="form-label">Choose appointment type</label>
                            <select id="inputState" class="form-select">
                                <option selected>Offline</option>
                                <option>Online</option>
                            </select>
                        </div>

                        <button className="btn btn-success w-50 mx-auto my-4 p-3"><Link to="/done">Book An Appointment Now</Link></button>
                    </form>
                </div>
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