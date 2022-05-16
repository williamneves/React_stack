// Create const mongoose
const mongoose = require('mongoose');

// Create const database name
const databaseName = 'jokes-api';

// Connect to the database
mongoose
	.connect(`mongodb://localhost/${databaseName}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to database successfully! Database_name: '+ databaseName);
	})
	.catch((err) => {
		console.log('Somethin went wrong when connectiong to the database', err);
	});
