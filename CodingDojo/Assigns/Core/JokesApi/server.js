// creat const express
const express = require( 'express' );

// creat const app
const app = express();

// set the port to listen to
const port = 8000;


// create the requere with the mongoose config
require('./server/config/mongoose.config.js');

// use the express json and express url encoded with extended true
app.use(express.json(), express.urlencoded({ extended: true }));

// use the routes
const JokeRoutes = require('./server/routes/joke.routes');

// app listen on port
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
