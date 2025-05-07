import React from 'react'
import { Card, Table, Container, Button } from 'react-bootstrap'

const ClOrderCompleteTable = ({setClModalShow, completeClOrders}) => {

  return (
    <Card className='home-card'>
      <Card.Header className='text-center fs-4' >Recently Dispensed Contacts</Card.Header>
      <Card.Body >
        <Container className='table-container'>
          <Table hover striped bordered size='sm'>
            <thead >
              <tr>
              <th className='table-header'>Order Date</th>
                <th className='table-header'>Patient Name</th>
                <th className='table-header'>Manufacturer</th>
                <th className='table-header'>Brand</th>
                <th className='table-header'>OD Boxes</th>
                <th className='table-header'>OD Box Type</th>
                <th className='table-header'>OS Boxes</th>
                <th className='table-header'>OD Box Type</th>
                <th className='table-header'>More Orders?</th>
                <th className='table-header'>Status</th>
              </tr>
            </thead>
            <tbody>
              {completeClOrders.map((order) => order === null ? (
                <tr>
                <td colSpan={4}>No Orders</td>
              </tr>
            ) : (
              <tr key={order.orderId}>
                <td  className='table-data'>{order.orderDate}</td>
                <td  className='table-data'><a href={`/patients/${order.patientId}`}>{order.firstName} {order.lastName}</a></td>
                <td  className='table-data'>{order.manufacturer}</td>
                <td  className='table-data'>{order.brand}</td>
                <td  className='table-data'>{order.odBoxes}</td>
                <td  className='table-data'>{order.odBoxType}</td>
                <td  className='table-data'>{order.osBoxes}</td>
                <td  className='table-data'>{order.osBoxType}</td>
                <td  className='table-data'>{order.moreOrders}</td>
                <td  className='table-data'>{order.status}</td>
                  <td  className='table-data'><Button size='sm' variant='link' onClick={() => setClModalShow({ open: true, order: {order}})}>Edit</Button></td>
              </tr>
            ))}
            </tbody>
          </Table>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default ClOrderCompleteTable