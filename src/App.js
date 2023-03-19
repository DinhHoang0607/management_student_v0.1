import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EditStudent from './components/EditStudent';

function App() {
	const [token, setToken] = useState('');
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getToken();
	});

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data: response } = await axios.post(
					'http://localhost:9090/dbProcedure/get/DFAA77D5132B47F7BF53E7389CF4E61C',
					{
						sQUEQUANTINH: 1,
						sNOIOTINH: 0,
						pageNumber: 0,
						limitNumber: 10,
						text: '',
					},
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					},
				);
				setData(response.data.content.data);
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};
		fetchData();
	}, [token]);
	// console.log(token, data);
	const getToken = async () => {
		try {
			const { data: response } = await axios.post(
				'http://localhost:9090/oauth/token',
				{
					username: 'trungkb',
					password: '123456',
					grant_type: 'password',
				},
				{
					auth: {
						username: 'a08',
						password: 'secret',
					},
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				},
			);
			setToken(response.access_token);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Home data={data} loading={loading} token={token} />}
					/>
					<Route path='/create' element={<AddStudent token={token} />} />
					<Route path='/edit/:id' element={<EditStudent token={token} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
