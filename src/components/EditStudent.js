import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditStudent = () => {
	const [name, setName] = useState('');
	const [studentCode, setStudentCode] = useState('');
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
	var index = studentLists
		.map((e) => {
			return e.student_code;
		})
		.indexOf(studentCode);
	return <div>EditStudent</div>;
};

export default EditStudent;
