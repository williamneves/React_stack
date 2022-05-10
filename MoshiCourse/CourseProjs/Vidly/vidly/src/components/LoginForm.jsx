import React, { useState } from 'react';
import Input from './common/Input';
import Joi from 'joi-browser';

const LoginForm = (props) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({});

	const schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required(),
	};

	const validateForm = () => {
		const result = Joi.validate(formData, schema, { abortEarly: false });
		
		if ( !result.error ) return null;
		
		for ( let error of result.error.details ) {
			setErrors( ( prev ) => ( { ...prev, [ error.path[ 0 ] ]: error.message } ) );
		}

		return true

	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const erros = validateForm();
		console.log('submit', erros);
	};

	const { username, password } = formData;

	return (
		<React.Fragment>
			<h1>LoginForm</h1>
			<div className='card p-3 col-4'>
				<form onSubmit={handleSubmit}>
					<Input
						name='username'
						value={ username }
						label='Username'
						onChange={ handleChange }
						errorMessage={errors}
					/>
					<Input
						name='password'
						value={password}
						label='Password'
						onChange={handleChange}
						type='password'
						errorMessage={errors}
					/>
					<button className='btn btn-primary' type='submit'>
						Login
					</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default LoginForm;
