import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return(
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/"><img style={{height:'100px',width:'100%'}} src="https://global-uploads.webflow.com/5eb266960d5bdff6aa937e5e/5eeb187c106afb31f399fd3b_SunRay_Logo.svg"/></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/">Home</Nav.Link>
							<Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
							<Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
		  	</Navbar>
        );
    }
}

export default Header;