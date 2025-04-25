import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GlassesOrderTable from './homeComponents/GlassesOrderTable';
import ContactOrderTable from './homeComponents/ContactOrderTable';
import Calendar from './homeComponents/Calendar';

function Homepage() {
  return (
    <Container fluid >
      <Row>
        <Col lg={12} xl={4} style={{ padding: "35px" }}>
          <Calendar />
        </Col>
        <Col lg={12} xl={4} style={{ padding: "35px" }}>
          <GlassesOrderTable />
        </Col>
        <Col lg={12} xl={4} style={{ padding: "35px" }}>
          <ContactOrderTable />
        </Col>
      </Row>
    </Container>
  )
}


export default Homepage;