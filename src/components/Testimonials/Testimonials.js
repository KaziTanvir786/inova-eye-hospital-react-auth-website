import React from 'react';
import './Testimonials.css';
import patient1 from '../../images/testimonials/patient-1.jpg';
import patient2 from '../../images/testimonials/patient-2.jpg';
import patient3 from '../../images/testimonials/patient-3.jpg';
import patient4 from '../../images/testimonials/patient-4.jpg';

const Testimonials = () => {
    return (
        <div id="carouselExampleFade" className=" mx-auto carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={patient1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>The best environment ever!</h5>
                        <p>I stayed 1.5 months long for my cornea operation, but it felt like I was in a five start hotel.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={patient2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>I Got the friendliest doctor!</h5>
                        <p>Dr. Rumejh Melan was my doctor while I admitted, and I found like the best friend.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={patient3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Cheapest Treatment, Damn!</h5>
                        <p>I waited  year to treat my eyes beacuase of all the hospitals were charging more, but damn, INOVA did it for 40% only.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={patient4} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Not only eyes!</h5>
                        <p>I was admitted for my eye care while I was 8 months pregnant, and believe me, I also got the gynaeocologists consultant here.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Testimonials;