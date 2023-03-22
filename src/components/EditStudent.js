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
	const [gender, setGender] = useState(0);
	const [avatar, setAvatar] = useState('');
	const [religion, setReligion] = useState('');
	const [student, setStudent] = useState(null);
	// const [loading, setLoading] = useState(true);

	const { id } = useParams();
	// console.log(params.id);

	let history = useNavigate();
	// console.log(token);

	useEffect(() => {
		const getById = async () => {
			// setLoading(true);
			try {
				return await axios
					.post(
						'http://localhost:9090/dbProcedure/get/F3C47AE086BD4D81A92AD852C360169C',
						{
							STUDENTID: id,
						},
						{
							headers: {
								'Content-Type': 'application/json',
								Authorization: `Bearer ${token}`,
							},
						},
					)
					.then((res) => {
						console.log(res.data.data.content.data[0].ID);
						setStudent(res.data.data.content.data[0]);

						// alert('success');
						// history('/');
					});
				// response();
				// setStudent(response.data.content.data[0]);
				// console.log(response.data.content.data[0]);
			} catch (error) {
				console.error(error.message);
			}
			//   return response
		};
		getById();
		// setLoading(false);
	}, [token]);
	console.log(student);

	const updateStudent = async (e) => {
		e.preventDefault();
		try {
			await axios
				.put(
					`http://localhost:9090/dbProcedure/update/5A0D044DEA7C4399BB26C47972297594/${id}`,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					},
					{
						sMSSV: '123456xxx',
						sEMAIL: 'doladola@gmail.com',
						sPHONE: '0947017756',
						sCMND: '174622999',
						sQUEQUANTINH: 0,
						sQUEQUANHUYEN: 0,
						sQUEQUANXA: 0,
						sQUEQUANDIACHI: 'Thanh Hoá',
						sNOIOTINH: 0,
						sNOIOHUYEN: 0,
						sNOIOXA: 0,
						sNOIODIACHI: 'Hà Nội',
						sNGAYSINH: '1996-11-11 00:00:00',
						sCHUYENNGANH: 'Dev',
						sDANTOC: 'Kinh',
						sTONGIAO: 'Không',
						sGIOITINH: 1,
					},
				)
				.then((res) => {
					console.log(res.data);
					alert('edit success');
					history('/');
				});
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleSubmit = async () => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};
		let data = {
			sMSSV: studentSCode,
			sEMAIL: email,
			sPHONE: phoneNumber,
			sCMND: identifyCard,
			sQUEQUANTINH: 0,
			sQUEQUANHUYEN: 0,
			sQUEQUANXA: 0,
			sQUEQUANDIACHI: 'Thanh Hoá',
			sNOIOTINH: 0,
			sNOIOHUYEN: 0,
			sNOIOXA: 0,
			sNOIODIACHI: 'Hà Nội',
			sNGAYSINH: '1996-11-11 00:00:00',
			sCHUYENNGANH: major,
			sDANTOC: nation,
			sTONGIAO: religion,
			sGIOITINH: 1,
			sName: name,
		};
		await axios({
			// thu vien
			method: 'PUT', // phuong thuc su dung
			url: `http://localhost:9090/dbProcedure/update/5A0D044DEA7C4399BB26C47972297594/${id}`, //goi lai dia chi
			headers: headers, // truong headers , bao gom token
			data: JSON.stringify(data), // gia tri truyen vao
		})
			.then((res) => {
				console.log(res.data);
				alert('add success');
			})
			.catch((error) => {
				console.error(error.message);
			});
		history('/');
	};
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	await axios({  // thu vien
	//   method: "PUT", // phuong thuc su dung
	//   url: url, //goi lai dia chi
	//   headers: headers, // truong headers , bao gom token
	//   data: JSON.stringify(data)  // gia tri truyen vao
	// })
	// 	try {
	// 		await axios
	// 			.put(
	// 				`http://localhost:9090/dbProcedure/update/5A0D044DEA7C4399BB26C47972297594/${id}`,
	// 				{
	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 						Authorization: `Bearer ${token}`,
	// 					},
	// 				},
	// 				{
	// 					sMSSV: '123456xxx',
	// 					sEMAIL: 'doladola@gmail.com',
	// 					sPHONE: '0947017756',
	// 					sCMND: '174622999',
	// 					sQUEQUANTINH: 0,
	// 					sQUEQUANHUYEN: 0,
	// 					sQUEQUANXA: 0,
	// 					sQUEQUANDIACHI: 'Thanh Hoá',
	// 					sNOIOTINH: 0,
	// 					sNOIOHUYEN: 0,
	// 					sNOIOXA: 0,
	// 					sNOIODIACHI: 'Hà Nội',
	// 					sNGAYSINH: '1996-11-11 00:00:00',
	// 					sCHUYENNGANH: 'Dev',
	// 					sDANTOC: 'Kinh',
	// 					sTONGIAO: 'Không',
	// 					sGIOITINH: 1,
	// 				},
	// 			)
	// 			.then((res) => {
	// 				console.log(res.data);
	// 				alert('edit success');
	// 				history('/');
	// 			});
	// 	} catch (error) {
	// 		console.error(error.message);
	// 	}
	// };
	return (
		<>
			{/* {loading && <div>loading...</div>} */}
			{/* {!loading && ( */}
			<div>
				{student && (
					<Form className='d-grid gap-2' style={{ margin: '15rem' }}>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Control
								// value={student.FULL_NAME}
								defaultValue={student.FULL_NAME}
								type='text'
								placeholder='Ho va ten'
								// required
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formS'>
							<Form.Control
								defaultValue={student.MSSV}
								type='text'
								placeholder='Ma sinh vien'
								//required
								onChange={(e) => setStudentCode(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Control
								type='email'
								defaultValue={student.EMAIL}
								placeholder='Email'
								//required
								onChange={(e) => setEmail(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Control
								type='tel'
								defaultValue={student.PHONE}
								placeholder='So dien thoai'
								// pattern='[0][0-9]{9}'
								//required
								onChange={(e) => setPhoneNumber(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Control
								type='number'
								defaultValue={student.CMND}
								placeholder='So cmnd/cccd'
								//required
								onChange={(e) => setIdentifyCard(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Label>Ngày sinh</Form.Label>
							<Form.Control
								defaultValue={student.NGAY_SINH}
								type='date'
								onChange={(e) => setBirthday(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Control
								type='text'
								defaultValue={student.CHUEN_NGANH}
								placeholder='Chuyên ngành'
								//required
								onChange={(e) => setMajor(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Control
								type='text'
								defaultValue={student.DAN_TOC}
								placeholder='Dân tộc'
								//required
								onChange={(e) => setNation(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Control
								type='text'
								defaultValue={student.TON_GIAO}
								placeholder='Tôn giáo'
								//required
								onChange={(e) => setReligion(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formName'>
							<Form.Select
								defaultValue={student.GIOI_TINH}
								onChange={(e) => setGender(e.target.value)}
							>
								<option>Giới tính</option>
								<option value={1}>Nam</option>
								<option value={2}>Nữ</option>
								<option value={3}>Không xác định</option>
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
			{/* )} */}
		</>
	);
};

export default EditStudent;
