import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import React from 'react'

function HomeNavbar() {
  return (
    <Navbar sticky='top' expand='md' className="bg-danger-subtle">
      <Container fluid>
        <Navbar.Brand href="#home">M Drive</Navbar.Brand>
        <Navbar.Toggle aria-controls='home-navbar-nav' />
        <Navbar.Collapse id='home-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home me-auto'>Home</Nav.Link>
            <NavDropdown title="Patients" id="patient-nav-dropdown">
              <NavDropdown.Item href="#NewPatient">New Patient</NavDropdown.Item>
              <NavDropdown.Item href="#SearchPatient">Search Patients</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Orders" id="order-nav-dropdown">
              <NavDropdown.Item href="#PendingGlassesOrders">Pending Glasses Orders</NavDropdown.Item>
              <NavDropdown.Item href="#PendingContactsOrders">Pending Contacts Orders</NavDropdown.Item>
              <NavDropdown.Item href="#PendingOrders">All Pending Orders</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reports" id="order-nav-dropdown">
              <NavDropdown.Item href="#SalesReports">Sales</NavDropdown.Item>
              <NavDropdown.Item href="#OrderReports">Orders</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <Button variant='outline-secondary'>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar;