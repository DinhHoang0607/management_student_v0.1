import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const today = new Date();

const EditStudent = ({ token }) => {
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
	const [student, setStudent] = useState(null);
	const [loading, setLoading] = useState(true);

	const params = useParams();
	console.log(params.id);

	let history = useNavigate();
	console.log(token);

	useEffect(() => {
		const getById = async () => {
			setLoading(true);
			try {
				const { data: response } = await axios.post(
					'http://localhost:9090/dbProcedure/get/F3C47AE086BD4D81A92AD852C360169C',
					{
						STUDENTID: params.id,
					},
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					},
				);
				// response();
				setStudent(response.data.content.data[0]);
				// console.log(response.data.content.data[0]);
			} catch (error) {
				console.error(error.message);
			}
			//   return response
		};
		getById();
		setLoading(false);
	}, []);
	console.log(student);

	// handleAdd(response);
	// history('/');
	const handleSubmit = () => {};
	return (
		<div>
			{loading && <div>loading</div>}
			{!loading && (
				<div>
					{student && student.length > 0 && (
						<Form className='d-grid gap-2' style={{ margin: '15rem' }}>
							<Form.Group className='mb-3' controlId='formName'>
								<Form.Control
									value={student.FULLNAME}
									type='text'
									placeholder='Ho va ten'
									// required
									onChange={(e) => setName(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formS'>
								<Form.Control
									type='text'
									placeholder='Ma sinh vien'
									//required
									onChange={(e) => setStudentCode(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formName'>
								<Form.Control
									type='email'
									placeholder='Email'
									//required
									onChange={(e) => setEmail(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formName'>
								<Form.Control
									type='tel'
									placeholder='So dien thoai'
									pattern='[0][0-9]{9}'
									//required
									onChange={(e) => setPhoneNumber(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formName'>
								<Form.Control
									type='number'
									placeholder='So cmnd/cccd'
									//required
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
									//required
									onChange={(e) => setMajor(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formName'>
								<Form.Control
									type='text'
									placeholder='Dân tộc'
									//required
									onChange={(e) => setNation(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formName'>
								<Form.Control
									type='text'
									placeholder='Tôn giáo'
									//required
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
					)}
				</div>
			)}
		</div>
	);
};

export default EditStudent;
