
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar, Container } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mt-4 rounded">
            <Container>
            <Navbar.Brand  className='text-white'>Waiter.app</Navbar.Brand>
            <Nav className="flex justify-content-end">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </Nav>
            </Container>
            </Navbar>

        </div>
    )
}


export default NavBar;