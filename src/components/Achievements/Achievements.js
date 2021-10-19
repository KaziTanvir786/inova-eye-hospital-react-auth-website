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
                <p className="about-text" style={{ textAlign: "justify" }}> We got total 152 Awards for being the one of the best clean hospital environment, best proffessional doctors, cheaper charge, and most important the free treatment after any operations. those awards are not our pride only, but also those are the motivations to treat the world amd make every eyes glow. </p>
            </div>
            <div style={{ marginLeft: "16%" }} className="achievement d-flex">
                <p className="about-text" style={{ textAlign: "justify" }}>Besides the 152 Awards, we got so many best certificates, and many of them are only in the country. We got cetified from the World Health Organization (WHO), National Eye Bank, Cambridge Eye Lab and many more. You are welcome to visit our campus to feel our achievements.</p>
                <img src={ac2} alt="" />
            </div>
            <div style={{ marginRight: "16%" }} className="achievement d-flex">
                <img src={ac3} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>We have country's greatest numbers of Hospital Affiliations. We did so many collaborations with prestigious hospitals and organizations in globally and nationally. So we have the opportunity to shift any critical patienst in an abroad hospital with no time.</p>
            </div>
            <div style={{ marginLeft: "16%" }} className="achievement d-flex">
                <p className="about-text" style={{ textAlign: "justify" }}>The best achievement of the INOVA Eye Hospital that, we could be able to bring back many people's normal life. We are promised to you that, we will be work for the betterment of your life at any coast. And so the good life of our 7862 patients is the best achievement.</p>
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