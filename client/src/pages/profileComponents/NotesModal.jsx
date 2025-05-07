import React, { useState } from 'react'
import { Modal, Row, Col, Table, Container, Tab, Button, Form } from 'react-bootstrap';

const NotesModal = ({show, message, onHide}) => {

  const [ addNote, setAddNote] = useState({
    open:"none"
  })

  const handleAddNote = () => {
    // Need to make database connection to add note to an order
    setAddNote({ open: "hidden" })
    alert("Note Added")
  }
  
  if (show === true) {
    const notes = message.order.notes
    if (notes === undefined) {
      return (
        <Modal
        show={show}
        onHide={onHide}
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
          {addNote.open === "none" ? (
              <Form style={{ display: "none"}} >
                <Form.Group>
                  <Form.Control></Form.Control>
                </Form.Group>
              </Form>
              ) : (
              <Form>
                <Form.Group>
                  <Form.Control onSubmit={handleAddNote}></Form.Control>
                </Form.Group>
              </Form>
            )
            }
        </Modal.Body>
        <Modal.Footer>
          { addNote.open === "hidden" ? (
            <Button onClick={() => setAddNote({ open: true })}>Add Note</Button>
          ) : (
            <Button onClick={handleAddNote}>Submit</Button>
          )
          }
        </Modal.Footer>
      </Modal>
      )
    }

    return (
      <Modal
        show={show}
        onHide={onHide}
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
                {notes.map((notes) =>  (
                  <tr key={notes.noteId}>
                    <td className='table-data'>{notes.author}</td>
                    <td className='table-data'>{notes.message}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {addNote.open === "hidden" ? (
              <Form style={{ display: "none"}} >
                <Form.Group>
                  <Form.Control></Form.Control>
                </Form.Group>
              </Form>
              ) : (
              <Form>
                <Form.Group>
                  <Form.Control onSubmit={handleAddNote}></Form.Control>
                </Form.Group>
              </Form>
            )
            }
          </Container>
        </Modal.Body>
        <Modal.Footer>
          { addNote.open === "hidden" ? (
            <Button onClick={() => setAddNote({ open: true })}>Add Note</Button>
          ) : (
            <Button onClick={handleAddNote}>Submit</Button>
          )
          }
        </Modal.Footer>
      </Modal>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default NotesModal