import React from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentLists from './studentLists.json';
import { useNavigate, Link } from 'react-router-dom';

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
	let history = useNavigate();
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
							? studentLists.map((student, index) => (
									<tr>
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
			</div>
		</>
	);
};

export default Home;
