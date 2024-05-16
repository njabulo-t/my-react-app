// install @emailjs/browser
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap';
import { CardBody } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './App.css';


const ContactUs = () => {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsSubmitting(true);

     const serviceID = 'service_2chtwnj';
     const templateID = 'template_55517hh';

     const emailParams = {
        from_email: email,
        message: message
     };

     //Send the email using EmailJS
     emailjs.send(serviceID, templateID, emailParams)
     .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitting(false);
        setEmail("");
        setMessage("");
        alert('Your message has been sent successfully!');
    })
    .catch((error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false);
        setSubmitError('There was an error sending your message. Please try again later.');
    });

// Clear the form fields after submission
setEmail("");
setMessage("");
};



return (
<div className="container">
            <Row className="justify-content-center">
            <Col lg={12}  md={6}  sm={4} >
                    <Card className='contactCard'>
                        <CardBody>
                            <h1 className="mb-5" style={{ textDecorationLine: 'underline', textDecorationColor: 'rgba(165, 42, 42, 0.711)', textDecorationThickness: '5px', lineHeight: '200%', height: '-10%', textUnderlineOffset: '20px' }}>Get in Touch</h1>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridMessage1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Type message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                                </Form.Group>

                                <Button variant="outline-dark" type="submit">
                                    Submit
                                </Button>{' '}
                            </Form>
                        </CardBody>
                    </Card>
                    </Col>
    
                  </Row>
                </div>
             
);
};
export default ContactUs;