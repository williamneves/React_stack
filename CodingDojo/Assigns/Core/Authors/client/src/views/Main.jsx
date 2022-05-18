import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
export default () => {
	const [ authors, setAuthors ] = useState( [] );
	
	useEffect( () => {
		axios
			.get( 'http://localhost:8000/api/persons' )
			.then( ( res ) => {
				setAuthors( res.data );
			} )
			.catch( ( err ) => {
				console.log( err );
			} );
	}, [authors] );

	// Handle delete
	const handleDelete = ( id ) => {
		axios
			.delete( 'http://localhost:8000/api/person/' + id )
			.then( ( res ) => {
				console.log( res );
				setAuthors( authors.filter( ( author ) => author.id !== id ) );
			} )
			.catch( ( err ) => {
				console.log( err );
			} );
	};



	return (
		<div>
			<h1 className='mb-0'>Authors App</h1>
			<hr className='col-3 mb-3 mt-1' />
			<Link to='/add' className='btn btn-outline-primary btn-sm mb-4'>
				Add Author <i className='fa-duotone fa-user-plus ms-2 fa-lg'></i>
			</Link>
			<p>We have quotes by:</p>
			<MDBTable>
				<MDBTableHead dark>
					<tr key={'a'}>
						<th scope='col'><b>Author</b></th>
						<th scope='col'>Actions</th>
					</tr>
				</MDBTableHead>
				<MDBTableBody>
					{ authors.map( ( author ) => (
						<tr key={ author._id }>
							<th scope='row'><b>{ author.name }</b></th>
							<td>
								<button onClick={() => handleDelete(author._id)} className='btn btn-outline-primary btn-sm me-3'>
									Delete <i className='fa-duotone fa-trash ms-2 fa-lg'></i>
								</button>
								<Link to={ `/author/${author._id}/edit` } className='btn btn-outline-primary btn-sm'>
									Edit <i className='fa-duotone fa-edit ms-2 fa-lg'></i>
								</Link>
							</td>
						</tr>
					) ) }
				</MDBTableBody>
			</MDBTable>
		</div>
	);
};
