import React, { useState } from 'react'
import { Modal, Row, Form, Col, Button } from 'react-bootstrap'


const GlOrderModal = ({ show, order, onHide, setGlModalShow, frames }) => {


  const handleOrderUpdate = (event) => {
    event.preventDefault();
    // Need to Create server connection to update the order in the database

    alert('Order Updated')
  }

  if (show === true) {
    const orderData = order.order
    // console.log(frames)
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
              <Form.Group as={Col} controlId="formFrameBrand">
                <Form.Label>Frame Brand</Form.Label>
                <Form.Select type="text" placeholder="Frame Brand" name='frameBrand' value={currOrder.frameBrand} onChange={handleInputChange} required>
                <option>Choose...</option>
                {frames.map((f) => (
                  <option key={f.frame} value={f.frame}>{f.frame}</option>
                ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formFrameModel">
                <Form.Label>Model Number</Form.Label>
                <Form.Control type="text" placeholder="Model" name='frameModel' value={currOrder.frameModel} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group as={Col} controlId="formLensType">
                <Form.Label>Lens Type</Form.Label>
                <Form.Control type="text" placeholder="Lens Info" name='lensType' value={currOrder.lensType} onChange={handleInputChange} required />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col}>
              <Form.Label>Location</Form.Label>
                <Form.Select as={Col} name='location' value={currOrder.location} required>
                  <option>Choose...</option>
                  <option value="In House">In House</option>
                  <option value="Outside Lab">Outside Lab</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>More Orders?</Form.Label>
                <Form.Select as={Col} name='moreOrders' value={currOrder.moreOrders} onChange={handleInputChange} required >
                  <option>Choose...</option>
                  <option value="Yes, Glasses">Yes, Glasses</option>
                  <option value="Yes, Contacts">Yes, Contacts</option>
                  <option value="Yes, Family">Yes, Gamily</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Lab</Form.Label>
                <Form.Select name='lab' required value={currOrder.lab} onChange={handleInputChange} >
                  <option>Choose...</option>
                  <option value="In House">In House</option>
                  <option value="Walman">Walman</option>
                  <option value="ABB">ABB</option>
                  <option value="Oakley">Oakley</option>
                  <option value="Costa">Costa</option>
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

export default GlOrderModal