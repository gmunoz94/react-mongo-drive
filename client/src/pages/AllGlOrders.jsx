import React from 'react'
import HomeNavbar from './universalComponents/HomeNavbar'
import { Container, Row, Col } from 'react-bootstrap'
import GlOrderCompleteTable from './orderComponents/GlOrderCompleteTable'
import GlOrderPendingTable from './orderComponents/GlOrderPendingTable'

const AllGlOrders = () => {
  return (
    <div>
      <HomeNavbar />
      <Container style={{ padding: "35px"}}>
        <Row>
          <Col lg={12} xl={6} style={{ paddingTop: "35px"}}>
            <GlOrderPendingTable />
          </Col>
        </Row>
        <Row>
          <Col lg={12} xl={6} style={{ paddingTop: "35px"}}>
            <GlOrderCompleteTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AllGlOrders