import React from 'react';
import './Achievements.css';
import ac1 from '../../images/acievements/ac-1.jpg';
import ac2 from '../../images/acievements/ac-2.jpg';
import ac3 from '../../images/acievements/ac-3.png';
import ac4 from '../../images/acievements/ac-4.jpg';

const Achievements = () => {
    return (
        <div className="achievements mx-auto">
            <h2 className="heading mx-auto mb-5">Our Achievements</h2>
            <div style={{ marginRight: "16%" }} className="achievement d-flex">
                <img src={ac1} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis. </p>
            </div>
            <div style={{ marginLeft: "16%" }} className="achievement d-flex">
                <p className="about-text" style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis.</p>
                <img src={ac2} alt="" />
            </div>
            <div style={{ marginRight: "16%" }} className="achievement d-flex">
                <img src={ac3} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis.</p>
            </div>
            <div style={{ marginLeft: "16%" }} className="achievement d-flex">
                <p className="about-text" style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis.</p>
                <img src={ac4} alt="" />
            </div>
            <div className="rates">
                <div>
                    <h5>Total Cured</h5>
                    <h1>7862</h1>
                </div>
                <div>
                    <h5>Total Awards</h5>
                    <h1>152</h1>
                </div>
                <div>
                    <h5>Total Affiliations</h5>
                    <h1>655</h1>
                </div>
            </div>
        </div>
    );
};

export default Achievements;