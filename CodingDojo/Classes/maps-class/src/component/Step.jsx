import React from 'react';

const Step = ({ direction, instructions, distance, id, onDelete }) => {
	const handleDirection = () => {
		switch (direction) {
			case 'left':
				return <i className='fa-duotone fa-arrow-turn-up fa-rotate-270'></i>;
			case 'right':
				return <i className='fa-duotone fa-arrow-turn-down fa-rotate-270'></i>;
			case 'up':
				return <i className='fa-duotone fa-arrow-up-long'></i>;
			default:
				return <i className='fa-duotone fa-arrow-up-long'></i>;
		}
	};

  const opacity = () => {
    console.log(id)
		switch (id) {
			case 0:
				return 'bg-opacity-100';
			case 1:
				return 'bg-opacity-75';
			case 2:
				return 'bg-opacity-50';
			default:
				return 'bg-opacity-25';
		}
	};

	return (
		<div
      className={`card p-3 row flex-row col-12 mx-auto align-items-center text-light mb-3 bg-primary ${opacity()}`}>
			<div className='direction col-2 fs-1'>{handleDirection()}</div>
			<div className='instructions col-7 fs-4'>{instructions}</div>
			<div className='distance col-2 fs-4'>{distance} miles</div>
			<div className='distance col-1'>
				<i
					className='fa-duotone fa-circle-trash fa-xl text-danger'
					style={{ cursor: 'pointer' }}
					onClick={onDelete}></i>
			</div>
		</div>
	);
};

export default Step;
