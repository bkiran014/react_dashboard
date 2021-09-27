import React,{Component} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

class Contact extends  Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '',
        };
    }

    componentDidMount() {
        document.title = "Contact | React App";
    }
    
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <Container fluid>
                            <Row className="mb-2">
                                <Col className="col-6 mx-auto" style={{ padding: '10px',background: '#ccc',borderRadius: '20px'}}>
                                    <h2 className="text-center">Contact Us</h2>
                                    <Form style={{ padding: '20px'}}>
                                        <Form.Group controlId="form.Name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" />
                                        </Form.Group><br/>
                                        <Form.Group controlId="form.Email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="test@example.com" />
                                        </Form.Group><br/>
                                        <Form.Group controlId="form.Email">
                                            <Form.Control className="bg-primary text-white" type="submit" value="Submit" />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;