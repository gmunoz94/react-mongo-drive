import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GlassesOrderTable from './homeComponents/GlassesOrderTable';
import ContactOrderTable from './homeComponents/ContactOrderTable';
import Calendar from './homeComponents/Calendar';
import HomeNavbar from './universalComponents/HomeNavbar';

function Homepage() {
  return (
    <div>
      <HomeNavbar />
      <Container fluid style={{ paddingInline: "35px" }}>
        <Row>
          <Col lg={12} xl={4} style={{ paddingTop: "35px", paddingBottom: "35px" }}>
            <Calendar />
          </Col>
          <Col lg={12} xl={4} style={{ paddingTop: "35px", paddingBottom: "35px" }}>
            <GlassesOrderTable />
          </Col>
          <Col lg={12} xl={4} style={{ paddingTop: "35px", paddingBottom: "35px" }}>
            <ContactOrderTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Homepage;