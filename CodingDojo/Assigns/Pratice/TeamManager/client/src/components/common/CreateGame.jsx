import React, { useState } from 'react';
import axios from 'axios';

const CreateGame = () => {
	const [game, setGame] = useState('');

	// handle create game
	const handleCreateGame = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8000/api/game', {
				name: game,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				const errorResponse = err.response.data.errors; // Get the errors from err.response.data
				console.log(errorResponse);
			});
	};

	return (
		<React.Fragment>
			<div>CreateGame</div>
			<form onSubmit={handleCreateGame}>
				<input type='text' name='name' value={game} onChange={(e) => setGame(e.target.value)} />
				<button className='btn'>Submit</button>
			</form>
		</React.Fragment>
	);
};

export default CreateGame;
