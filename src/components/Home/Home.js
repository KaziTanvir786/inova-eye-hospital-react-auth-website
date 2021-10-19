import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import ServicesInHome from '../ServicesInHome/ServicesInHome';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="home">
            <Banner></Banner>
            <h4 id="about" className="headings mx-auto">About Us</h4>
            <About></About>
            <h4 className="headings mx-auto">Our Services</h4>
            <div id="services">
                <div className="services-in-home">
                    {
                        services.map(service => <ServicesInHome
                            key={service.id}
                            service={service}
                        ></ServicesInHome>)
                    }
                </div>
            </div>
            <h4 className="headings mx-auto">Our Doctors</h4>
            <Doctors></Doctors>
            <h4 id="testimonials" className="headings mx-auto">Testimonials</h4>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;