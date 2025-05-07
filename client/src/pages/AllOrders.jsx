import React from 'react'
import HomeNavbar from './universalComponents/HomeNavbar'
import { Container, Row, Col } from 'react-bootstrap'
import OrderGlTable from './orderComponents/OrderGlTable'
import OrderClTable from './orderComponents/OrderClTable'

const AllOrders = () => {
  return (
    <div>
      <HomeNavbar />
      <Container style={{ padding: "35px"}}>
        <Row>
          <Col lg={12} xl={6} style={{ paddingTop: "35px"}}>
            <OrderGlTable />
          </Col>
          <Col lg={12} xl={6} style={{ paddingTop: "35px"}}>
            <OrderClTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AllOrders