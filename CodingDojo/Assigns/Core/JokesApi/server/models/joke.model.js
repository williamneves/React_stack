// Create the const mongoose
const mongoose = require( 'mongoose' );

// Create the Joke schema model
const JokeSchema = new mongoose.Schema( {
  setup: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
} );

// Create the Joke model
const Joke = mongoose.model( 'Joke', JokeSchema );

// Export the Joke model
module.exports = Joke;