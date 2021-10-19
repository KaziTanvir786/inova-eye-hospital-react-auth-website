import React from 'react';
import './About.css';
import eye1 from '../../images/about/eye-1.png';
import eye2 from '../../images/about/eye-2.png';
import eye3 from '../../images/about/eye-3.png';
import eye4 from '../../images/about/eye-4.png';

const About = () => {
    return (
        <div className="features mx-auto">
            <div className="feature d-flex">
                <img src={eye1} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis. </p>
            </div>
            <div className="feature d-flex">
                <img src={eye2} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis.</p>
            </div>
            <div className="feature d-flex">
                <img src={eye3} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis.</p>
            </div>
            <div className="feature d-flex">
                <img src={eye4} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, deleniti culpa possimus veniam dolor dolorum odio veritatis consequatur eius aliquid, maiores accusamus officiis deserunt assumenda expedita error. Deserunt, eos nobis.</p>
            </div>
        </div>
    );
};

export default About;