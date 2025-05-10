import React from 'react';
import { Container, Form, Row, Col, Button, Table, Card, Tabs, Tab } from 'react-bootstrap';

const SearchPatient = () =>{
	
	const searchData = [
		{
			patient_id: "1",
			lastName: "Munoz",
			firstName: "Gerardo",
			dateOfBirth: "01/01/1111",
			phoneNumber: "6549873212"
		},
		{
			patient_id: "2",
      firstName: "George",
      lastName: "Washington",
			dateOfBirth: "02/02/2222",
			phoneNumber: "7894561232"
		},
		{
			patient_id: "3",
      firstName: "Thomas",
      lastName: "Edison",
			dateOfBirth: "03/03/3333",
			phoneNumber: "3216549878"
		},
		{
			patient_id: "4",
      firstName: "Thomas",
      lastName: "Jefferson",
			dateOfBirth: "04/04/4444",
			phoneNumber: "1234567898"
		},
		{
			patient_id: "5",
      firstName: "James",
      lastName: "Madison",
			dateOfBirth: "04/04/4444",
			phoneNumber: "1234567898"
		}
	]

	return(
		<>
			<Container fluid className='mt-3'>
				<Card>
					<Card.Header className='text-center fs-4'>Search Patients</Card.Header>
					<Card.Body>
						<Row className='justify-content-center'>
							<Col>
								<Tabs justify defaultActiveKey="lastFirst">
									<Tab eventKey="lastFirst" title="Name">
										<Form>
											<Row className='p-3'>
												<Form.Group as={Col} controlId="formLastName">
													<Form.Label>Last Name</Form.Label>
													<Form.Control type='text' placeholder='Last Name' name='lastName' />
												</Form.Group>
												<Form.Group as={Col} controlId="formFirstName">
													<Form.Label>First Name</Form.Label>
													<Form.Control type='text' placeholder='First Name' name='firstName' />
												</Form.Group>
											</Row>
											<Row className='p-3'>
												<Button type='submit'>Search</Button>
											</Row>
										</Form>
									</Tab>
									<Tab eventKey="dateOfBirth" title="Date of Birth">
										<Form>
											<Row className='p-3 justify-content-center'>
												<Form.Group className='col-6' controlId="formDateOfBirth">
													<Form.Label>Date Of Birth</Form.Label>
													<Form.Control type='date' name='dateOfBirth'/>
												</Form.Group>
											</Row>
											<Row className='p-3'>
												<Button type='submit'>Search</Button>
											</Row>
										</Form>
									</Tab>
									<Tab eventKey="phoneNumber" title="Phone Number">
										<Form>
											<Row className='p-3 justify-content-center'>
												<Form.Group className='col-6' controlId="formPhoneNumber">
													<Form.Label>Phone Number</Form.Label>
													<Form.Control type='text' name='phoneNumber' placeholder='Phone Number' />
												</Form.Group>
											</Row>
											<Row className='p-3'>
												<Button type='submit'>Search</Button>
											</Row>
										</Form>
									</Tab>
								</Tabs>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col>
								<div className='table-responsive'>
									<Table className='table-striped table-hover'>
										<thead>
											<tr>
												<th scope='col'>Last Name</th>
												<th scope='col'>First Name</th>
												<th scope='col'>Date of Birth</th>
												<th scope='col'>Phone Number</th>
											</tr>
										</thead>
										<tbody>
											{searchData.map((patient) => patient === null ? (
												<tr>
													<td colSpan={4}>No Patients</td>
												</tr>
											) : (
												<tr key={patient.patient_id}>
													<td>{patient.lastName}</td>
													<td>{patient.firstName}</td>
													<td>{patient.dateOfBirth}</td>
													<td>{patient.phoneNumber}</td>
													<td><Button value={patient.patient_id} href={`/patients/${patient.patient_id}`} >Select</Button></td>
												</tr>
											))}
										</tbody>
									</Table>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</>
	)
}

export default SearchPatient;