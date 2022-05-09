import React, { useState } from 'react';
import FadeIn from 'react-fade-in';

const Form = (props) => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [formDataValidations, setformDataValidations] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	// destructuring
	const { firstName, lastName, email, password, confirmPassword } = formData;

	// catch the input value and set the state
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });

		// check if the input is valid
		// username
		if (e.target.name === 'firstName' || e.target.name === 'lastName') {
			if (e.target.value.length < 3 && e.target.value.length > 0) {
				setformDataValidations({
					...formDataValidations,
					[e.target.name]: `${e.target.placeholder} must be at least 3 characters`,
				});
			} else {
				setformDataValidations({ ...formDataValidations, [e.target.name]: '' });
			}
		}
		// document.activeElement
		// email
		if (e.target.name === 'email') {
			if (e.target.value.length < 5 && e.target.value.length > 0) {
				setformDataValidations({
					...formDataValidations,
					[e.target.name]: `${e.target.placeholder} must be at least 5 characters`,
				});
			} else {
				setformDataValidations({ ...formDataValidations, [e.target.name]: '' });
			}
		}

		// password and confirm password and set min length to 8
		if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
			if (e.target.value.length < 8 && e.target.value.length > 0 && e.target.onblur) {
				setformDataValidations({
					...formDataValidations,
					[e.target.name]: `${e.target.placeholder} must be at least 8 characters`,
				});
			} else {
				setformDataValidations({ ...formDataValidations, [e.target.name]: '' });
			}
		}

		console.log(e.target.name, e.target.value);
	};

	// 	Using the previous assignment "Hook Form", add error messages.

	// If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
	// If the email is less than 5 characters, output an error message saying the field must be at least 5 characters.
	// The passwords must match and be at least 8 characters.
	// These messages can appear right when you render the page, and will disappear in real time.

	// Hint: Use state and conditional rendering.

	const handleSubmit = (event) => {
		event.preventDefault();
		const newUser = { firstName, lastName, email, password, confirmPassword };
		console.log(newUser);
	};

	return (
		<React.Fragment>
			<div className='row col-6 mx-auto my-3'>
				<h2>Hook Form</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-floating mb-3'>
						<input
							name='firstName'
							className='form-control'
							placeholder='First Name'
							type='text'
							onChange={handleChange}
						/>
						<label htmlFor='username'>First Name</label>

						<small
							className={`${
								formDataValidations.firstName && formData.firstName.length < 3
									? 'validation'
									: 'validation-hide'
							} text-danger`}>
							{/* {formDataValidations.firstName} */}
							'firstName must be at least 3 characters'
						</small>
					</div>
					<div className='form-floating mb-3'>
						<input
							name='lastName'
							className='form-control'
							placeholder='Last Name'
							type='text'
							onChange={handleChange}
						/>
						<label htmlFor='username'>Last Name</label>
						<small className='text-danger'>{formDataValidations.lastName}</small>
					</div>
					<div className='form-floating mb-3'>
						<input
							name='email'
							className='form-control'
							placeholder='Email'
							type='text'
							onChange={handleChange}
						/>
						<label htmlFor='email'>E-mail</label>
						<small className='text-danger'>{formDataValidations.email}</small>
					</div>
					<div className='form-floating mb-3'>
						<input
							name='password'
							className='form-control'
							placeholder='Password'
							type='password'
							onChange={handleChange}
						/>
						<label htmlFor='password'>Password</label>
						<small className='text-danger'>{formDataValidations.password}</small>
					</div>
					<div className='form-floating mb-3'>
						<input
							name='confirmPassword'
							className='form-control'
							placeholder='Confirm Password'
							type='password'
							onChange={handleChange}
						/>
						<label htmlFor='confirmPassword'>Confirm Password</label>
						<small className='text-danger'>{formDataValidations.confirmPassword}</small>
					</div>
					<button className='btn btn-primary' type='submit'>
						Submit
					</button>
				</form>
				<div className='card mt-3'>
					<div className='card-body'>
						<p className='card-text'>
							<b>First Name: </b>
							{firstName}
						</p>
						<p className='card-text'>
							<b>last Name: </b>
							{lastName}
						</p>
						<p className='card-text'>
							<b>Email: </b>
							{email}
						</p>
						<p className='card-text'>
							<b>Password: </b>
							{password}
						</p>
						<p className='card-text'>
							<b>Confirm Password: </b>
							{confirmPassword}
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Form;
