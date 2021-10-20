import React from 'react';
import { Link } from 'react-router-dom';
import done from '../../images/done.gif';

const Done = () => {
    return (
        <div className="m-5">
            <h4>Appoinment has been booked successfully!!</h4>
            <img width="40%" style={{ borderRadius: "50%" }} src={done} alt="" />
            <br />
            <Link to="/home"><button className="btn btn-success p-3 m-4">Back to home</button></Link>
        </div>
    );
};

export default Done;