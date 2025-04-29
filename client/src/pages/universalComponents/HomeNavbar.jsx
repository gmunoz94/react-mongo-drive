import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom"

import React from 'react'
import DarkMode from './DarkMode';

function HomeNavbar() {
  return (
    <Navbar sticky='top' expand='md' className="bg-danger-subtle">
      <Container fluid>
      <Link to="/" className='navbar-brand'>M Drive</Link>
      <Navbar.Toggle aria-controls='home-navbar-nav' />
        <Navbar.Collapse id='home-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='#Schedule' className='nav-link'>Schedule</Link>
            <Link to='/patients' className='nav-link'>Patients</Link>
            <NavDropdown title="Orders" id="order-nav-dropdown">
              <Link className='dropdown-item' to="#PendingGlassesOrders">Pending Glasses Orders</Link>
              <Link className='dropdown-item' to="#PendingContactsOrders">Pending Contacts Orders</Link>
              <Link className='dropdown-item' to="#PendingOrders">All Pending Orders</Link>
            </NavDropdown>
            <NavDropdown title="Reports" id="order-nav-dropdown">
              <Link className='dropdown-item' to="#SalesReports">Sales</Link>
              <Link className='dropdown-item' to="#OrderReports">Orders</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          {/* <DarkMode /> */}
          <Button variant='outline-secondary'>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar;