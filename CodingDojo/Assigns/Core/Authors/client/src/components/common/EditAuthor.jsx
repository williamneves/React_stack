import React, { useState, useEffect } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditAuthor = () => {
	const [author, setAuthor] = useState('');
	const [errors, setErrors] = useState('');

	// Use navigate to redirect to another page
  const navigate = useNavigate();
  // Use params to get the id from the url
  const { id } = useParams();

  // Get the author from the server by id
  useEffect( () => {
    axios
      .get( `http://localhost:8000/api/person/${id}` )
      .then( ( res ) => {
        setAuthor( res.data.name );
      } )
      .catch( ( err ) => {
        console.log( err );
      } );
  }, [id] );

	const handleSubmit = (event) => {
		const name = author;
		event.preventDefault();
		console.log('Submitting author:', name);
		// Send the author to the server
		axios
			.put('http://localhost:8000/api/person/'+id, { name })
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
			<h1>Edit Author</h1>
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

export default EditAuthor;
