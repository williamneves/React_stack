import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TablePlayersinGame = () => {
	const [players, setPlayers] = useState([]);
	const [ isLoading, setIsLoading ] = useState( true );
	const [ gameId, setGameId ] = useState( '' );
	
	// Get all players
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
	}, [ players ] );
	
	// Get gameId from url
	const { id } = useParams();
	useEffect( () => {
		setGameId( id );
	}, [ id ] );

	// Add game to player
	const addGameToPlayer = ( playerId, gameId ) => {
		axios
			.put( `http://localhost:8000/api/player/${playerId}/game/${gameId}` )
			.then( ( res ) => {
				console.log( res );
				setPlayers( players.map( ( player ) => ( player._id === playerId ? { ...player, games: [ ...player.games, gameId ] } : player ) ) );
			} )
			.catch( ( err ) => {
				console.log( err );
			} );
	}

	// Remove game from player
	const removeGameFromPlayer = ( playerId, gameId ) => {
		axios
			.put( `http://localhost:8000/api/player/${playerId}/game/${gameId}/remove` )
			.then( ( res ) => {
				console.log( res );
				setPlayers( players.map( ( player ) => ( player._id === playerId ? { ...player, games: player.games.filter( ( game ) => game !== gameId ) } : player ) ) );
			} )
			.catch( ( err ) => {
				console.log( err );
			} );
	}
	// Player is undecided
	const undecidedPlayer = ( playerId, gameId ) => {
		axios
			.put( `http://localhost:8000/api/player/${playerId}/game/${gameId}/undecided` )
			.then( ( res ) => {
				console.log( res );
				setPlayers( players.map( ( player ) => ( player._id === playerId ? { ...player, games: player.games.filter( ( game ) => game !== gameId ) } : player ) ) );
			} )
			.catch( ( err ) => {
				console.log( err );
			} );
	}




	// Check if the game is in the players games
	const checkIfGameInPlayersGames = ( gameId ) => {
		const playerGames = players.map( ( player ) => player.games );
		const playerGamesIds = playerGames.map( ( game ) => game._id );
		return playerGamesIds.includes( gameId );
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
										<MDBBtn
											color='primary'
											onClick={() => {
												addGameToPlayer(player._id, gameId);
											}}
											outline={player.games.includes(gameId) && !player.gamesNotPlay.includes(gameId) ? false : true}>
											Playing
										</MDBBtn>
										<MDBBtn
											color='danger'
											outline={!player.games.includes(gameId) && player.gamesNotPlay.includes(gameId) ? false : true}
											onClick={() => {
												removeGameFromPlayer(player._id, gameId);
											}}
											>
											Not Playing
										</MDBBtn>
										<MDBBtn
											color='warning'
											outline={!player.games.includes(gameId) && !player.gamesNotPlay.includes(gameId) ? false : true}
											onClick={() => {
												undecidedPlayer(player._id, gameId);
											} }>
											Undecided
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

export default TablePlayersinGame;
