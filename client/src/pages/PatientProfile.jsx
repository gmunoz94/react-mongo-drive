import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap';
import HomeNavbar from './universalComponents/HomeNavbar';
import PtGlOrderTable from './profileComponents/PtGlOrderTable';
import PtClOrderTable from './profileComponents/PtClOrderTable';
import { PtNewGlOrder } from './profileComponents/PtNewGlOrder';
import PtNewClOrder from './profileComponents/PtNewClOrder';
import NotesModal from './profileComponents/NotesModal';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios.config';
import moment from 'moment';

const PatientProfile = () => {
  const params = useParams();
  const id = params.id
  console.log(id)

    // Need to get patien info from database
  const [ patientInfo, setPatientInfo ] = useState({})
  // const patientInfo = {
  //   firstName: "Gerardo",
  //   lastName: "Munoz",
  //   dateOfBirth: "04/26/1994",
  //   phoneNumber: "512-986-1629",
  //   email: "gmunoz9619@gmail.com",
  //   streetAddress: "10810 Gemsbuck Lodge",
  //   city: "San Antonio",
  //   state: "TX",
  //   zipCode: "78245"
  // }

  useEffect(() => {
    axios.get(`/api/patients/${id}`)
    .then((response) => {
      response.data.dateOfBirth = moment(response.data.dateOfBirth).add(1, 'days').format('L')
      setPatientInfo(response.data)
    })
  }, [``])

  const [ notesModalShow, setNotesModalShow ] = useState({
    open: false,
  })

  // Need to get all frame data in the parent component from database
  const frames = [
    {
        "frame": "Steve Madden"
    },
    {
        "frame": "Victoria Secret"
    },
    {
        "frame": "Emporio Armani"
    },
    {
        "frame": "Skechers"
    },
    {
        "frame": "Tom Ford"
    },
    {
        "frame" : "Gucci"
    },
    {
        "frame": "Ann Taylor"
    },
    {
        "frame": "Nicole Miller"
    },
    {
        "frame": "Marc Jacobs"
    },
    {
        "frame": "Tiffany & Co"
    },
    {
        "frame": "Versace"
    },
    {
        "frame": "Burberry"
    },
    {
        "frame": "Coach"
    },
    {
        "frame": "Michael Kors"
    },
    {
        "frame": "Vera Wang"
    },
    {
        "frame": "Marcolin"
    },
    {
        "frame": "Swarovski"
    },
    {
        "frame": "Cinzia"
    },
    {
        "frame": "Michael Ryen"
    },
    {
        "frame": "Ralph Lauren"
    },
    {
        "frame": "Marie Claire"
    },
    {
        "frame": "Armani Exchange"
    },
    {
        "frame": "Alexander Collection"
    },
    {
        "frame": "Scott Harrisn"
    },
    {
        "frame": "Champion"
    },
    {
        "frame": "Cremieux"
    },
    {
        "frame": "Bebe"
    },
    {
        "frame": "Lacoste"
    },
    {
        "frame": "Converse"
    },
    {
        "frame": "Columbia"
    },
    {
        "frame": "Lucky Brand"
    },
    {
        "frame": "Nike"
    },
    {
        "frame": "Casey Cove"
    },
    {
        "frame": "Crocs"
    },
    {
        "frame": "Puma"
    },
    {
        "frame": "Penguin"
    },
    {
        "frame": "Costa"
    },
    {
        "frame": "Tommy Hilfiger"
    },
    {
        "frame": "Polo"
    },
    {
        "frame": "Harley Davidson"
    },
    {
        "frame": "XXL"
    },
    {
        "frame": "Brooks Brothers"
    },
    {
        "frame": "Oakley"
    },
    {
        "frame": "Ray Ban"
    },
    {
        "frame": "Kenneth Cole"
    },
    {
        "frame": "Kate Spade"
    },
    {
        "frame": "Sperry"
    }
]

  // Need to get order data from database (still deciding if we get it all in one request or two separate requests for (pending/complete) or (glasses/contacts))
  const ptOrders = {
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
      
  return (
    <div>
      <NotesModal 
        show={notesModalShow.open}
        message={notesModalShow.message}
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
                          <PtGlOrderTable frames={frames} ptOrders={ptOrders} patientInfo={patientInfo} setNotesModalShow={setNotesModalShow} />
                        </Col>
                        <Col>
                          <PtClOrderTable ptOrders={ptOrders} patientInfo={patientInfo} setNotesModalShow={setNotesModalShow} />
                        </Col>
                      </Row>
                    </Container>
                </Tab>
                <Tab eventKey="new-order" title='New Order'>
                  <Container id='ptNewOrderTab' style={{ paddingTop: "35px"}}>
                    <Row>
                      <Col>
                        <PtNewGlOrder frames={frames} />
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