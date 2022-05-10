import React, { useState, useEffect, useRef } from 'react';

const ToDo = ({ item, onDelete, onCheck, onEditInput }) => {
	const [edit, setEdit] = useState({
		toogle: true,
	});

  let textInput = null;
  useEffect(()=>{
    textInput.focus();
  })
	const handleEdit = (e) => {
		e.preventDefault();
		setEdit({
			toogle: !edit.toogle,
		});
	};

	const setBackround = () => {
		if (edit.toogle) {
			return 'bg-light';
		}
	};

	return (
		<React.Fragment>
			<form>
				<div className='input-group input-group-lg mb-3'>
					{/* Todo checkmark */}
					<div
						className={`input-group-text border-0 ${
							!item.status ? 'bg-light' : 'bg-success bg-opacity-25'
						}`}>
						<input
							className='form-check-input mt-0'
							type='checkbox'
							checked={item.status}
							aria-label='Checkbox for following text input'
							onChange={onCheck}
						/>
					</div>
					{/* Todo Input */}
          <input
            ref={(task) => { textInput = task; }}
						name='task'
						type='text'
						className={`form-control border-0 ${
							!item.status || !edit.toogle
								? 'bg-light'
								: 'bg-success bg-opacity-25 text-decoration-line-through fst-italic'
						}`}
						aria-label='Text input with checkbox'
						value={item.task}
						onChange={onEditInput}
						disabled={edit.toogle === false ? false : true}
					/>
					<button
						className={`btn btn-outline-light border-0 ${
							!item.status ? 'bg-light' : 'bg-success bg-opacity-25'
						}`}
						onClick={handleEdit}
						type={edit.toogle === true ? '' : 'submit'}
						id='button-addon2'>
						{edit.toogle === true ? (
							<i className='fa-regular fa-pen-to-square text-info'></i>
						) : (
							<i className='fa-regular fa-floppy-disk text-success'></i>
						)}
					</button>
					<button
						className={`btn btn-outline-light border-0 ${
							!item.status ? 'bg-light' : 'bg-success bg-opacity-25'
						}`}
						onClick={onDelete}
						id='button-addon2'>
						<i className='fa-regular fa-circle-trash text-danger'></i>
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default ToDo;
