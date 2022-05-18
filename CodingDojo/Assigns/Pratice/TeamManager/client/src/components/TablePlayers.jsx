import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

const TablePlayers = () => {
	const [players, setPlayers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/players')
			.then((res) => {
				setPlayers(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
  }, [players] );
  
  // handel delete player
  const handleDeletePlayer = ( id ) => {
    axios
      .delete( `http://localhost:8000/api/player/${id}` )
      .then( ( res ) => {
        console.log( res );
        setPlayers( players.filter( ( player ) => player._id !== id ) );
      } )
      .catch( ( err ) => {
        console.log( err );
      } );
  }

	return (
		<React.Fragment>
      <h3 className='mb-3'>Table of Players</h3>
      <hr className='m-0' />
			{isLoading ? (
				<p>Loading...</p>
			) : (
        <MDBTable>
						<MDBTableHead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'>Name</th>
								<th scope='col'>Preferred Position</th>
								<th scope='col'>Actions</th>
							</tr>
						</MDBTableHead>
						<MDBTableBody>
            {players.map((player, index) => (
							<tr key={index}>
								<th scope='row'>{index + 1}</th>
								<td>{player.name}</td>
								<td>{player.preferredPosition}</td>
								<td>
									<MDBBtnGroup className='shadow-0'>
										<MDBBtn color='primary' onClick={() => {console.log('edit')}} outline>
											Edit
										</MDBBtn>
										<MDBBtn color='danger' onClick={() => handleDeletePlayer(player._id)} outline>
											Delete
										</MDBBtn>
									</MDBBtnGroup>
								</td>
							</tr>
            ))}
						</MDBTableBody>
					</MDBTable>
			)}
		</React.Fragment>
	);
};

export default TablePlayers;
