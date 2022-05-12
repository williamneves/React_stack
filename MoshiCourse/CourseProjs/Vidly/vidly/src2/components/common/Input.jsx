import React from 'react';

const Input = ({ name, value, label, onChange, type = 'text', errorMessage }) => {
	return (
		<div className='form-floating mb-3'>
			<input
				id={name}
				type={type}
				className='form-control'
				name={name}
				placeholder={label}
				value={value}
				onChange={onChange}
			/>
			<label htmlFor={name}>{label}</label>
			<small className='form-text text-danger'>
				<span>{errorMessage[name] && errorMessage[name]}</span>
			</small>
		</div>
	);
};

export default Input;
