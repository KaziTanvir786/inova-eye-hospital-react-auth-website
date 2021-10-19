import React from 'react';
import './Emergency.css';
import em1 from '../../images/emergency/em-1.jpg';
import em2 from '../../images/emergency/em-2.png';
import em3 from '../../images/emergency/em-3.png';

const Emergeny = () => {
    return (
        <div>
            <h2 className="heading mx-auto mb-5">Call in Emergency</h2>
            <div className="emergency-container">
                <div className="emergency-item">
                    <div>
                        <img src={em2} alt="" />
                    </div>
                    <div className="mb-4">
                        <h4 style={{ color: "#0bcfce" }} className="py-4">Call For Ambulance</h4>
                        <h3>+992 5412 451245</h3>
                        <h3>+992 5412 451246</h3>
                    </div>
                </div>
                <div className="emergency-item">
                    <div>
                        <img src={em1} alt="" />
                    </div>
                    <div className="mb-4">
                        <h4 style={{ color: "#0bcfce" }} className="py-4">Call For Oxygen</h4>
                        <h3>+992 5412 451247</h3>
                        <h3>+992 5412 451248</h3>
                    </div>
                </div>
                <div className="emergency-item">
                    <div>
                        <img src={em3} alt="" />
                    </div>
                    <div className="mb-4">
                        <h4 style={{ color: "#0bcfce" }} className="py-4">Call For Nurse</h4>
                        <h3>+992 5412 451249</h3>
                        <h3>+992 5412 451250</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergeny;