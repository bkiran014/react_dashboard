import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

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
                          <div className="icon">
                            <FaBars />
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
                    <Row style={{background:"#fff"}}>
                      <Col className="col-sm-6"> <br/>
                        <h5 className="m-0 text-dark">LATEST PROJECTS</h5> <br/>
                      </Col>
                      <Col className="col-sm-6"> <br/>
                        <button className="float-right bg-primary" style={{border:"none",padding: '5px'}}>+ CREATE PROJECT</button> <br/>
                      </Col>
                      <hr/>
                    </Row>
                    <Row style={{background:"#fff",borderTop:'1px solid #ccc'}}>
                      <div className="col-md-6 mb-4 mx-auto">
                        <br/>
                        <form className="form-inline">
                          <i className="fas fa-search" aria-hidden="true" />
                          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search with W/O #, Job Name, Job Address, Job #, Customer Name" aria-label="Search" />
                        </form>
                      </div>
                      <div className="table-responsive">
                        <table className="table responsive" id="sort">
                          <thead>
                            <tr>
                              <th scope="col">JOB/ACC NO</th>
                              <th scope="col">PROJECT INFO</th>
                              <th scope="col">CUSTOMER INFO</th>
                              <th scope="col">CURRENT DOCUMENT STATUS</th>
                              <th scope="col">ACTION ITEMS / DUE DATES</th>
                              <th scope="col">ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-table-header="Job/Acc No">123456789</td>
                              <td data-table-header="Authors">1234567 <br/>California<br/>CA</td>
                              <td data-table-header="Journal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                            </tr>
                            <tr>
                              <td data-table-header="Job/Acc No">123456789</td>
                              <td data-table-header="Authors">1234567 <br/>California<br/>CA</td>
                              <td data-table-header="Journal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                            </tr>
                            <tr>
                              <td data-table-header="Job/Acc No">123456789</td>
                              <td data-table-header="Authors">1234567 <br/>California<br/>CA</td>
                              <td data-table-header="Journal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td data-table-header="Date">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                            </tr>
                          </tbody>
                        </table>
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