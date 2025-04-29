import React from 'react'
import { Card, Table, Container, Button } from 'react-bootstrap'


function GlassesOrderTable() {
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
              <tr>
                <td  className='table-data'>4/24/2025</td>
                <td  className='table-data'>Gerardo Munoz</td>
                <td  className='table-data'>In House</td>
                <td  className='table-data'>Pending</td>
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td>
                <td  className='table-data'>Gerardo Munoz</td>
                <td  className='table-data'>In House</td>
                <td  className='table-data'>Pending</td>
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td>
                <td  className='table-data'>Gerardo Munoz</td>
                <td  className='table-data'>In House</td>
                <td  className='table-data'>Pending</td>
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td>
                <td  className='table-data'>Gerardo Munoz</td>
                <td  className='table-data'>In House</td>
                <td  className='table-data'>Pending</td>
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td>
                <td  className='table-data'>Gerardo Munoz</td>
                <td  className='table-data'>In House</td>
                <td  className='table-data'>Pending</td>
              </tr>
              <tr>
                <td  className='table-data'>4/24/2025</td>
                <td  className='table-data'>Gerardo Munoz</td>
                <td  className='table-data'>In House</td>
                <td  className='table-data'>Pending</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Card.Body>
      <Button variant='secondary' className='order-button' href='#AllGlassesOrders'>View All Orders</Button>
    </Card>
  )

}

export default GlassesOrderTable