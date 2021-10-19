import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="not-found-img" src={notFound} alt="" />
            <br />
            <Link to="/"><button className="btn btn-success">Go back</button></Link>
        </div>
    );
};

export default NotFound;