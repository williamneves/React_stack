// Require Games model
module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World game controler',
	});
};

const Games = require('../models/games.model');

// Export getAllGames method
module.exports.getAllGames = (request, response) => {
	Games.find()
		.then((games) => response.json(games))
		.catch((err) => response.json(err));
};

// Export Create Games method
module.exports.createGames = (request, response) => {
	const { name } = request.body;
	Games.create({ name })
		.then((games) => response.json(games))
		.catch((err) => response.status(400).json(err));
};
