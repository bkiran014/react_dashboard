import React, { Component } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';

class Header extends Component {
  render() {
    return (
      <div>
        <Nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#"><FaBars /></a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <Form className="form-inline ml-3">
              <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search With W/0 #, Job Name, Job Address" aria-label="Search" />
                <div className="input-group-append">
                  <Button className="btn btn-navbar" type="submit">
                    <FaSearch />
                  </Button>
                </div>
              </div>
            </Form>
            <li className="nav-item">
              <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                <FaUserCircle size="30px" />
              </a>
            </li>
          </ul>
        </Nav>
      </div>
    );
  }
}

export default Header;