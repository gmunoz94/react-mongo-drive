import React from 'react'
import { Card, Table, Container, Button } from 'react-bootstrap'

function ContactOrderTable() {
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
              <tr>
                <td  className='table-data'>4/24/2025</td >
                <td  className='table-data'>Gerardo Munoz</td >
                <td  className='table-data'>Alcon</td >
                <td  className='table-data'>Pending</td >
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td >
                <td  className='table-data'>Gerardo Munoz</td >
                <td  className='table-data'>Alcon</td >
                <td  className='table-data'>Pending</td >
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td >
                <td  className='table-data'>Gerardo Munoz</td >
                <td  className='table-data'>Alcon</td >
                <td  className='table-data'>Pending</td >
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td >
                <td  className='table-data'>Gerardo Munoz</td >
                <td  className='table-data'>Alcon</td >
                <td  className='table-data'>Pending</td >
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td >
                <td  className='table-data'>Gerardo Munoz</td >
                <td  className='table-data'>Alcon</td >
                <td  className='table-data'>Pending</td >
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td >
                <td  className='table-data'>Gerardo Munoz</td >
                <td  className='table-data'>Alcon</td >
                <td  className='table-data'>Pending</td >
              </tr>
            </tbody>
          </Table>
        </Container>
      </Card.Body>
      <Button variant='secondary' className='order-button' href='#AllContactOrders'>View All Orders</Button>
    </Card>
  )
}

export default ContactOrderTable