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
