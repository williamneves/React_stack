// request mongoose
const mongoose = require('mongoose');

// create a schema
const PlayerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [ true, 'Name is required' ],
			minLength: [ 3, 'Name must be at least 3 characters' ],
		},
		preferredPosition: {
			type: String,
			required: [ true, 'Preferred position is required' ],
			minLength: [ 3, 'Preferred position must be at least 3 characters' ],
		},
		games: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Games',
			},
		],
		gamesNotPlay: [
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Games',
	},
],
	},
	{ timestamps: true }
);

// export the Player schema
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;