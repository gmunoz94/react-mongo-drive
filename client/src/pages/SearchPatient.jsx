import React from 'react';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import HomeNavbar from './universalComponents/HomeNavbar';

const SearchPatient = () =>{
	const rows = [
		{
			patient_id: "1",
			lastName: "munoz",
			firstName: "gerardo",
			dateOfBirth: "01/01/1111",
			phoneNumber: "6549873212"
		},
		{
			patient_id: "2",
			lastName: "munoz",
			firstName: "julie",
			dateOfBirth: "02/02/2222",
			phoneNumber: "7894561232"
		},
		{
			patient_id: "3",
			lastName: "munoz",
			firstName: "analisa",
			dateOfBirth: "03/03/3333",
			phoneNumber: "3216549878"
		},
		{
			patient_id: "4",
			lastName: "munoz",
			firstName: "marissa",
			dateOfBirth: "04/04/4444",
			phoneNumber: "1234567898"
		}
	]

	return(
		<>
			<HomeNavbar />
			<Container fluid>
				<Row className='justify-content-center' style={{ paddingTop: "35px"}}>
					<Col lg={8}>
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
							</Row>
							<Row className='p-3'>
								<Button type='submit'>Search</Button>
							</Row>
						</Form>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col lg={8}>
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
									{rows.map((r) => r === null ? (
										<tr>
											<td colSpan={4}>No Patients</td>
										</tr>
									) : (
										<tr key={r.patient_id}>
											<td>{r.lastName}</td>
											<td>{r.firstName}</td>
											<td>{r.dateOfBirth}</td>
											<td>{r.phoneNumber}</td>
											<td><Button value={r.patient_id} >Select</Button></td>
										</tr>
									))}
								</tbody>
							</Table>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default SearchPatient;