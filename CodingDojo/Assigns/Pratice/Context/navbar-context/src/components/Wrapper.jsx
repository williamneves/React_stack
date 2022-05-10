import React, { useState } from 'react';

import UserContext from '../contexts/UserContext';

const Wrapper = ({ children }) => {
	const [name, setName] = useState('Bob Smith');
	const [nameLength, setnameLength] = useState(name.length-1);

	const handleName = (e) => {
    setName( e.target.value );
    console.log(nameLength)
		setnameLength(name.length-1);
	};

	return (
		<UserContext.Provider
			value={{
				name,
				handleName,
				nameLength,
			}}>
			{children}
		</UserContext.Provider>
	);
};

export default Wrapper;
