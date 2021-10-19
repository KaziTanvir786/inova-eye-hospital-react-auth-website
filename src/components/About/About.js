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
                <p className="about-text" style={{ textAlign: "justify" }}> We are able to succeed any kind of eye surgery. We have the most modern facilities in our hospital. Worldwide qualified and repsponsible eye surgeons are available in INOVA  eye hospital. We are promised to you to give failure less best eye operations. A good environment and the modern operation theatre is availabe here for your best care. </p>
            </div>
            <div className="feature d-flex">
                <img src={eye2} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>In this modern world, we found so many modern solutions that can make our life easier as well as problem free. Sometimes we are not comfortable to show our eye problems to people or it is so uncomfortable and unfashionable to wear spectacles. The solution is Custom Made Contact Lenses, that we provides with damn expertise.</p>
            </div>
            <div className="feature d-flex">
                <img src={eye3} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>The cornea diseases are most complicated desease of eyes. We are the only hospital that will take care of that kind of long term treatment from your home or in the hospital campus. All kinds of glassess, medicines and other medicinal equipments dring this kind of complicated treatment will be provided free and it won't cost a single penny of your pocket.</p>
            </div>
            <div className="feature d-flex">
                <img src={eye4} alt="" />
                <p className="about-text" style={{ textAlign: "justify" }}>Not only the treatments of your eyes will be done here, but also the INOVA eye hospital will take care of your healthy eye and make ity healthier than before ever. The spectacles, contact lenses, custom contact lenses, eye drops and other regular eye care products and good mentors will help you to take care  of your eyes at best.</p>
            </div>
        </div>
    );
};

export default About;