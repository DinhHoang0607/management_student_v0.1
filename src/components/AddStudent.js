import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentLists from './studentLists.json';
import { v4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';

const AddStudent = () => {
	const [name, setName] = useState('');
	const [studentSCode, setStudentCode] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [identifyCard, setIdentifyCard] = useState('');
	const [address, setAddress] = useState('');
	const [addressLive, setAddressLive] = useState('');
	const [birthday, setBirthday] = useState('');
	const [major, setMajor] = useState('');
	const [nation, setNation] = useState('');
	const [gender, setGender] = useState('');
	const [avatar, setAvatar] = useState('');
	const [religion, setReligion] = useState('');

	let history = useNavigate();

	const handleSubmit = () => {};

	return (
		<div>
			<Form className='d-grid gap-2' style={{ margin: '15rem' }}>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='text'
						placeholder='Ho va ten'
						required
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formS'>
					<Form.Control
						type='text'
						placeholder='Ma sinh vien'
						required
						onChange={(e) => setStudentCode(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='email'
						placeholder='Email'
						required
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='tel'
						placeholder='So dien thoai'
						pattern='[0][0-9]{9}'
						required
						onChange={(e) => setPhoneNumber(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='number'
						placeholder='So cmnd/cccd'
						required
						onChange={(e) => setIdentifyCard(e.target.value)}
					></Form.Control>
				</Form.Group>
				{/* <Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='email'
						placeholder='Email'
						required
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group> */}

				<Button ocClick={(e) => handleSubmit(e)} type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default AddStudent;
