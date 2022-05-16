// request mongoose
const mongoose = require( 'mongoose' );

// create a schema
const PersonSchema = new mongoose.Schema(
	{
		firstName: { type: String },
		lastName: { type: String },
	},
	{ timestamps: true }
);

// export the schema
const Person = mongoose.model( 'Person', PersonSchema );
module.exports = Person;
