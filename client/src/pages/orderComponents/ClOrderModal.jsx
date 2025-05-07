import React, { useState } from 'react'
import { Modal, Row, Form, Col, Button, Container } from 'react-bootstrap'

const ClOrderModal = ({ show, order, onHide, setCLModalShow }) => {
  // const order = props.order;

  const handleOrderUpdate = (event) => {
    event.preventDefault();
    // Need to Create server connection to update the order in the database

    alert('Order Updated')
  }

  
  if (show === true) {
    const orderData = order.order
    // console.log(orderData)
    const [ currOrder, setCurrOrder ] = useState(orderData)
    console.log(currOrder)
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCurrOrder({ ...currOrder, [name]: value })
    }

      return (
        <Modal
          show={show}
          order={order}
          onHide={onHide}
          size='lg'
          aria-labelledby='contact-order-modal'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contact-order-modal'>
              <Row><h4>Edit Order</h4></Row>
              <Row><h6>Patient: <a href={`/patients/${currOrder.patientId}`}>{currOrder.firstName} {currOrder.lastName}</a></h6> </Row>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form 
            autoComplete="off"
          >
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formDOB">
                <Form.Label>Order Date</Form.Label>
                <Form.Control type="date" name='orderDate' defaultValue={currOrder.orderDate} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId='moreOrders'>
                <Form.Label>More Orders?</Form.Label>
                <Form.Select name='moreOrders' value={currOrder.moreOrders} onChange={handleInputChange} required >
                  <option>Choose...</option>
                  <option value="Yes, Glasses">Yes, Glasses</option>
                  <option value="Yes, Contacts">Yes, Contacts</option>
                  <option value="Yes, Family">Yes, Gamily</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId='status'>
                <Form.Label>Status</Form.Label>
                <Form.Select name='status' value={currOrder.status} onChange={handleInputChange} required>
                  <option>Choose...</option>
                  <option value="Placed">Placed</option>
                  <option value="Ordered">Ordered</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Arrived">Arrived</option>
                  <option value="Dispensed">Dispensed</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="manufacturer">
                <Form.Label>Manufacturer</Form.Label>
                <Form.Select as={Col} name='manufacturer' value={currOrder.manufacturer} onChange={handleInputChange} required>
                  <option>Choose...</option>
                  <option value="Alcon">Alcon</option>
                  <option value="Bausch & Lomb">Bausch & Lomb</option>
                  <option value="CooperVision">CooperVision</option>
                  <option value="Johnson & Johnson">Johnson & Johnson</option>

                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="odBoxes">
                <Form.Label>Boxes OD</Form.Label>
                <Form.Control type="number" placeholder="Number of Boxes" name='odBoxes' value={currOrder.odBoxes} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId="odBoxType">
                <Form.Label>OD Box Type</Form.Label>
                <Form.Select name='odBoxType' value={currOrder.odBoxType} onChange={handleInputChange} required>
                  <option>Choose...</option>
                  <option value="6-pack">6-pack</option>
                  <option value="12-pack">12-pack</option>
                  <option value="24-pack">24-pack</option>
                  <option value="30-pack">30-pack</option>
                  <option value="90-pack">90-pack</option>
                  <option value="1-trial">5-trial</option>
                  <option value="5-trials">5-trials</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="Brand">
                <Form.Label>Brand</Form.Label>
                <Form.Select as={Col} name='brand' value={currOrder.brand} onChange={handleInputChange} required>
                  <option>Choose...</option>
                  <option value="6-pack">6-pack</option>
                  <option value="12-pack">12-pack</option>
                  <option value="24-pack">24-pack</option>
                  <option value="30-pack">30-pack</option>
                  <option value="90-pack">90-pack</option>
                  <option value="1-trial">5-trial</option>
                  <option value="5-trials">5-trials</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="osBoxes">
                <Form.Label>Boxes OS</Form.Label>
                <Form.Control type="number" placeholder="Number of Boxes" name='osBoxes' value={currOrder.osBoxes} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId="osBoxType">
                <Form.Label>OD Box Type</Form.Label>
                <Form.Select name='osBoxType' value={currOrder.osBoxType} onChange={handleInputChange} required>
                  <option>Choose...</option>
                  <option value="6-pack">6-pack</option>
                  <option value="12-pack">12-pack</option>
                  <option value="24-pack">24-pack</option>
                  <option value="30-pack">30-pack</option>
                  <option value="90-pack">90-pack</option>
                  <option value="1-trial">5-trial</option>
                  <option value="5-trials">5-trials</option>
                  <option value="n/a">n/a</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
            </Row>
            <Button variant="secondary" type='submit' onClick={handleOrderUpdate} >
              Save Changes
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
      )
  } else {
    return (
      <div></div>
    )
  }

}

export default ClOrderModal