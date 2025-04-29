import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import '../../styles/custom.css'
import FCalendar from './FullCalendar';

function Calendar() {

  return (
    <Card className='home-card'>
      <Card.Header className='text-center fs-4' >Today's Schedule</Card.Header>
      <Card.Body >
        <Container className='schedule-container'>
          <FCalendar />
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Calendar