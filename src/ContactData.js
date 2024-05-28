// install @emailjs/browser
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap';

import emailjs from '@emailjs/browser';
import './App.css';

emailjs.init('qWPTejGney9-ihSxF');

const ContactUs = () => {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState("");

useEffect(() => {
    emailjs.init('qWPTejGney9-ihSxF');
}, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsSubmitting(true);

     const serviceID = 'service_2chtwnj';
     const templateID = 'template_1k5qo1i';

     const emailParams = {
        from_email: email, // Sender's email address
        message: message,  // Message content
        to_email: 'njabulonkosi59@gmail.com' // Your email address where you want to receive the emails
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

    }

return (
<div className="container">
            <Row className="justify-content-center">
            <Col lg={12}  md={6}  sm={4} >
                    <Card className='contactCard'>
                        <Card.Body>
                            <h1 className="mb-5" style={{ textDecorationLine: 'underline', textDecorationColor: 'rgba(165, 42, 42, 0.711)', textDecorationThickness: '5px', lineHeight: '200%', height: '-10%', textUnderlineOffset: '20px' }}>Get in Touch</h1>
                            {submitError && <div className='error'>{submitError}</div>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridMessage1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Type message..." value={message} onChange={(e) => setMessage(e.target.value)} />
                                </Form.Group>

                                <Button variant="outline-dark" type="submit" disabled={isSubmitting}>
                                   {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>{' '}
                            </Form>
                        </Card.Body>
                    </Card>
                    </Col>
    
                  </Row>
                </div>
             
);
};
export default ContactUs;