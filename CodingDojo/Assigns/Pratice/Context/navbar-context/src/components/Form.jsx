import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

const Form = (props) => {
	const { name, handleName } = useContext(UserContext);

	const inputStyle = {
		padding: '8px 10px',
		fontSize: '1em',
	};
	return (
		<div style={{ padding: '20px' }}>
			<div>
				<label>Name:</label>{' '}
				<input style={inputStyle} value={name} onChange={(e) => handleName(e)} />
			</div>
		</div>
	);
};

export default Form;
