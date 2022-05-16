// request mongoose
const mongoose = require( 'mongoose' );

// create a schema
const ProductSchema = new mongoose.Schema(
	{
		Title: { type: String },
		Price: { type: Number },
		Description: { type: String },
	},
	{ timestamps: true }
);

// export the schema
const Product = mongoose.model( 'Product', ProductSchema );
module.exports = Product;
