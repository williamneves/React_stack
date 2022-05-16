// Export a hello world message
module.exports.index = ( request, response ) => {
	response.json({
		message: 'Hello World',
	});
};

// Require Person model
const Person = require('../models/person.model');

// Export createPerson method
module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
      firstName,
      lastName
  })
      .then(person => response.json(person))
      .catch(err => response.json(err));
}
