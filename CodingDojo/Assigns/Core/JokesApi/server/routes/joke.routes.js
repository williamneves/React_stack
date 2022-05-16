// Call the controllers
const jokeController = require( '../controllers/joke.controller' );

// Export the routes
module.exports = ( app ) => {
  // Find all jokes
  app.get( '/api/jokes/', jokeController.findAllJokes );

  // Find a joke by id
  app.get( '/api/jokes/:id', jokeController.findJokeById );

  // Update a joke
  app.put( '/api/jokes/:id/update', jokeController.updateJoke );

  // Create new Joke
  app.post( '/api/jokes/create', jokeController.createJoke );

  // Delete a joke
  app.delete( '/api/jokes/:id/delete', jokeController.deleteJoke );
};