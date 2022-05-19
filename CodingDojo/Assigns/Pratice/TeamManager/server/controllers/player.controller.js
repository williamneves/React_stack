// Export a hello world message
module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World',
	});
};

// Require Player model
const Player = require('../models/player.model');

// Export createPlayer method
module.exports.createPlayer = (request, response) => {
	const { name, preferredPosition } = request.body;
	Player.create({
		name,
		preferredPosition,
	})
		.then((player) => response.json(player))
		.catch((err) => response.status(400).json(err));
};

// Update a player with a given id and new game
module.exports.addGame = (request, response) => {
	const { id, gameId } = request.params;
	Player.findById(id)
		.then((player) => {
			// add the game object id to the player's games array
            player.games.push( gameId );
            player.gamesNotPlay.remove( gameId );
			player
				.save()
				.then((updatedPlayer) => response.json(updatedPlayer))
				.catch((err) => response.json(err));
		})
		.catch((err) => response.json(err));
};
// remove a game from a player
module.exports.removeGame = (request, response) => {
	const { id, gameId } = request.params;
	Player.findById(id)
		.then((player) => {
			// remove the game object id from the player's games array
            player.games.remove( gameId );
            player.gamesNotPlay.push( gameId );
			player
				.save()
				.then((updatedPlayer) => response.json(updatedPlayer))
				.catch((err) => response.json(err));
		})
		.catch((err) => response.json(err));
};
// export remove from game and add to gamesNotPlay
module.exports.undecidedGame = ( request, response ) => {
    const { id, gameId } = request.params;
    Player.findById( id )
        .then( ( player ) => {
            // remove the game object id from the player's games array
            player.games.remove( gameId );
            player.gamesNotPlay.remove( gameId );
            player
                .save()

                .then( ( updatedPlayer ) => response.json( updatedPlayer ) )
                .catch( ( err ) => response.json( err ) );
        } )
        .catch( ( err ) => response.json( err ) );
};


// Export getAllPlayers method
module.exports.getAllPlayers = (request, response) => {
	Player.find()
		.then((players) => response.json(players))
		.catch((err) => response.json(err));
};
// Export getPlayerById method
module.exports.getPlayerById = (request, response) => {
	const { id } = request.params;
	Player.findById(id)
		.then((player) => response.json(player))
		.catch((err) => response.json(err));
};
// Export deletePlayer method
module.exports.deletePlayerById = (request, response) => {
	Player.findByIdAndDelete(request.params.id)
		.then((person) => response.json(person))
		.catch((err) => response.status(400).json(err));
};