import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Table, Card, Tabs, Tab } from 'react-bootstrap';
import Axios from 'axios';
import moment from 'moment';

const SearchPatient = () =>{

	const axios = Axios.create({
		baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000"
	})

	const [ searchData, setSearchData ] = useState([]);

	const [ patientName, setPatientName] = useState()
	const [ patientDOB, setPatientDOB] = useState()
	const [ patientPhone, setPatientPhone ] = useState()

	const handleNameChange = (event) => {
		const { name, value } = event.target;
		setPatientName({ ...patientName, [name]: value });

		// console.log(patientName);
	};
	
	const handleDOBChange = (event) => {
		const { name, value } = event.target;
		setPatientDOB({ ...patientDOB, [name]: value });
		// console.log(patientDOB);
	};
	
	const handlePhoneChange = (event) => {
		const { name, value } = event.target;
		setPatientPhone({ ...patientPhone, [name]: value });
		// console.log(patientPhone);
	};

	const searchByName = async (event) => {
		event.preventDefault();

		axios.get(`/api/patients/searchName/${patientName.lastName}/${patientName.firstName}`)
		.then((response) => {
			const formattedDate = response.data.map((patients) => {
				console.log(patients)
				patients.dateOfBirth = moment(patients.dateOfBirth).add(1, "days").format("L");
				console.log(patients)
				return patients;
			})
			setSearchData(formattedDate);
		})
	};
	
	const searchByDOB = async (event) => {
		event.preventDefault();
		
		axios.get(`/api/patients/searchDOB/${patientDOB.dateOfBirth}`)		
		.then((response) => {
			const formattedDate = response.data.map((patients) => {
				console.log(patients)
				patients.dateOfBirth = moment(patients.dateOfBirth).add(1, "days").format("L");
				console.log(patients)
				return patients;
			})
			setSearchData(formattedDate);

		})
	};
	
	const searchByPhone = async (event) => {
		event.preventDefault();
		
		axios.get(`/api/patients/searchPhone/${patientPhone.phoneNumber}`)
		.then((response) => {
			const formattedDate = response.data.map((patients) => {
				console.log(patients)
				patients.dateOfBirth = moment(patients.dateOfBirth).add(1, "days").format("L");
				console.log(patients)
				return patients;
			})
			setSearchData(formattedDate);
		})
	};

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
													<Form.Control type='text' placeholder='Last Name' name='lastName' onChange={handleNameChange} />
												</Form.Group>
												<Form.Group as={Col} controlId="formFirstName">
													<Form.Label>First Name</Form.Label>
													<Form.Control type='text' placeholder='First Name' name='firstName' onChange={handleNameChange} />
												</Form.Group>
											</Row>
											<Row className='p-3'>
												<Button type='submit' onClick={searchByName}>Search</Button>
											</Row>
										</Form>
									</Tab>
									<Tab eventKey="dateOfBirth" title="Date of Birth">
										<Form>
											<Row className='p-3 justify-content-center'>
												<Form.Group className='col-6' controlId="formDateOfBirth">
													<Form.Label>Date Of Birth</Form.Label>
													<Form.Control type='date' name='dateOfBirth' onChange={handleDOBChange} />
												</Form.Group>
											</Row>
											<Row className='p-3'>
												<Button type='submit' onClick={searchByDOB}>Search</Button>
											</Row>
										</Form>
									</Tab>
									<Tab eventKey="phoneNumber" title="Phone Number">
										<Form>
											<Row className='p-3 justify-content-center'>
												<Form.Group className='col-6' controlId="formPhoneNumber">
													<Form.Label>Phone Number</Form.Label>
													<Form.Control type='text' name='phoneNumber' placeholder='Phone Number' onChange={handlePhoneChange} />
												</Form.Group>
											</Row>
											<Row className='p-3'>
												<Button type='submit' onClick={searchByPhone}>Search</Button>
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
											{searchData.map((patient) => patient === undefined ? (
												<tr>
													<td colSpan={4}>No Patients</td>
												</tr>
											) : (
												<tr key={patient._id}>
													<td>{patient.lastName}</td>
													<td>{patient.firstName}</td>
													<td>{patient.dateOfBirth}</td>
													<td>{patient.phoneNumber}</td>
													<td><Button value={patient.patient_id} href={`/patients/${patient._id}`} >Select</Button></td>
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