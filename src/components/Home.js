import React, { useState, useEffect } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentLists from './studentLists.json';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { RiDeleteBin7Line, RiEdit2Line, RiSearchLine } from 'react-icons/ri';

const arr = [
	'FULLNAME',
	'MSSV',
	'EMAIL',
	'PHONE',
	'CMND',
	'QQDIACHI',
	'QQTINH',
	'NGAYSINH',
	'CHUYENNGANH',
	'DANTOC',
	'TONGIAO',
	'GIOITINH',
	'avatar',
];
const Home = ({ token }) => {
	const [userList, setUserList] = useState([]);
	const [page, setPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalCount, setTotalCount] = useState(10);
	const [search, setSearch] = useState('');
	// const [search1, setSearch1] = useState('');
	const [data, setData] = useState(null);
	// const [token, setToken] = useState('');
	const [loading, setLoading] = useState(true);
	let history = useNavigate();
	console.log(data, totalCount, page);

	useEffect(() => {
		fetchData();
	}, [token]);

	const fetchData = async (sr = search, pg = page, pgSize = pageSize) => {
		setLoading(true);
		try {
			const { data: response } = await axios.post(
				'http://localhost:9090/dbProcedure/get/DFAA77D5132B47F7BF53E7389CF4E61C',
				{
					sQUEQUANTINH: 0,
					sNOIOTINH: 0,
					pageNumber: pg - 1,
					limitNumber: pgSize,
					text: sr,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				},
			);
			setData(response.data.content.data);
			// setTotalCount(data.length);
		} catch (error) {
			console.error(error.message);
		}
		setLoading(false);
	};

	const prevPage = () => {
		const pg = page === 1 ? 1 : page - 1;
		fetchData(pg);
		setPage(pg);
	};

	const nextPage = () => {
		const pg = page < Math.ceil(totalCount / pageSize) ? page + 1 : page;
		fetchData(pg);
		setPage(pg);
	};
	const handleSearch = () => {
		fetchData(search);
	};
	const handleDelete = (id) => {
		var index = data
			.map((e) => {
				return e.id;
			})
			.indexOf(id);
		data.splice(index, 1);
		console.log(data);
		history('/');
		// const deleteData = async () => {
		// 	try {
		// 		await axios.delete(
		// 			`http://localhost:9090/dbProcedure/delete/5CE842BF562A425D9491E77032E85DA6/${id}`,
		// 			{
		// 				headers: {
		// 					'Content-Type': 'application/json',
		// 					Authorization: `Bearer ${token}`,
		// 				},
		// 			},
		// 		);
		// 		// setData(response.data.content.data);
		// 	} catch (error) {
		// 		console.error(error.message);
		// 	}
		// };
		// deleteData();
	};

	return (
		<>
			{loading && <div>Loading...</div>}
			{!loading && (
				<div style={{ margin: '10px' }}>
					<div className='d-inline-flex w-100 p-2'>
						<Form.Control
							style={{ paddingRight: '5px' }}
							type='text'
							placeholder='Search'
							onChange={(e) => setSearch(e.target.value)}
						></Form.Control>
						<Button
							variant='warning'
							style={{ marginLeft: '10px', width: '200px' }}
							onClick={handleSearch}
						>
							<RiSearchLine />
						</Button>
					</div>
					<div className='d-flex justify-content-center align-items-center p-2'>
						<Link to={'/create'}>
							<Button variant='success' style={{ width: '200px' }}>
								<MdPersonAddAlt1 />
							</Button>
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
							{data &&
								data.length > 0 &&
								data.map((student, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>
											<Link to={`/edit/${student.ID}`}>
												<Button variant='info'>
													<RiEdit2Line />
												</Button>
											</Link>
											<Button
												variant='danger'
												onClick={() => {
													handleDelete(student.ID);
												}}
											>
												<RiDeleteBin7Line />
											</Button>
										</td>
										{arr.map((e) => (
											<td>{student[e]}</td>
										))}
									</tr>
								))}
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
								onClick={prevPage}
							>
								Prev
							</button>
							<button
								className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r'
								onClick={nextPage}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Home;
