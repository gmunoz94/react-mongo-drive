import React from 'react';
import { Container, Form, Row, Col, Button, Table, Card } from 'react-bootstrap';

const SearchPatient = () =>{
	const searchData = [
		{
			patient_id: "1",
			lastName: "munoz",
			firstName: "gerardo",
			dateOfBirth: "01/01/1111",
			phoneNumber: "6549873212"
		},
		{
			patient_id: "2",
			lastName: "Vicencio",
			firstName: "Jaime",
			dateOfBirth: "02/02/2222",
			phoneNumber: "7894561232"
		},
		{
			patient_id: "3",
			lastName: "Baker",
			firstName: "Bailey",
			dateOfBirth: "03/03/3333",
			phoneNumber: "3216549878"
		},
		{
			patient_id: "4",
			lastName: "Trevino",
			firstName: "Megan",
			dateOfBirth: "04/04/4444",
			phoneNumber: "1234567898"
		},
		{
			patient_id: "5",
			lastName: "Merchant",
			firstName: "Allison",
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
										<Form.Group as={Col} controlId="formDateOfBirth">
											<Form.Label>Date Of Birth</Form.Label>
											<Form.Control type='date' name='dateOfBirth'/>
										</Form.Group>
										<Form.Group as={Col} controlId="formPhoneNumber">
											<Form.Label>Phone Number</Form.Label>
											<Form.Control type='text' name='phoneNumber' placeholder='Phone Number' />
										</Form.Group>
									</Row>
									<Row className='p-3'>
										<Button type='submit'>Search</Button>
									</Row>
								</Form>
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