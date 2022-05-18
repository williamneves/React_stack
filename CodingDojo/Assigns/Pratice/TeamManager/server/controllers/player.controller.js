// Export a hello world message
module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World',
	});
};

// Require Player model
const Player = require('../models/player.model');
// Require Games model
const Games = require('../models/games.model');

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
	const { id } = request.params;
	const { gameId } = request.body;
	Player.findById(id)
		.then((player) => {
			player.games.push(gameId);
			player
				.save()
				.then((updatedPlayer) => response.json(updatedPlayer))
				.catch((err) => response.json(err));
		})
		.catch((err) => response.json(err));
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
// Export getPlayerByName method
module.exports.getPlayerByName = (request, response) => {
	const { name } = request.params;
	Player.findOne({ name })
		.then((player) => response.json(player))
		.catch((err) => response.json(err));
};
// Export getPlayerByPosition method
module.exports.getPlayerByPosition = (request, response) => {
	const { position } = request.params;
	Player.find({ preferredPosition: position })
		.then((players) => response.json(players))
		.catch((err) => response.json(err));
};
// Export getPlayerByGame method
module.exports.getPlayerByGame = (request, response) => {
	const { gameId } = request.params;
	Player.find({ games: gameId })
		.then((players) => response.json(players))
		.catch((err) => response.json(err));
};
// Export updatePlayer method
module.exports.updatePlayer = (request, response) => {
	const { id } = request.params;
	const { name, preferredPosition } = request.body;
	Player.findByIdAndUpdate(id, {
		name,
		preferredPosition,
	})
		.then((player) => response.json(player))
		.catch((err) => response.json(err));
};
// Export deletePlayer method
module.exports.deletePlayer = (request, response) => {
	const { id } = request.params;
	Player.findByIdAndDelete(id)
		.then((player) => response.json(player))
		.catch((err) => response.json(err));
};

// Export createGame method
module.exports.createGame = (request, response) => {
	const { name } = request.body;
	Games.create({
		name,
	})
		.then((game) => response.json(game))
		.catch((err) => response.json(err));
};
// Export getAllGames method
module.exports.getAllGames = (request, response) => {
	Games.find()
		.then((games) => response.json(games))
		.catch((err) => response.json(err));
};
// Export getGameById method
module.exports.getGameById = (request, response) => {
	const { id } = request.params;
	Games.findById(id)
		.then((game) => response.json(game))
		.catch((err) => response.json(err));
};
// Export insertPlayer method
module.exports.insertPlayer = (request, response) => {
	const { gameId } = request.params;
	const { playerId } = request.body;
	Games.findById(gameId)
		.then((game) => {
			game.players.push(playerId);
			game
				.save()
				.then((updatedGame) => response.json(updatedGame))
				.catch((err) => response.json(err));
		})
		.catch((err) => response.json(err));
};
// Export deletePlayer method
module.exports.deletePlayer = (request, response) => {
	const { gameId } = request.params;
	const { playerId } = request.body;
	Games.findById(gameId)
		.then((game) => {
			game.players.pull(playerId);
			game
				.save()
				.then((updatedGame) => response.json(updatedGame))
				.catch((err) => response.json(err));
		})
		.catch((err) => response.json(err));
};
