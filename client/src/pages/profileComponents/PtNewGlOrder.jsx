import React from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'

export const PtNewGlOrder = () => {
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
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>Frame Brand</Form.Label>
                <Form.Select type="text" placeholder="Frame Brand" name='frameBrand' required>
                <option>Choose...</option>
                {frames.map((f) => (
                  <option key={f.frame} value={f.frame}>{f.frame}</option>
                ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Model Number</Form.Label>
                <Form.Control type="text" placeholder="Model" name='frameModel' required />
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Lens Type</Form.Label>
                <Form.Control type="text" placeholder="Lens Info" name='lensType' required />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Select as={Col} name='location' required>
                  <option>Choose...</option>
                  <option value="In House">In House</option>
                  <option value="Outside Lab">Outside Lab</option>
                </Form.Select>
              </Form.Group>
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
              <Form.Group as={Col}>
                <Form.Label>Lab</Form.Label>
                <Form.Select name='lab' required >
                  <option>Choose...</option>
                  <option value="In House">In House</option>
                  <option value="Walman">Walman</option>
                  <option value="ABB">ABB</option>
                  <option value="Oakley">Oakley</option>
                  <option value="Costa">Costa</option>
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
