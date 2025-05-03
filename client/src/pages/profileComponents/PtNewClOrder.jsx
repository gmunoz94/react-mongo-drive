import React from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'

const PtNewClOrder = () => {
  return (
    <div id="profile">
    <div className="card mb-3">
      <div className="card-body">
        <Row>
          <Form 
            autoComplete="off"
          >
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formDOB">
                <Form.Label>Order Date</Form.Label>
                <Form.Control type="date" name='orderDate' required />
              </Form.Group>
              <Form.Group as={Col} controlId="odBoxes">
                <Form.Label>Boxes OD</Form.Label>
                <Form.Control type="number" placeholder="Number of Boxes" name='odBoxes' required />
              </Form.Group>
              <Form.Group as={Col} controlId="odBoxType">
                <Form.Label>OD Box Type</Form.Label>
                <Form.Select as={Col} name='odBoxType' required>
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
                <Form.Group as={Col}>
                  <Form.Label>More Orders?</Form.Label>
                  <Form.Select as={Col} name='moreOrders' required >
                    <option>Choose...</option>
                    <option value="Yes, Glasses">Yes, Glasses</option>
                    <option value="Yes, Contacts">Yes, Contacts</option>
                    <option value="Yes, Family">Yes, Gamily</option>
                    <option value="No">No</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="osBoxes">
                  <Form.Label>Boxes OS</Form.Label>
                  <Form.Control type="number" placeholder="Number of Boxes" name='osBoxes' required />
                </Form.Group>
                <Form.Group as={Col} controlId="osBoxType">
                  <Form.Label>OD Box Type</Form.Label>
                  <Form.Select as={Col} name='osBoxType' required>
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
            <Button variant="secondary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Row>
      </div>
    </div>
  </div>
  )
}

export default PtNewClOrder