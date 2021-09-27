import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaCog, FaEnvelope, FaHome, FaTachometerAlt, FaUserCircle } from 'react-icons/fa';
import logo from "./sunraynotice.svg";
import { Button } from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary">          
            <Link to="/">
              <div className="brand-link">
                <img src={logo} alt="Logo" className="brand-image" />
              </div>
            </Link>
            <div className="sidebar">
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                  <a href="#" className="d-block">Fiji Water</a>
                  <a href="#" className="d-block">MANAGER</a>
                </div>
              </div>
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                  <Link to="/"> 
                    <div className="nav-link" >
                      <FaCog  style={{fill: 'white'}}/> <p>ACCOUNT & BILLING</p>
                    </div>
                  </Link>
                </li>
                <li className="nav-item"><br/>
                  <button className="create-request nav-link btn-sm" style={{ fontWeight: "bold", background: "#e4953f", border: "none", boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                    <Link to="/">CREATE NEW REQUEST</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <div className="nav-link">
                      <FaHome style={{fill: 'white'}}/> <p>HOME</p>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to = "/dashboard" >
                    <div className="nav-link">
                      <FaTachometerAlt  style={{fill: 'white'}}/> <p>DASHBOARD</p>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to = "/contact" >
                    <div className="nav-link">
                      <FaEnvelope  style={{fill: 'white'}}/> <p>CONTACT</p>
                    </div>
                  </Link>
                </li>
                <li className="nav-item" style={{ paddingLeft: '30px' }}>
                  <Button className="new-feature nav-link btn-sm" style={{ background: "#e4953f", borderRadius: "20px", border: "none", boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                    <Link to="/">New Feature </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

export default Menu;