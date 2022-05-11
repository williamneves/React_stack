import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import MyContext from './../context/MyContext';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default () => {
  const { search, setSearch, handleSubmit } = React.useContext( MyContext );
  
  // Handle input change
  const handleChange = ( e ) => {
    setSearch( e.target.value );
  }
  
	return (
		<form onSubmit={handleSubmit}>
			<InputGroup className='mb-3 w-50 mx-auto'>
				<FormControl
					name='search'
					onChange={handleChange}
					value={search}
					placeholder='Search pokemon by name'
					aria-label='Search pokemon by name'
					aria-describedby='basic-addon2'
				/>
				<Button type='submit' variant='outline-secondary' id='button-addon2'>
					Search
				</Button>
			</InputGroup>
		</form>
	);
};

// export default SearchInput;
