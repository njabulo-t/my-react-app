import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Row, Col} from 'react-bootstrap';
import './App.css';
import { CardBody } from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="container">
            <Row className="justify-content-center">
            <Col lg={12}  md={6}  sm={4} >
                    <Card className='contactCard'>
                        <CardBody>
                            <h1 className="mb-5" style={{ textDecorationLine: 'underline', textDecorationColor: 'rgba(165, 42, 42, 0.711)', textDecorationThickness: '5px', lineHeight: '200%', height: '-10%', textUnderlineOffset: '20px' }}>Get in Touch</h1>

                            <Form>
                                <Form.Group className="mb-3" controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridMessage1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Type message..." />
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
}
