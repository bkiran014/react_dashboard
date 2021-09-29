import React, { Component } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import ProjectContextProvider from './contexts/ProjectContext';
import ProjectList from './projects/ProjectList';

class Home extends Component {
    render() {
        return (
            <div>
              <div className="content-wrapper">
                <div className="content-header">
                  <Container fluid>
                    <Row className="mb-2">
                      <Col className="col-sm-12">
                        <h5 className="m-0 text-dark" style={{ borderBottom: '1px solid #ccc' }}>HOME</h5>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <section className="content">
                  <Container fluid>
                    <Row>
                      <Col className="col-lg-3 col-12">
                        <div className="small-box bg-info">
                          <div className="inner">
                            <p style={{textTransform:"uppercase"}}>Deadlines Coming Up!</p>
                            <p><span className="badge-text">7</span> <span className="right badge badge-danger">Act Fast!</span></p>
                          </div>
                          <a href="#" className="small-box-footer"></a>
                        </div>
                      </Col>
                      <Col className="col-lg-3 col-12">
                        <div className="small-box bg-success">
                          <div className="inner">
                            <p style={{textTransform:"uppercase"}}>Self Reminders</p>
                            <p><span className="badge-text">1</span> <span className="right badge badge-success">SET PROJECT REMINDERS!</span></p>
                          </div>
                          <div className="icon">
                            <i className="ion ion-stats-bars" />
                          </div>
                          <a href="#" className="small-box-footer"></a>
                        </div>
                      </Col>
                      <Col className="col-lg-3 col-12">
                        <div className="small-box bg-warning">
                          <div className="inner">
                            <p style={{textTransform:"uppercase"}}>Waivers &</p>
                            <h3 style={{color:"#333"}}>Releases</h3>
                          </div>
                          <div className="icon">
                            <i className="ion ion-person-add" />
                          </div>
                          <a href="#" className="small-box-footer"></a>
                        </div>
                      </Col>
                      <Col className="col-lg-3 col-12">
                        <div className="small-box bg-danger">
                          <div className="inner">
                            <p  style={{textTransform:"uppercase"}}>50 State Lein Laws</p>
                            <h3  style={{color:"#333"}}>Lein Law U</h3>
                          </div>
                          <div className="icon">
                            <i className="ion ion-pie-graph" />
                          </div>
                          <a href="#" className="small-box-footer"></a>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{background:"#fff",borderTop:'1px solid #ccc'}}>
                      <div className="table-responsive">
                        <ProjectContextProvider>
                          <ProjectList />
                        </ProjectContextProvider>
                      </div>
                    </Row>
                </Container>
              </section>
          </div>
        </div>
        );
    }
}

export default Home;