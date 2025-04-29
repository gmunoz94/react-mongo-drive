import React from 'react'
import HomeNavbar from './universalComponents/HomeNavbar'
import SearchPatient from './patientComponents/SearchPatient'
import NewPatient from './patientComponents/NewPatient'
import { Row, Col } from 'react-bootstrap';

const Patients = () => {
  return (
    <>
      <HomeNavbar />
      <Row className='justify-content-center'>
        <Col lg={5}>
          <SearchPatient />
        </Col>
        <Col lg={5}>
          <NewPatient />
        </Col>
      </Row>
    </>
  )
}

export default Patients