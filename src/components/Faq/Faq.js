import React from 'react';
import { Button, Accordion } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
    // faq styles
    const accordionStyle = {
        margin: '20px 50px 0px 50px'
    }
    const buttonStyle = {
        width: '280px'
    }
    const questionBox = {
        marginLeft: '200px',
        marginRight: '200px',
        marginTop: '50px',
    }
    return (
        // faq section 
        <div style={accordionStyle}>
            <h2 className="heading mx-auto mb-5">Frequently Asked Questions</h2>
            <Accordion style={{ textAlign: 'left' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>How to get admit?</h5></Accordion.Header>
                    <Accordion.Body>
                        We have the best procedure of your admission in the hospital. You can visit our hospital campus and then get admitted after the first term consultation. We also have emergency services such that Ambulance, and emergey ward to take care of your urgency. Besides, you can email us from the website to comfirm your booking of appointment.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Can I get consiltation online?</h5></Accordion.Header>
                    <Accordion.Body>
                        Currently in the Covid-19 situation, we are consulting patients online also. But some teste and checkup cannot be held online. So you can check yourself that you can get cured online or not. Just send us an email will proper subject.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>Are you take credit card payments?</h5></Accordion.Header>
                    <Accordion.Body>
                        Dear sir/ma'am, INOVA Eye Hospital is a non-profit organization. So first we care about your cure. The  payment is juat a legal procedure. So, after you have been cured, the payment is all up to you. We accepts all kinds of payment procedures.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h5>Can I visit your Hospital Campus?</h5></Accordion.Header>
                    <Accordion.Body>
                        You are always welsome to visit us figurly. But make sure you are not infected with Covid-19, manage distance, wear gloves and surgical masks. An another thing, your visit won't be succeed if any comercial purpose have found.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="question-box" style={questionBox}>
                <h5>If you haven't get your answers, then write your question bellow</h5>
                <div><textarea name="" id="" cols="100" rows="5"></textarea></div>
                <Button style={buttonStyle}> Submit </Button>
            </div>
        </div>
    );
};

export default Faq;