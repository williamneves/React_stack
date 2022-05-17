import React from 'react';
import { Link } from 'react-router-dom';
export default ({products}) => {
	//onChange to update firstName and lastName
	return (
		<div style={{ margin: 'auto', width: '177px' }}>
      {/* List props with map */ }
      {
        products.map(product => {
          return (
            <div key={product._id}>
              <h3><Link to={`/product/${product._id}`}>{product.Title}</Link></h3>
              <p>{product.Price}</p>
              <p>{ product.Description }</p>
              <hr/>
            </div>
          )
        })
      }
		</div>
	);
};
