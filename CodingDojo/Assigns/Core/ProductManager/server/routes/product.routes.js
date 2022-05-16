const ProductControler = require('../controllers/product.controller');
module.exports = function ( app ) {
  // Welcome message
  app.get( '/api', ProductControler.index );
  // Create a new person
  app.post( '/api/product/create', ProductControler.createProduct );
};
