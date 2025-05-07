import React from 'react'
import { Card, Table, Container, Button } from 'react-bootstrap'

function OrderClTable() {
  const openClOrders = [
    {
      orderId: "1",
      orderDate: "04/25/2025",
      firstName: "Gerardo",
      lastName: "Munoz",
      manufacturer: "Alcon",
      status: "ordered"
    },
    {
      orderId: "2",
      orderDate: "04/21/2025",
      firstName: "Jaime",
      lastName: "Vicencio",
      manufacturer: "Bausch & Lomb",
      status: "ordered"
    },
    {
      orderId: "3",
      orderDate: "04/01/2025",
      firstName: "Bailey",
      lastName: "Baker",
      manufacturer: "Acuvue",
      status: "ordered"
    },
    {
      orderId: "4",
      orderDate: "04/13/2025",
      firstName: "Megan",
      lastName: "Trevino",
      manufacturer: "Dailies",
      status: "ordered"
    },
    {
      orderId: "5",
      orderDate: "03/31/2025",
      firstName: "Allison",
      lastName: "Merchant",
      manufacturer: "Alcon",
      status: "ordered"
    },
  ]

  return (
    <Card className='home-card'>
      <Card.Header className='text-center fs-4' >Contact Orders</Card.Header>
      <Card.Body >
        <Container className='table-container'>
          <Table hover striped bordered size='sm'>
            <thead >
              <tr>
                <th className='table-header'>Order Date</th>
                <th className='table-header'>Patient Name</th>
                <th className='table-header'>Manufacturer</th>
                <th className='table-header'>Status</th>
              </tr>
            </thead>
            <tbody>
              {openClOrders.map((order) => order === null ? (
                <tr>
                  <td colSpan={4}>No Orders</td>
                </tr>
              ) : (
                <tr key={order.orderId}>
                  <td  className='table-data'>{order.orderDate}</td>
                  <td  className='table-data'>{order.firstName} {order.lastName}</td>
                  <td  className='table-data'>{order.manufacturer}</td>
                  <td  className='table-data'>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Card.Body>
      <Button variant='secondary' className='order-button' href='/orders/contacts'>View All Contact Orders</Button>
    </Card>
  )
}

export default OrderClTable;