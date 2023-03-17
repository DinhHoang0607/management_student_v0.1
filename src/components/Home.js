import React, { useState, useEffect } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentLists from './studentLists.json';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const arr = [
	'name',
	'student_code',
	'email',
	'phone_number',
	'identify_card',
	'address',
	'address_live',
	'birthday',
	'major',
	'nation',
	'religion',
	'gender',
	'avatar',
];
const Home = () => {
	const [userList, setUserList] = useState([]);
	const [page, setPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalCount, setTotalCount] = useState(0);
	const [search, setSearch] = useState('');
	const [data, setData] = useState(null);
	let history = useNavigate();

	const getUserList = async (pg = page, pgSize = pageSize) => {
		try {
			const params = {
				page: pg,
				pageSize: pgSize,
			};
		} catch (err) {
			console.log('Error');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	console.log(data);
	const fetchData = async () => {
		try {
			const { data: response } = await axios.get(
				'http://localhost:9090/oauth/token',
			);
			setData(response);
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleDelete = (student_code) => {
		var index = studentLists
			.map((e) => {
				return e.student_code;
			})
			.indexOf(student_code);
		studentLists.splice(index, 1);
		console.log(studentLists);
		history('/');
	};
	return (
		<>
			<div style={{ margin: '10px' }}>
				<Form.Control
					type='text'
					placeholder='Search'
					required
					onChange={(e) => setSearch(e.target.value)}
				></Form.Control>
				<div>
					<Link to={'/create'}>
						<Button>Create</Button>
					</Link>
				</div>
				<Table striped bordered hover size='sm'>
					<thead className='bg-warning'>
						<tr className='text-center'>
							<th scope='col'>STT</th>
							<th scope='col'>Xử lý</th>
							<th scope='col'>Họ tên</th>
							<th scope='col'>Mã SV</th>
							<th scope='col'>Email</th>
							<th scope='col'>SĐT</th>
							<th scope='col'>Số CCCD</th>
							<th scope='col'>Quê quán</th>
							<th scope='col'>Nơi TT</th>
							<th scope='col'>Ngày sinh</th>
							<th scope='col'>Chuyên ngành</th>
							<th scope='col'>Dân tộc</th>
							<th scope='col'>Tôn giáo</th>
							<th scope='col'>Giới tính</th>
							<th scope='col'>Ảnh chân dung</th>
						</tr>
					</thead>
					<tbody>
						{studentLists && studentLists.length > 0
							? studentLists
									.filter((item) => {
										return search.toLowerCase() === ''
											? item
											: item.name.toLowerCase().includes(search);
									})
									.map((student, index) => (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>
												<Link to={'/add'}>
													<Button>add</Button>
												</Link>
												<Button>edit</Button>
												<Button
													onClick={() => {
														handleDelete(student.student_code);
													}}
												>
													delete
												</Button>
											</td>
											{arr.map((e) => (
												<td>{student[e]}</td>
											))}
										</tr>
									))
							: 'No data'}
					</tbody>
				</Table>
				<div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
					<span className='text-xs xs:text-sm text-gray-900'>
						{/* Showing {totalCount === 0 ? 0 : offset + 1} to{' '}
						{offset + pageSize > totalCount ? totalCount : offset + pageSize} of{' '}
						{totalCount} Records */}
					</span>
					<div className='inline-flex mt-2 mt-0'>
						<button
							className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l'
							// onClick={prevPage}
						>
							Prev
						</button>
						<button
							className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r'
							// onClick={nextPage}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
