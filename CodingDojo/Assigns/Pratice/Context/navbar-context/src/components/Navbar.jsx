import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

const Navbar = (props) => {
	const style = {
		background: 'purple',
		display: 'flex',
		padding: '20px',
		alignItems: 'center',
		justifyContent: 'flex-end',
		color: 'white',
		fontWeight: 'bold',
	};

	const { name, nameLength } = useContext(UserContext);
	return <div style={style}>Hi {name} ({nameLength})!</div>;
};

export default Navbar;
