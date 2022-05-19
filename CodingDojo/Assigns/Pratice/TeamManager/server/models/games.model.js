const mongoose = require('mongoose');

// Create a schema
const GamesSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			minLength: [3, 'Name must be at least 3 characters'],
		},
	},
	{ timestamps: true }
);

// Export the Games schema
const Games = mongoose.model('Games', GamesSchema);
module.exports = Games;