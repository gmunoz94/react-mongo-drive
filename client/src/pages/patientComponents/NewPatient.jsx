import React from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import HomeNavbar from '../universalComponents/HomeNavbar';

const NewPatient = () => {
  return (
    <>
      <Container fluid className='mt-3'>
        <Card>
          <Card.Header className='text-center fs-4'>Add New Patient</Card.Header>
          <Card.Body>
            <Row className='justify-content-center' style={{ paddingTop: "35px"}}>
              <Col>
                <Form>
                  <Row className='p-3'>
                    <Form.Group as={Col} controlId='formLastName'>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type='text' placeholder='Last Name' name='lastName' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formFirstName'>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type='text' placeholder='First Name' name='firstName' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formDateOfBirth'>
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control type='date' name='dateOfBirth' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formPhoneNumber'>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type='string' placeholder='Phone Number' name='phoneNumber' />
                    </Form.Group>
                  </Row>
                  <Row className='p-3'>
                    <Form.Group as={Col} controlId='formAddres' className='col-4'>
                      <Form.Label>Address</Form.Label>
                      <Form.Control type='text' placeholder='Address' name='address'/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formCity'>
                      <Form.Label>City</Form.Label>
                      <Form.Control type='text' placeholder='City' name='city'/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formState'>
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue='Select' name='State'>
                        <option>Choose...</option>
                        <option value="Alabama">AL</option>
                        <option value="Alaska">AK</option>
                        <option value="Arizona">AZ</option>
                        <option value="Arkansas">AR</option>
                        <option value="California">CA</option>
                        <option value="Colorado">CO</option>
                        <option value="Connecticut">CT</option>
                        <option value="Delaware">DE</option>
                        <option value="FLorida">FL</option>
                        <option value="Georgia">GA</option>
                        <option value="Hawaii">HI</option>
                        <option value="Idaho">ID</option>
                        <option value="Illinois">IL</option>
                        <option value="Indiana">IN</option>
                        <option value="Iowa">IA</option>
                        <option value="Kansas">KS</option>
                        <option value="Kentucky">KY</option>
                        <option value="Lousiana">LA</option>
                        <option value="Maine">ME</option>
                        <option value="Maryland">MD</option>
                        <option value="Massachusetts">MA</option>
                        <option value="Michigan">MI</option>
                        <option value="Minnesota">MN</option>
                        <option value="Mississippi">MS</option>
                        <option value="Missouri">MO</option>
                        <option value="Montana">MT</option>
                        <option value="Nebraska">NE</option>
                        <option value="Nevada">NV</option>
                        <option value="New Hampshire">NH</option>
                        <option value="New Jersey">NJ</option>
                        <option value="New">NM</option>
                        <option value="New York">NY</option>
                        <option value="North Carolina">NC</option>
                        <option value="North Dakota">ND</option>
                        <option value="Ohio">OH</option>
                        <option value="Oklahoma">OK</option>
                        <option value="Oregon">OR</option>
                        <option value="Pennsylvania">PA</option>
                        <option value="Rhode Island">RI</option>
                        <option value="South Carolina">SC</option>
                        <option value="South Dakota">SD</option>
                        <option value="Tennessee">TN</option>
                        <option value="Texas">TX</option>
                        <option value="Utah">UT</option>
                        <option value="Vermont">VT</option>
                        <option value="Virginia">VA</option>
                        <option value="Washington">WA</option>
                        <option value="West Virginia">WV</option>
                        <option value="Wisconsin">WI</option>
                        <option value="Wyoming">WY</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formZipCode'>
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type='text' placeholder='Zip Code' name='zipCode'/>
                    </Form.Group>
                  </Row>
                  <Row className='p-3'>
                    <Col>
                      <Button type='submit'>Add Patient</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default NewPatient;