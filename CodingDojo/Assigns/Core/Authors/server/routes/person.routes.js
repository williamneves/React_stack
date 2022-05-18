const PersonController = require('../controllers/person.controller');
module.exports = function ( app ) {
  // Welcome message
  app.get( '/api', PersonController.index );
  // Create a new person
  app.post( '/api/person', PersonController.createPerson );
  // Get all persons
  app.get( '/api/persons', PersonController.getAllPersons );
  // Get a person by id
  app.get( '/api/person/:id', PersonController.getPersonById );
  // Update a person by id
  app.put( '/api/person/:id', PersonController.updatePersonById );
  // Delete a person by id
  app.delete( '/api/person/:id', PersonController.deletePersonById );
  
};
