import React, { useState, useEffect } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPlayer = () => {
	const [player, setPlayer] = useState({
		name: '',
		preferredPosition: '',
	});
	const [valErrors, setValErrors] = useState(false);
	const [loading, setLoading] = useState('');

	const navigate = useNavigate();
	// Post new player to database
	const postPlayer = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(player.name.trim(),player.preferredPosition.trim());
		axios
      .post( 'http://localhost:8000/api/player', {
        name: player.name.trim(),
        preferredPosition: player.preferredPosition.trim(),
    } )
			.then((res) => {
				console.log(res);
				setLoading(false);
				navigate( '/list' );
        // set player to empty
        setPlayer( {
          name: '',
          preferredPosition: '',
        } );
			})
			.catch((err) => {
				setLoading(false);
				const errorResponse = err.response.data.errors; // Get the errors from err.response.data
				setValErrors(errorResponse);
			});
	};

	return (
		<React.Fragment>
			<h3>Add new Player:</h3>
			<form className='col-4' onSubmit={postPlayer}>
				<MDBInput
					value={player.name}
					onChange={(e) => setPlayer({ ...player, name: e.target.value })}
					label='Player Name'
					name='name'
					id='name'
					type='text'
				/>
				<div className='mb-2' style={{ minHeight: '22px' }}>
					{valErrors && valErrors.name && (
						<small className='text-danger text-end d-block me-1 fst-italic'>
							{valErrors.name.message}*
						</small>
					)}
				</div>
				<MDBInput
					value={player.preferredPosition}
					onChange={(e) => setPlayer({ ...player, preferredPosition: e.target.value })}
					label='Preferred Position'
					name='preferredPosition'
					id='preferredPosition'
					type='text'
				/>
				<div className='mb-2' style={{ minHeight: '22px' }}>
					{valErrors && valErrors.preferredPosition && (
						<small className='text-danger text-end d-block me-1 fst-italic'>
							{valErrors.preferredPosition.message}*
						</small>
					)}
				</div>
				<MDBBtn type='submit' className='float-end'>
					Submit
				</MDBBtn>
			</form>
		</React.Fragment>
	);
};

export default AddPlayer;
