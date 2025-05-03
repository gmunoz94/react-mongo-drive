import React from 'react'
import { Card, Table, Container, Button } from 'react-bootstrap'


function PtGlOrderTable({ptOrders, setNotesModalShow}) {
  const orders = ptOrders
  const pendingGlOrders = orders[0].pendingOrders.glasses
  const completeGlOrders = orders[0].completeOrders.glasses

  return (
    <Card bg='tertiary' text='dark' className='home-card'>
      <Card.Header className='text-center fs-4' >Glasses Orders</Card.Header>
      <Card.Body >
        <Container className='table-container'>
          <h6>Pending Orders</h6>
          <Table hover striped bordered variant='light' size='sm' >
            <thead>
              <tr>
                <th className='table-header'>Order Date</th>
                <th className='table-header'>Brand</th>
                <th className='table-header'>Model</th>
                <th className='table-header'>Lens Type</th>
                <th className='table-header'>Lab</th>
                <th className='table-header'>Status</th>
                <th className='table-header'>Notes</th>
              </tr>
            </thead>
            <tbody>
              {pendingGlOrders.map((r) => r === null ? (
                <tr>
                  <td colSpan={4}>No Pending Orders</td>
                </tr>
              ) : (
                <tr key={r.orderId}>
                  <td className='table-data'>{r.orderDate}</td>
                  <td className='table-data'>{r.frameBrand}</td>
                  <td className='table-data'>{r.frameModel}</td>
                  <td className='table-data'>{r.lensType}</td>
                  <td className='table-data'>{r.lab}</td>
                  <td className='table-data'>{r.status}</td>
                  <td className='table-data'><a href="#modal" style={{textDecoration: 'none', fontSize: '1rem'}} onClick={() => setNotesModalShow({ open: true, message: {r} })} >📝</a></td>
                  <td className='table-data'><Button size='sm' variant='link'>Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h6>Complete Orders</h6>
          <Table hover striped bordered variant='light' size='sm' >
            <thead>
              <tr>
                <th className='table-header'>Order Date</th>
                <th className='table-header'>Brand</th>
                <th className='table-header'>Model</th>
                <th className='table-header'>Lens Type</th>
                <th className='table-header'>Lab</th>
                <th className='table-header'>Status</th>
                <th className='table-header'>Notes</th>
              </tr>
            </thead>
            <tbody>
              {completeGlOrders.map((r) => r === null ? (
                <tr>
                  <td colSpan={4}>No Pending Orders</td>
                </tr>
              ) : (
                <tr key={r.orderId}>
                  <td className='table-data'>{r.orderDate}</td>
                  <td className='table-data'>{r.frameBrand}</td>
                  <td className='table-data'>{r.frameModel}</td>
                  <td className='table-data'>{r.lensType}</td>
                  <td className='table-data'>{r.lab}</td>
                  <td className='table-data'>{r.status}</td>
                  <td className='table-data'><a href="#modal" style={{textDecoration: 'none', fontSize: '1rem'}} onClick={() => setNotesModalShow({ open: true, message: {r} })} >📝</a></td>
                  <td className='table-data'><Button size='sm' variant='link'>Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Card.Body>
      <Button variant='secondary' className='order-button' href='#AllGlassesOrders'>View All Orders</Button>
    </Card>
  )

}

export default PtGlOrderTable