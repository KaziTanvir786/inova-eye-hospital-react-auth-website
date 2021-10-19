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
                    <Accordion.Header><h5>How to get admission to this academy?</h5></Accordion.Header>
                    <Accordion.Body>
                        You can visit us or email us to confirm your admission on your desired course. You have to fill up a form given by the academy registrar. After filling the form, you have to pay the 50% of the charge, and you're done.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Can I enroll for the training in online?</h5></Accordion.Header>
                    <Accordion.Body>
                        Currently we are not offering any online courses. For this reason you must have to come offline to the academy to join the trainings as well as get admitted. If you still want a online course then email us asap.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>Can I enroll for two or more courses at a time?</h5></Accordion.Header>
                    <Accordion.Body>
                        The enrollment of multiple trainings is totally up to your capability. But we recommend that please don't enroll more than two courses at a time. Because language is a complicated training.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h5>How much I will be benefitted from this academy?</h5></Accordion.Header>
                    <Accordion.Body>
                        Currently we awarded as the best language trainer in Asia. We have the expert instructors. You will get the best guideline no doubt. If you want to ensure still, then visit our free class any time.
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