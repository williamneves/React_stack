import React from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
// import myContext from './context/MyContext';
import MyContext from '../context/MyContext';
// import useContext from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
	const { search, setSearch, redirect, setRedirect } = useContext(MyContext);

	// handleSearch
	const handleSearch = (e) => {
    // if the target is type type and not empty set the search to the value
    const newSearch = { ...search };
    if ( e.target.name === 'type' && e.target.value !== '' ) {
      // clone the search object
      newSearch.type = e.target.value
      
    }
    if ( e.target.name === 'id' && e.target.value !== '' ) {
      newSearch.id = e.target.value
    }
    // set the search to the new search
    setSearch( newSearch );

	};
	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text>Search for:</InputGroup.Text>
			<Form.Select onChange={handleSearch} name='type' aria-label='Select'>
				<option value=''>Please Select</option>
				<option value='people'>People</option>
				<option value='planets'>Planet</option>
			</Form.Select>
			<FormControl
				name='id'
				type='text'
				placeholder='Enter the ID'
				aria-label='Enter the ID'
				aria-describedby='enter-id'
				onChange={handleSearch}
			/>
			<Link to={`/${search.type}/${search.id}`} className='btn btn-outline-secondary' variant='outline-secondary' id='button-addon2'>
				Search
			</Link>
		</InputGroup>
	);
};

export default Search;
