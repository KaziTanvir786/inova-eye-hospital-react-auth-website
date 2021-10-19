import React from 'react';
import './Doctors.css';
import doc1 from '../../images/doctors/doc-1.jpg';
import doc2 from '../../images/doctors/doc-2.jpg';
import doc3 from '../../images/doctors/doc-3.jpg';

const Doctors = () => {
    return (
        <div id="doctors">
            <div className="doctor">
                <img src={doc1} alt="" />
                <h3 className="mt-4">Dr. San Bryan</h3>
                <h6>Optometrist Specialist</h6>
            </div>
            <div className="doctor">
                <img src={doc2} alt="" />
                <h3 className="mt-4">Dr. Erika Nelson</h3>
                <h6>Laser Lasik Surgeon</h6>
            </div>
            <div className="doctor">
                <img src={doc3} alt="" />
                <h3 className="mt-4">Dr. Rebecca D'costa</h3>
                <h6>Cornea Specialist</h6>
            </div>
        </div>
    );
};

export default Doctors;