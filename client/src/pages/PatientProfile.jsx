import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';
import HomeNavbar from './universalComponents/HomeNavbar';
import PtGlOrderTable from './profileComponents/PtGlOrderTable';
import PtClOrderTable from './profileComponents/PtClOrderTable';
import { PtNewGlOrder } from './profileComponents/PtNewGlOrder';
import PtNewClOrder from './profileComponents/PtNewClOrder';
import NotesModal from './profileComponents/NotesModal';
import { auto } from '@popperjs/core';

const PatientProfile = () => {
  const [ notesModalShow, setNotesModalShow ] = useState({
    open: false,
  })

  const patientInfo = {
    firstName: "Gerardo",
    lastName: "Munoz",
    dateOfBirth: "04/26/1994",
    phoneNumber: "512-986-1629",
    email: "gmunoz9619@gmail.com",
    streetAddress: "10810 Gemsbuck Lodge",
    city: "San Antonio",
    state: "TX",
    zipCode: "78245"
  }

  const ptOrders = [
        {
          pendingOrders: {
            glasses: [
              {
                orderId: '5',
                orderDate: "04/24/2025",
                frameBrand: "IC Berlin",
                frameModel: "IC4444",
                lensType: "SV",
                lab: "In House",
                status: "pending",
                notes: [
                  {
                    message: "Lens breakage on 5/1/25, reordering lenses",
                    author: "Gerardo Munoz",
                    noteId: '2'
                  }
                ]
              },
            ],
            contacts: [
              {
                orderId: '4',
                orderDate: "04/24/2025",
                odBrand: "Precision 7 27pk",
                osBrand: "Precision 7 27pk",
                odBoxes: "1",
                osBoxes: "1",
                status: "ordered",
                notes: [
                  {
                    message: "no issues",
                    author: "Jaime Vicencio",
                    noteId: "1"
                  }
                ]
              },
            ]
          },
          completeOrders: {
            glasses: [
              {
                orderId: '3',
                orderDate: "04/24/2025",
                frameBrand: "Ray-Ban",
                frameModel: "RB 1435",
                lensType: "SV",
                lab: "In House",
                status: "dispensed"
              },
            ],
            contacts: [
              {
                orderId: '1',
                orderDate: "10/24/2023",
                odBrand: "Precision 7 27pk",
                osBrand: "Precision 7 27pk",
                odBoxes: "2",
                osBoxes: "2",
                status: "dispensed",
              },
              {
                orderId: '2',
                orderDate: "04/24/2025",
                odBrand: "Precision 7 27pk",
                osBrand: "Precision 7 27pk",
                odBoxes: "1",
                osBoxes: "1",
                status: "ordered"
              }
            ]
          }
        }
      ]


  return (
    <div>
      <NotesModal 
        show={notesModalShow.open}
        order={notesModalShow.message}
        onHide={() => setNotesModalShow({ open: false, order: []})}
      />
      {ptOrders === null ? 
      <p>Loading...</p> :
      <div>
        <HomeNavbar />
        <Container style={{ padding: "35px" }}>
          <Row>
            <Container className='patient-info-container bg-danger-subtle'>
              <div className='patient-info-box1'>
                <h4>{patientInfo.firstName} {patientInfo.lastName}</h4>
                <div style={{ display: 'flex', fontSize: ".8rem", marginTop: "8px"}}>
                  <div style={{ marginRight: "10px"}}>
                    <p className='patient-info-text'>Address:</p>
                  </div>
                  <div>
                    <p className='patient-info-text'>{patientInfo.streetAddress}</p>
                    <p className='patient-info-text'>{patientInfo.city}, {patientInfo.state} {patientInfo.zipCode}</p>
                  </div>
                </div>
              </div>
              <div className='patient-info-box2' style={{ fontSize: ".8rem"}}>
                <div style={{ marginRight: "10px"}}>
                  <p className='patient-info-text'>Date Of Birth: </p>
                  <p className='patient-info-text'>Phone Number: </p>
                  <p className='patient-info-text'>Email: </p>
                </div>
                <div style={{ textAlign: "start"}}>
                  <p className='patient-info-text'>{patientInfo.dateOfBirth}</p>
                  <p className='patient-info-text'>{patientInfo.phoneNumber}</p>
                  <p className='patient-info-text'>{patientInfo.email}</p>
                  <a href='#edit'>Edit Patient Info</a>
                </div>
              </div>
            </Container>
          </Row>
          <Row>
            <Container className='patient-bottom-container bg-danger-subtle'>
              <Tabs defaultActiveKey="orders">
                <Tab eventKey="orders" title='Orders'>
                    <Container id='ptOrdersTab' style={{ paddingTop: "35px"}}>
                      <Row>
                        <Col>
                          <PtGlOrderTable ptOrders={ptOrders} setNotesModalShow={setNotesModalShow} />
                        </Col>
                        <Col>
                          <PtClOrderTable ptOrders={ptOrders} setNotesModalShow={setNotesModalShow} />
                        </Col>
                      </Row>
                    </Container>
                </Tab>
                <Tab eventKey="new-order" title='New Order'>
                  <Container id='ptNewOrderTab' style={{ paddingTop: "35px"}}>
                    <Row>
                      <Col>
                        <PtNewGlOrder />
                      </Col>
                      <Col>
                        <PtNewClOrder />
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab eventKey="appointments" title='Appointments'>
                  <Container id='ptApptTab' style={{ paddingTop: "35px"}}>
                    <Row>
                      <Col>
                        {/* <PtGlOrderTable /> */}
                      </Col>
                      <Col>
                        {/* <PtClOrderTable /> */}
                      </Col>
                    </Row>
                  </Container>
                </Tab>
              </Tabs>
            </Container>
          </Row>
        </Container>
      </div>}
    </div>
  )
}

export default PatientProfile