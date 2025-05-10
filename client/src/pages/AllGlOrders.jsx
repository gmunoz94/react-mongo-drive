import React, { useState } from 'react'
import HomeNavbar from './universalComponents/HomeNavbar'
import { Container, Row, Col } from 'react-bootstrap'
import GlOrderCompleteTable from './orderComponents/GlOrderCompleteTable'
import GlOrderPendingTable from './orderComponents/GlOrderPendingTable'
import GlOrderModal from './orderComponents/GlOrderModal'

const AllGlOrders = () => {
  const [ glModalShow, setGlModalShow ] = useState({
    open: false,
  });

  // Need to get all frame data in the parent component from database
  const frames = [
    {
        "frame": "Steve Madden"
    },
    {
        "frame": "Victoria Secret"
    },
    {
        "frame": "Emporio Armani"
    },
    {
        "frame": "Skechers"
    },
    {
        "frame": "Tom Ford"
    },
    {
        "frame" : "Gucci"
    },
    {
        "frame": "Ann Taylor"
    },
    {
        "frame": "Nicole Miller"
    },
    {
        "frame": "Marc Jacobs"
    },
    {
        "frame": "Tiffany & Co"
    },
    {
        "frame": "Versace"
    },
    {
        "frame": "Burberry"
    },
    {
        "frame": "Coach"
    },
    {
        "frame": "Michael Kors"
    },
    {
        "frame": "Vera Wang"
    },
    {
        "frame": "Marcolin"
    },
    {
        "frame": "Swarovski"
    },
    {
        "frame": "Cinzia"
    },
    {
        "frame": "Michael Ryen"
    },
    {
        "frame": "Ralph Lauren"
    },
    {
        "frame": "Marie Claire"
    },
    {
        "frame": "Armani Exchange"
    },
    {
        "frame": "Alexander Collection"
    },
    {
        "frame": "Scott Harrisn"
    },
    {
        "frame": "Champion"
    },
    {
        "frame": "Cremieux"
    },
    {
        "frame": "Bebe"
    },
    {
        "frame": "Lacoste"
    },
    {
        "frame": "Converse"
    },
    {
        "frame": "Columbia"
    },
    {
        "frame": "Lucky Brand"
    },
    {
        "frame": "Nike"
    },
    {
        "frame": "Casey Cove"
    },
    {
        "frame": "Crocs"
    },
    {
        "frame": "Puma"
    },
    {
        "frame": "Penguin"
    },
    {
        "frame": "Costa"
    },
    {
        "frame": "Tommy Hilfiger"
    },
    {
        "frame": "Polo"
    },
    {
        "frame": "Harley Davidson"
    },
    {
        "frame": "XXL"
    },
    {
        "frame": "Brooks Brothers"
    },
    {
        "frame": "Oakley"
    },
    {
        "frame": "Ray Ban"
    },
    {
        "frame": "Kenneth Cole"
    },
    {
        "frame": "Kate Spade"
    },
    {
        "frame": "Sperry"
    }
  ]

  const completeGlOrders = [
    {
      orderId: "1",
      orderDate: "2025-04-25",
      patientId: "1",
      firstName: "Gerardo",
      lastName: "Munoz",
      frameBrand: "Armani Exchange",
      frameModel: "AX 1035",
      lensType: "SV",
      location: "In House",
      lab: "In House",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "2",
      orderDate: "2025-04-21",
      patientId: "2",
      firstName: "George",
      lastName: "Washington",
      frameBrand: "Polo Ralph Lauren",
      frameModel: "PL 2050",
      lensType: "Progressive",
      location: "Outside Lab",
      lab: "Walman",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "3",
      orderDate: "2025-04-01",
      patientId: "3",
      firstName: "Thomas",
      lastName: "Edison",
      frameBrand: "IC Berlin",
      frameModel: "IC 1111",
      lensType: "SV",
      location: "Outside Lab",
      lab: "Nassau",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "4",
      orderDate: "2025-04-13",
      patientId: "4",
      firstName: "Thomas",
      lastName: "Jefferson",
      frameBrand: "Giorgio Arman",
      frameModel: "GA 5555",
      lensType: "Bi-focal",
      location: "Outside Lab",
      lab: "Nassau",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
    {
      orderId: "5",
      orderDate: "2025-03-31",
      patientId: "5",
      firstName: "James",
      lastName: "Madison",
      frameBrand: "Ray-Ban",
      frameModel: "RX 2353",
      lensType: "SV",
      location: "In House",
      lab: "In House",
      moreOrders: 'Yes, Glasses',
      status: "Ordered"
    },
  ]

  const openGlOrders = [
    {
        orderId: "1",
        orderDate: "2025-04-25",
        patientId: "1",
        firstName: "Gerardo",
        lastName: "Munoz",
        frameBrand: "Armani Exchange",
        frameModel: "AX 1035",
        lensType: "SV",
        location: "In House",
        lab: "In House",
        moreOrders: 'Yes, Glasses',
        status: "Ordered"
      },
      {
        orderId: "2",
        orderDate: "2025-04-21",
        patientId: "2",
        firstName: "George",
        lastName: "Washington",
        frameBrand: "Polo Ralph Lauren",
        frameModel: "PL 2050",
        lensType: "Progressive",
        location: "Outside Lab",
        lab: "Walman",
        moreOrders: 'Yes, Glasses',
        status: "Ordered"
      },
      {
        orderId: "3",
        orderDate: "2025-04-01",
        patientId: "3",
        firstName: "Thomas",
        lastName: "Edison",
        frameBrand: "IC Berlin",
        frameModel: "IC 1111",
        lensType: "SV",
        location: "Outside Lab",
        lab: "Nassau",
        moreOrders: 'Yes, Glasses',
        status: "Ordered"
      },
      {
        orderId: "4",
        orderDate: "2025-04-13",
        patientId: "4",
        firstName: "Thomas",
        lastName: "Jefferson",
        frameBrand: "Giorgio Arman",
        frameModel: "GA 5555",
        lensType: "Bi-focal",
        location: "Outside Lab",
        lab: "Nassau",
        moreOrders: 'Yes, Glasses',
        status: "Ordered"
      },
      {
        orderId: "5",
        orderDate: "2025-03-31",
        patientId: "5",
        firstName: "James",
        lastName: "Madison",
        frameBrand: "Ray-Ban",
        frameModel: "RX 2353",
        lensType: "SV",
        location: "In House",
        lab: "In House",
        moreOrders: 'Yes, Glasses',
        status: "Ordered"
      },
  ]

  return (
    <div>
      <GlOrderModal 
        show={glModalShow.open}
        order={glModalShow.order}
        onHide={() => setGlModalShow({ open: false, order: []})}
        frames={frames}
      />
      <HomeNavbar />
      <Container style={{ padding: "35px"}}>
        <Row>
          <Col lg={12} style={{ paddingTop: "35px"}}>
            <GlOrderPendingTable openGlOrders={openGlOrders} setGlModalShow={setGlModalShow} />
          </Col>
        </Row>
        <Row>
          <Col lg={12} style={{ paddingTop: "35px"}}>
            <GlOrderCompleteTable completeGlOrders={completeGlOrders} setGlModalShow={setGlModalShow} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AllGlOrders