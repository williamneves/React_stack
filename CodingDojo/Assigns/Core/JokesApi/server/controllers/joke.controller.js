// Call joke model
const Joke = require('../models/joke.model');

// Find all jokes
exports.findAllJokes = ( req, res ) => {
  console.log('argument');
	Joke.find()
		.then((AllJokes) => res.json({ jokes: AllJokes }))
		.catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// Find a joke by id
exports.findJokeById = ( req, res ) => {
  Joke.FindById( { _id: req.params.id } )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.json( { message: 'Something went wrong', error: err } ) );
};

// Create new Joke
exports.createJoke = ( req, res ) => {
  Joke.create( req.body )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.json( { message: 'Something went wrong', error: err } ) );
};

// Update a joke
exports.updateJoke = ( req, res ) => {
  Joke.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.json( { message: 'Something went wrong', error: err } ) );
}

// Delete a joke
exports.deleteJoke = ( req, res ) => {
  Joke.findByIdAndDelete( req.params.id )
    .then( ( joke ) => res.json( { joke: joke } ) )
    .catch( ( err ) => res.json( { message: 'Something went wrong', error: err } ) );
}
