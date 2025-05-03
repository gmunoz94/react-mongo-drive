import React from 'react'
import { Card, Table, Container, Button } from 'react-bootstrap'

function PtClOrderTable({ptOrders, setNotesModalShow}) {
  const orders = ptOrders
  const pendingCLOrders = orders[0].pendingOrders.contacts
  const completeCLOrders = orders[0].completeOrders.contacts
  

  return (
    <div>
    {ptOrders ?
      <Card className='home-card'>
        <Card.Header className='text-center fs-4' >Contact Orders</Card.Header>
        <Card.Body >
          <Container className='table-container'>
            <h6>Pending Orders</h6>
            <Table hover striped bordered size='sm'>
              <thead >
                <tr>
                  <th className='table-header'>Order Date</th>
                  <th className='table-header'>OD Brand</th>
                  <th className='table-header'>OD Boxes</th>
                  <th className='table-header'>OS Brand</th>
                  <th className='table-header'>OS Boxes</th>
                  <th className='table-header'>Status</th>
                  <th className='table-header'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {pendingCLOrders.map((r) => r === null ? (
                  <tr>
                    <td colSpan={4}>No Pending Orders</td>
                  </tr>
                ) : (
                  <tr key={r.orderId}>
                    <td className='table-data'>{r.orderDate}</td>
                    <td className='table-data'>{r.odBrand}</td>
                    <td className='table-data'>{r.odBoxes}</td>
                    <td className='table-data'>{r.osBrand}</td>
                    <td className='table-data'>{r.osBoxes}</td>
                    <td className='table-data'>{r.status}</td>
                    <td className='table-data'><a href='#modal' style={{textDecoration: 'none', fontSize: '1rem'}} onClick={() => setNotesModalShow({ open: true, message: {r} })}>📝</a></td>
                    <td className='table-data'><Button size='sm' variant='link'>Edit</Button></td>                    
                  </tr>
                ))}
              </tbody>
            </Table>
            <h6>Complete Orders</h6>
            <Table hover striped bordered size='sm'>
              <thead >
                <tr>
                  <th className='table-header'>Order Date</th>
                  <th className='table-header'>OD Brand</th>
                  <th className='table-header'>OD Boxes</th>
                  <th className='table-header'>OS Brand</th>
                  <th className='table-header'>OS Boxes</th>
                  <th className='table-header'>Status</th>
                  <th className='table-header'>Notes</th>
                </tr>
              </thead>
              <tbody>
                {completeCLOrders.map((r) => r === null ? (
                  <tr>
                    <td colSpan={4}>No Pending Orders</td>
                  </tr>
                ) : (
                  <tr key={r.orderId}>
                    <td className='table-data'>{r.orderDate}</td>
                    <td className='table-data'>{r.odBrand}</td>
                    <td className='table-data'>{r.odBoxes}</td>
                    <td className='table-data'>{r.osBrand}</td>
                    <td className='table-data'>{r.osBoxes}</td>
                    <td className='table-data'>{r.status}</td>
                    <td className='table-data'><a href='#modal' style={{textDecoration: 'none', fontSize: '1rem'}} onClick={() => setNotesModalShow({ open: true, message: {r} })}>📝</a></td>
                    <td className='table-data'><Button size='sm' variant='link'>Edit</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Card.Body>
        <Button variant='secondary' className='order-button' href='#AllContactOrders'>View All Orders</Button>
      </Card> : <p>No Orders</p>}
    </div>
  )
}

export default PtClOrderTable;