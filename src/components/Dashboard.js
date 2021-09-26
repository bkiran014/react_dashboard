import React,{Component} from 'react';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Counter from "./dashboard/Counter";
import ClockTime from "./dashboard/ClockTime";
import Number from "./dashboard/Number";
import Weather from './dashboard/Weather';
import { FaPlus, FaMinus, FaClock } from 'react-icons/fa';
import { WiCloud } from 'react-icons/wi';
import "./Dashboard.css"

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dasboard | React App"
    }, []);

    return (
        <Container>
            <CardGroup className="d-block">
                <Card className="border-0">
                    <Row>
                        <Col>
                            <Card.Body className="bg-1 text-center card-item">
                                <Card.Title as="h1"> Counter Increment</Card.Title>
                                <Card.Text>
                                    <Counter />
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="bg-2 text-center card-item">
                                <Card.Title as="h1"> Dynamic Number</Card.Title>
                                <Card.Text>
                                    <Number />
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body className="bg-3 text-center card-item">
                                <Card.Title as="h1"><FaClock /> Clock</Card.Title>
                                <Card.Text>
                                    <ClockTime />
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="bg-4 text-center card-item">
                                <Card.Title as="h1"><WiCloud /> Weather</Card.Title>
                                <Card.Text>
                                    <Weather />
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default Dashboard;