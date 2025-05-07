import React from 'react'
import HomeNavbar from './universalComponents/HomeNavbar'
import { Container, Row, Col } from 'react-bootstrap'
import AllOrderGlTable from './orderComponents/AllOrderGlTable'
import AllOrderClTable from './orderComponents/AllOrderClTable'

const AllOrders = () => {
  return (
    <div>
      <HomeNavbar />
      <Container style={{ padding: "35px"}}>
        <Row>
          <Col lg={12} xl={6} style={{ paddingTop: "35px"}}>
            <AllOrderGlTable />
          </Col>
          <Col lg={12} xl={6} style={{ paddingTop: "35px"}}>
            <AllOrderClTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AllOrders