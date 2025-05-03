import React from 'react'
import { Modal, Row, Col, Table, Container, Tab } from 'react-bootstrap';

const NotesModal = (props) => {
  const order = props.order
  if (props.show === true) {
    if (order.r.notes === undefined) {
      return (
        <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained=modal-title-vcenter'>
            Notes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>No Notes</h6>
        </Modal.Body>
      </Modal>
      )
    }

    const notes = order.r.notes
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained=modal-title-vcenter'>
            Notes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Table>
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {notes.map((notes) => notes === null ? (
                  <tr>
                    <td>No Notes</td>
                  </tr>
                ) : (
                  <tr key={notes.noteId}>
                    <td className='table-data'>{notes.author}</td>
                    <td className='table-data'>{notes.message}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Modal.Body>
      </Modal>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default NotesModal