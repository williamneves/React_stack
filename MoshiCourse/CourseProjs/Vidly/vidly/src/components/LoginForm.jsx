import React, { useState } from 'react';
import Input from './common/Input';

const LoginForm = (props) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// const form = e.target;
		// const data = new FormData( form );
		// const user = {
		//   email: data.get( 'email' ),
		//   password: data.get( 'password' )
		console.log('submit');
  };
  
  const { username, password } = formData;

	return (
		<React.Fragment>
			<h1>LoginForm</h1>
			<div className='card p-3 col-4'>
				<form onSubmit={handleSubmit}>
					<Input
						name='username'
						value={username}
						label='Username'
						onChange={handleChange}
					/>
          <Input
            name='password'
            value={ password }
            label='Password'
            onChange={ handleChange }
            type='password'
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
