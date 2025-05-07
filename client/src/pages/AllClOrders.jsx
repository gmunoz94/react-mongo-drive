import React, { useState } from 'react'
import HomeNavbar from './universalComponents/HomeNavbar'
import { Container, Row, Col } from 'react-bootstrap'
import ClOrderPendingTable from './orderComponents/ClOrderPendingTable'
import ClOrderCompleteTable from './orderComponents/ClOrderCompleteTable'
import ClOrderModal from './orderComponents/ClOrderModal'

const AllClOrders = () => {
  const [ clModalShow, setCLModalShow ] = useState({
    open: false,
  })

  // Need connection to get dispensed Contact orders from database
  const completeClOrders = [
    {
      orderId: "1",
      orderDate: "2025-04-25",
      patientId: "1",
      firstName: "Gerardo",
      lastName: "Munoz",
      manufacturer: "Alcon",
      brand: "Dailies Total 1",
      odBoxes: "2",
      osBoxes: "0",
      odBoxType: "90-pack",
      osBoxType: "n/a",
      moreOrders: 'Yes, Glasses',
      status: "ordered"
    },
    {
      orderId: "2",
      orderDate: "2025-04-21",
      patientId: "2",
      firstName: "Jaime",
      lastName: "Vicencio",
      manufacturer: "Bausch & Lomb",
      brand: "Infuse",
      odBoxes: "1",
      osBoxes: "1",
      odBoxType: "90-pack",
      osBoxType: "90-pack",
      moreOrders: 'Yes, Glasses',
      status: "ordered"
    },
    {
      orderId: "3",
      orderDate: "2025-04-01",
      patientId: "3",
      firstName: "Bailey",
      lastName: "Baker",
      manufacturer: "Johnson & Johnson",
      brand: "Acuvue Oasys Max",
      odBoxes: "4",
      osBoxes: "4",
      odBoxType: "90-pack",
      osBoxType: "90-pack",
      moreOrders: 'Yes, Glasses',
      status: "ordered"
    },
    {
      orderId: "4",
      orderDate: "2025-04-13",
      patientId: "4",
      firstName: "Megan",
      lastName: "Trevino",
      manufacturer: "Alcon",
      brand: "Precision7",
      odBoxes: "2",
      osBoxes: "2",
      odBoxType: "27-pack",
      osBoxType: "27-pack",
      moreOrders: 'Yes, Glasses',
      status: "ordered"
    },
    {
      orderId: "5",
      orderDate: "2025-03-31",
      patientId: "5",
      firstName: "Allison",
      lastName: "Merchant",
      manufacturer: "Alcon",
      brand: "Total 30",
      odBoxes: "1",
      osBoxes: "1",
      odBoxType: "12-pack",
      osBoxType: "12-pack",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
  ]
  // Need connection to get any pending Contact orders from database
  const openClOrders = [
    {
      orderId: "1",
      orderDate: "2025-04-25",
      patientId: "1",
      firstName: "Gerardo",
      lastName: "Munoz",
      manufacturer: "Alcon",
      brand: "Dailies Total 1",
      odBoxes: "2",
      osBoxes: "0",
      odBoxType: "90-pack",
      osBoxType: "n/a",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "2",
      orderDate: "2025-04-21",
      patientId: "2",
      firstName: "Jaime",
      lastName: "Vicencio",
      manufacturer: "Bausch & Lomb",
      brand: "Infuse",
      odBoxes: "1",
      osBoxes: "1",
      odBoxType: "90-pack",
      osBoxType: "90-pack",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "3",
      orderDate: "2025-04-01",
      patientId: "3",
      firstName: "Bailey",
      lastName: "Baker",
      manufacturer: "Johnson & Johnson",
      brand: "Acuvue Oasys Max",
      odBoxes: "4",
      osBoxes: "4",
      odBoxType: "90-pack",
      osBoxType: "90-pack",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "4",
      orderDate: "2025-04-13",
      patientId: "4",
      firstName: "Megan",
      lastName: "Trevino",
      manufacturer: "Alcon",
      brand: "Precision7",
      odBoxes: "2",
      osBoxes: "2",
      odBoxType: "27-pack",
      osBoxType: "27-pack",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "5",
      orderDate: "2025-03-31",
      patientId: "5",
      firstName: "Allison",
      lastName: "Merchant",
      manufacturer: "Alcon",
      brand: "Total 30",
      odBoxes: "1",
      osBoxes: "1",
      odBoxType: "12-pack",
      osBoxType: "12-pack",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
  ]

  // console.log(clModalShow)

  return (
    <div>
      <ClOrderModal 
        show={clModalShow.open}
        order={clModalShow.order}
        onHide={() => setCLModalShow({ open: false, order: []})}
        setCLModalShow={setCLModalShow}
        clModalShow={clModalShow}
      />
      <HomeNavbar />
      <Container style={{ padding: "35px"}}>
        <Row>
          <Col lg={12} style={{ paddingTop: "35px"}}>
            <ClOrderPendingTable openClOrders={openClOrders} setClModalShow={setCLModalShow}/>
          </Col>
        </Row>
        <Row>
          <Col lg={12} style={{ paddingTop: "35px"}}>
            <ClOrderCompleteTable completeClOrders={completeClOrders} setClModalShow={setCLModalShow} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AllClOrders