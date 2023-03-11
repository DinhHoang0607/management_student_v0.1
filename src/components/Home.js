import React from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentLists from './studentLists.json';

const Home = () => {
	// console.log(studentLists[1].name);
	return (
		<>
			<div style={{ margin: '10px' }}>
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
                                            <Button>add</Button>
                                            <Button>edit</Button>
                                            <Button>delete</Button>
                                        </td>
										<td>{student.name}</td>
									</tr>
							  ))
							: {}}
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default Home;
