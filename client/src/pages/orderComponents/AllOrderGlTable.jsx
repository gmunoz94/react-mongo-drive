import React from 'react'
import { Card, Table, Container, Button } from 'react-bootstrap'


function OrderGlTable() {
  const openGlOrders = [
    {
      orderId: "1",
      orderDate: "04/25/2025",
      firstName: "Gerardo",
      lastName: "Munoz",
      lab: "In House",
      status: "ordered"
    },
    {
      orderId: "2",
      orderDate: "04/21/2025",
      firstName: "George",
      lastName: "Washington",
      lab: "Walman",
      status: "ordered"
    },
    {
      orderId: "3",
      orderDate: "04/01/2025",
      firstName: "Thomas",
      lastName: "Edison",
      lab: "Walman",
      status: "ordered"
    },
    {
      orderId: "4",
      orderDate: "04/13/2025",
      firstName: "Thomas",
      lastName: "Jefferson",
      lab: "In House",
      status: "ordered"
    },
    {
      orderId: "5",
      orderDate: "03/31/2025",
      firstName: "James",
      lastName: "Madison",
      lab: "Nassau",
      status: "ordered"
    },
  ]

  return (
    <Card bg='tertiary' text='dark' className='home-card'>
      <Card.Header className='text-center fs-4' >Glasses Orders</Card.Header>
      <Card.Body >
        <Container className='table-container'>
          <Table hover striped bordered variant='light' size='sm' >
            <thead>
              <tr>
                <th className='table-header'>Order Date</th>
                <th className='table-header'>Patient Name</th>
                <th className='table-header'>Lab</th>
                <th className='table-header'>Status</th>
              </tr>
            </thead>
            <tbody>
              {openGlOrders.map((order) => order === null ? (
                <tr>
                  <td colSpan={4}>No Pending Glasses Orders</td>
                </tr>
              ) : (
                <tr key={order.orderId}>
                <td  className='table-data'>{order.orderDate}</td>
                <td  className='table-data'>{order.firstName} {order.lastName}</td>
                <td  className='table-data'>{order.lab}</td>
                <td  className='table-data'>{order.status}</td>
              </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Card.Body>
      <Button variant='secondary' className='order-button' href='/orders/glasses'>View All Glasses Orders</Button>
    </Card>
  )

}

export default OrderGlTable