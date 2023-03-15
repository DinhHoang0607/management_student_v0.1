import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentLists from './studentLists.json';
import { v4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const today = new Date();

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

	const handleSubmit = (e) => {
		e.preventDefault();

		studentLists.push({
			name: name,
			student_code: studentSCode,
			email: email,
			phone_number: phoneNumber,
			identify_card: identifyCard,
			address: '47569 Superior Way',
			address_live: 'Apt 1145',
			birthday: birthday,
			major: major,
			nation: nation,
			religion: religion,
			gender: gender,
			avatar: avatar,
		});
		history('/');
	};

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
					<Form.Select onChange={(e) => setName(e.target.value)}>
						<option>Tỉnh/ Thành phố</option>
						<option value='1'>One</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Select onChange={(e) => setName(e.target.value)}>
						<option>Quận/ Huyện</option>
						<option value='1'>One</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Select onChange={(e) => setName(e.target.value)}>
						<option>Phường/ Xã</option>
						<option value='1'>One</option>
					</Form.Select>
				</Form.Group> */}
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Label>Ngày sinh</Form.Label>
					<Form.Control
						type='date'
						onChange={(e) => setBirthday(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='text'
						placeholder='Chuyên ngành'
						required
						onChange={(e) => setMajor(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='text'
						placeholder='Dân tộc'
						required
						onChange={(e) => setNation(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
						type='text'
						placeholder='Tôn giáo'
						required
						onChange={(e) => setReligion(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Select onChange={(e) => setGender(e.target.value)}>
						<option>Giới tính</option>
						<option value='Nam'>Nam</option>
						<option value='Nữ'>Nữ</option>
						<option value='Không xác định'>Không xác định</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Label>Ảnh chân dung</Form.Label>
					<Form.Control type='file'></Form.Control>
				</Form.Group>

				<Button onClick={(e) => handleSubmit(e)} type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default AddStudent;
