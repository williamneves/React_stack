// Export a hello world message
module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World',
	});
};

// Require Person model
const Person = require('../models/person.model');

// Export createPerson method
module.exports.createPerson = (request, response) => {
	const { name } = request.body;
	Person.create({
		name,
	})
		.then((person) => response.json(person))
		.catch((err) => response.status(400).json(err));
};

// Export getAllPersons method
module.exports.getAllPersons = ( request, response ) => {
    Person.find()
        .then( persons => response.json( persons ) )
        .catch( err => response.status( 400 ).json( err ) );
};

// Export getPersonById method
module.exports.getPersonById = ( request, response ) => {
    Person.findById( request.params.id )
        .then( person => response.json( person ) )
        .catch( err => response.status( 400 ).json( err ) );
}

// Export updatePersonById method
module.exports.updatePersonById = ( request, response ) => {
    Person.findByIdAndUpdate( request.params.id, request.body, { new: true } )
        .then( person => response.json( person ) )
        .catch( err => response.status( 400 ).json( err ) );
}

// Export deletePersonById method
module.exports.deletePersonById = ( request, response ) => {
    Person.findByIdAndDelete( request.params.id )
        .then( person => response.json( person ) )
        .catch( err => response.status( 400 ).json( err ) );
}
