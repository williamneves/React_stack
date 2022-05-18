import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAuthor = () => {
	const [author, setAuthor] = useState('');
	const [errors, setErrors] = useState('');

	// Use navigate to redirect to another page
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		const name = author;
		event.preventDefault();
		console.log('Submitting author:', name);
		// Send the author to the server
		axios
			.post('http://localhost:8000/api/person', { name })
			.then((res) => {
				console.log(res);
				navigate('/');
			}) // If successful, do something with the response.
			.catch((err) => {
				const errorResponse = err.response.data.errors; // Get the errors from err.response.data
				setErrors(errorResponse);
			});
	};

	const handleChange = (event) => {
		setAuthor(event.target.value);
	};
	return (
		<div>
			<h1>Add Author</h1>
			<hr className='col-3 mb-3 mt-0' />
			<form onSubmit={handleSubmit} className='col-3'>
				<MDBInput
					label='New Author Name'
					id='name'
					type='text'
					name='name'
					value={author}
					onChange={handleChange}
				/>
				<div className='mb-2' style={{ minHeight: '22px' }}>
					{errors && errors.name && (
						<small className='text-danger text-end d-block me-1 fst-italic'>
							{errors.name.message}*
						</small>
					)}
				</div>
				<MDBBtn type='submit' className='float-end'>
					Add Author
				</MDBBtn>
			</form>
		</div>
	);
};

export default AddAuthor;
