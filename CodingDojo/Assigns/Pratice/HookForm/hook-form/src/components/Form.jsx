import React, { useState } from 'react';

const Form = (props) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const newUser = { username, email, password, confirmPassword };
		console.log(newUser);
	};

	return (
		<React.Fragment>
			<div className='row col-6 mx-auto my-3'>
				<h2>Hook Form</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-floating mb-3'>
						<input
							id='username'
							className='form-control'
							placeholder='Username'
							type='text'
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label htmlFor='username'>Username</label>
					</div>
					<div className='form-floating mb-3'>
						<input
							id='email'
							className='form-control'
							placeholder='Email'
							type='text'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor='email'>E-mail</label>
					</div>
					<div className='form-floating mb-3'>
						<input
							id='password'
							className='form-control'
							placeholder='Password'
							type='text'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label htmlFor='password'>Password</label>
					</div>
					<div className='form-floating mb-3'>
						<input
							id='confirmPassword'
							className='form-control'
							placeholder='Confirm Password'
							type='text'
							onChange={(e) => setconfirmPassword(e.target.value)}
						/>
						<label htmlFor='confirmPassword'>Confirm Password</label>
					</div>
					<button className='btn btn-primary' type='submit'>
						Submit
					</button>
				</form>
				<div className='card mt-3'>
					<div className='card-body'>
						<p className='card-title'>
							<b>Username: </b>
							{username}
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
