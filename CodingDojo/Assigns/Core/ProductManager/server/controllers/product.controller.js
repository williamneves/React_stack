// Export a hello world message
module.exports.index = (request, response) => {
	response.json({
		message: 'Hello World',
	});
};

// Require Person model
const Product = require('../models/product.model');

// Export createProduct method
module.exports.createProduct = (request, response) => {
	const { Title, Price, Description } = request.body;
	Product.create({
		Title,
		Price,
		Description,
	})
		.then((Product) => response.json(Product))
		.catch((err) => response.json(err));
};

// Get all products
module.exports.getProducts = ( request, response ) => {
	Product.find()
		.then( products => response.json( products ) )
		.catch( error => response.json( error ) );
}

// Get a single product
module.exports.getProduct = (request, response) => {
	Product.findById(request.params.id)
		.then((product) => response.json(product))
		.catch((error) => response.json(error));
};

// Edit a product
module.exports.updateProduct = (request, response) => {
	Product.findByIdAndUpdate(request.params.id, request.body, { new: true })
		.then((product) => response.json(product))
		.catch((error) => response.json(error));
};

// Delete a product
module.exports.deleteProduct = ( request, response ) => {
	Product.findByIdAndDelete( request.params.id )
		.then( product => response.json( product ) )
		.catch( error => response.json( error ) );
}