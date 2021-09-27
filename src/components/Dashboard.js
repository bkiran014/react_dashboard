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
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <Container fluid>
              <Row className="mb-2">
                <Col>
                  <h5 className="m-0 text-dark" style={{ borderBottom: '1px solid #ccc' }}>DASHBOARD</h5>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="content">
            <Container fluid>
              <Row>
                <Col className="col-lg-6 col-12">
                  <Card.Body className="bg-1 text-center card-item">
                      <Card.Title as="h1"> Counter Increment</Card.Title>
                      <Card.Text as="div">
                          <Counter />
                      </Card.Text>
                  </Card.Body>
                </Col>
                <Col className="col-lg-6 col-12">
                  <Card.Body className="bg-2 text-center card-item">
                      <Card.Title as="h1"> Clock</Card.Title>
                      <Card.Text as="div">
                          <ClockTime />
                      </Card.Text>
                  </Card.Body>
                </Col>
                <Col className="col-lg-6 col-12">
                  <Card.Body className="bg-3 text-center card-item">
                      <Card.Title as="h1"> Dynamic Number</Card.Title>
                      <Card.Text as="div">
                          <Number />
                      </Card.Text>
                  </Card.Body>
                </Col>
                <Col className="col-lg-6 col-12">
                  <Card.Body className="bg-4 text-center card-item">
                    <Card.Title as="h1"> Weather</Card.Title>
                    <Card.Text as="div">
                        <Weather />
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
}

export default Dashboard;