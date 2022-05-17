const ProductControler = require('../controllers/product.controller');
module.exports = function ( app ) {
  // Welcome message
  app.get( '/api', ProductControler.index );
  // Create a new person
  app.post( '/api/product/create', ProductControler.createProduct );
  // Get all products
  app.get( '/api/product/all', ProductControler.getProducts );
  // Get a single product
  app.get( '/api/product/:id', ProductControler.getProduct );
  // Update a product
  app.put( '/api/product/:id', ProductControler.updateProduct );
  // Delete a product
  app.delete( '/api/product/:id', ProductControler.deleteProduct );
};
