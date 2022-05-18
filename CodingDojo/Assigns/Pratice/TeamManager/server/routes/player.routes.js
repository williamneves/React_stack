const PlayerController = require('../controllers/player.controller');
module.exports = function (app) {
	// Welcome message
	app.get('/api', PlayerController.index);
	// Create a new player
	app.post('/api/player', PlayerController.createPlayer);
	// Show all players
	app.get( '/api/players', PlayerController.getAllPlayers );
	// Delete a player
	app.delete( '/api/player/:id', PlayerController.deletePlayerById );
	// add a game
	app.post('/api/game', PlayerController.addGame);
};
