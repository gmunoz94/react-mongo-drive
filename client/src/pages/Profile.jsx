import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams, Outlet } from 'react-router-dom';
import HomeNavbar from './universalComponents/HomeNavbar';

function Profile() {
  const params = useParams();

  return (
    <div>
      <HomeNavbar />
      <Container fluid >
        <Row>
          <Col lg={12} xl={4} style={{ padding: "35px" }}>
            Profile Page {params.profileId}
          </Col>
        </Row>
      </Container>
      <Outlet />
    </div>
  )
}


export default Profile;