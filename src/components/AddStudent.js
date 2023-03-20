import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';

const today = new Date();

const AddStudent = ({ token }) => {
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

	const [student, setStudent] = useState({});
	let history = useNavigate();
	console.log(token);

	const handleSubmit = async (e) => {
		e.preventDefault();
		addStudent();
		// themMoi({
		// 	STUDENTNAME: name,
		// 	MSSV: studentSCode,
		// 	EMAIL: email,
		// 	PHONE: phoneNumber,
		// 	CMND: identifyCard,
		// 	QUEQUANTINH: 0,
		// 	QUEQUANHUYEN: 0,
		// 	QUEQUANXA: 0,
		// 	QUEQUANDIACHI: 'Thanh Hoá',
		// 	NOIOTINH: 10,
		// 	NOIOHUYEN: 0,
		// 	NOIOXA: 0,
		// 	NOIODIACHI: 'Hà Nội',
		// 	NGAYSINH: birthday,
		// 	CHUYENNGANH: major,
		// 	DANTOC: nation,
		// 	TONGIAO: religion,
		// 	GIOITINH: 1,
		// },);
		// updateStudent();
		// try {
		// 	await axios.post(
		// 		'http://localhost:9090/dbProcedure/create/7B52F3BADA004506B403C5F8793D557D',
		// 		{
		// 			STUDENTNAME: name,
		// 			MSSV: studentSCode,
		// 			EMAIL: email,
		// 			PHONE: phoneNumber,
		// 			CMND: identifyCard,
		// 			QUEQUANTINH: 1,
		// 			QUEQUANHUYEN: 0,
		// 			QUEQUANXA: 0,
		// 			QUEQUANDIACHI: 'Thanh Hoá',
		// 			NOIOTINH: 10,
		// 			NOIOHUYEN: 0,
		// 			NOIOXA: 0,
		// 			NOIODIACHI: 'Hà Nội',
		// 			NGAYSINH: birthday,
		// 			CHUYENNGANH: major,
		// 			DANTOC: nation,
		// 			TONGIAO: religion,
		// 			GIOITINH: 1,
		// 		},
		// 		{
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 				Authorization: `Bearer ${token}`,
		// 			},
		// 		},
		// 	);
		// 	// console.log(token);
		// } catch (error) {
		// 	console.error(error.message);
		// }

		// handleAdd(response);
		// history('/');
	};
	const themMoi = async (data) => {
		const headers = {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json', // kieu chuyen xuong , kieu json , mac dich
		};

		const url =
			'http://localhost:9090/dbProcedure/create/7B52F3BADA004506B403C5F8793D557D'; // dia chi cua api
		await axios({
			method: 'POST', // phuong thuc su dung, GET < POST < PUT < DELETE
			url: url, // dia chi cua api
			headers: headers,
			data: JSON.stringify(data), //gia tri truyen vao dang body
		})
			.then()
			.catch(function (error) {
				console.log('lỗi k gọi được api do kết nối');
			});
		// if (res.message == 'OK') {
		// 	// THÀNH CÔNG
		// 	const tempData = res.data;
		// } else {
		// 	console.log('lỗi do api trả về, do code của be');
		// }
	};

	const addStudent = async () => {
		try {
			await axios.post(
				'http://localhost:9090/dbProcedure/create/7B52F3BADA004506B403C5F8793D557D',
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				},
				{
					data: JSON.stringify({
						STUDENTNAME: name,
						MSSV: studentSCode,
						EMAIL: email,
						PHONE: phoneNumber,
						CMND: identifyCard,
						QUEQUANTINH: 0,
						QUEQUANHUYEN: 0,
						QUEQUANXA: 0,
						QUEQUANDIACHI: 'Thanh Hoá',
						NOIOTINH: 10,
						NOIOHUYEN: 0,
						NOIOXA: 0,
						NOIODIACHI: 'Hà Nội',
						NGAYSINH: birthday,
						CHUYENNGANH: major,
						DANTOC: nation,
						TONGIAO: religion,
						GIOITINH: 1,
					}),
				},
			);
			// console.log(token);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div>
			<Form className='d-grid gap-2' style={{ margin: '15rem' }}>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Control
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
		</div>
	);
};

export default AddStudent;
