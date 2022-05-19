// import player controller
const PlayerController = require( '../controllers/player.controller' );

module.exports = function (app) {
	// Welcome message
	app.get('/api', PlayerController.index);
	// Create a new player
	app.post('/api/player', PlayerController.createPlayer);
	// Show all players
	app.get( '/api/players', PlayerController.getAllPlayers );
	// Delete a player
  app.delete( '/api/player/:id', PlayerController.deletePlayerById );
  // Update Player and Add a game to a player
  app.put( '/api/player/:id/game/:gameId', PlayerController.addGame );
  // Update player and remove a game from a player
  app.put( '/api/player/:id/game/:gameId/remove', PlayerController.removeGame );
  // Update player to undecided
  app.put( '/api/player/:id/game/:gameId/undecided', PlayerController.undecidedGame );
};
