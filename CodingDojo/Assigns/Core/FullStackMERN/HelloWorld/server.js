///////////////////////////////////
////// CONFIG SERVER.JS MERN //////
///////////////////////////////////

// Require modules
const express = require('express');
const cors = require('cors');
const app = express();

// require mongoose config
require('./server/config/mongoose.config');

// use cors
app.use(cors());

// user express.json
app.use(express.json());

// use express url-encoded
app.use(express.urlencoded({ extended: true }));

// Port
const port = 8000;

// require routes
require('./server/routes/person.routes')(app); // This is new

// app listen on port
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
