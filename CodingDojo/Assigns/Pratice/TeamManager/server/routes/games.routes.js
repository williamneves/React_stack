// import games controller\
const GameController = require('../controllers/game.controller');

module.exports = function (app) {
	// Welcome message
	app.get('/api/welcome', GameController.index);

	// Get all games
	app.get('/api/games', GameController.getAllGames);
	// add a game
	app.post('/api/game', GameController.createGames);
};
