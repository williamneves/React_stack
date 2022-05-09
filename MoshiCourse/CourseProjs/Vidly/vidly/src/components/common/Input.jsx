import React from 'react';

const Input = ({ name, value, label, onChange, type='text' }) => {
	return (
		<div className='form-group mb-3'>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				type={type}
				className='form-control'
				name={name}
				placeholder={label}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
