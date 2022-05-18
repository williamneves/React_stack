const PlayerController = require('../controllers/player.controller');
module.exports = function (app) {
	// Welcome message
	app.get('/api', PlayerController.index);
	// Create a new player
	app.post('/api/player', PlayerController.createPlayer);
	// Show all players
	app.get('/api/players', PlayerController.getAllPlayers);
};
