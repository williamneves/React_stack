import React from 'react';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const ToDoInput = ({ onChange }) => {
	const [errorVal, seterrorVal] = useState({
		validate: true,
		message: 'Is required and must be at least 2 characters long',
	});

	const [show, setShow] = useState(false);

	const validate = (e) => {
		e.preventDefault();
		console.log(errorVal);
		// copy state
		const newState = { ...errorVal };

		if (e.target.task.value === '' || e.target.task.value.lenght <= 1) {
			newState.validate = false;
			seterrorVal(newState);
			setTimeout(() => {
				newState.validate = true;
				seterrorVal(newState);
			}, 800);
			setShow(true);
			return false;
		} else {
			newState.validate = true;
			seterrorVal(newState);
			onChange(e);
			return true;
		}
	};

	return (
		<React.Fragment>
			<form onSubmit={validate}>
				<div
					className={`input-group mb-3 ${
						!errorVal.validate ? 'valide-error todo-input-error' : 'todo-input-no-error'
					}`}>
					<span className='input-group-text'>To-do:</span>
					<input
						name='task'
						type='text'
						className={`form-control`}
						aria-label='Text input with checkbox'
					/>
					<div className='input-group-text'>
						<input
							name='status'
							className='form-check-input mt-0'
							type='checkbox'
							aria-label='Checkbox for following text input'
						/>
					</div>
					<button className='btn btn-outline-secondary' type='submit' id='button-addon2'>
						<i className='fa-duotone fa-circle-plus fa-xl'></i>
					</button>
				</div>
			</form>
			<div
				class='toast align-items-center text-white bg-primary border-0'
				role='alert'
				aria-live='assertive'
				aria-atomic='true'>
				<div class='d-flex'>
					<div class='toast-body'>Hello, world! This is a toast message.</div>
					<button
						type='button'
						class='btn-close btn-close-white me-2 m-auto'
						data-bs-dismiss='toast'
						aria-label='Close'></button>
				</div>
			</div>
			<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
				<Toast
					onClose={() => setShow(false)}
					className='m-5'
					show={show}
					delay={5000}
					position={'top-right'}
					bg={'danger'}
					autohide>
					<Toast.Header>
						<img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
						<strong className='me-auto'>Error</strong>
						<small>now</small>
					</Toast.Header>
					<Toast.Body className='text-white'>{errorVal.message}!</Toast.Body>
				</Toast>
			</div>
		</React.Fragment>
	);
};

export default ToDoInput;
