import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default ({ products, onDelete }) => {
	const navigate = useNavigate();
	

	return (
		<div style={{ margin: 'auto', width: '177px' }}>
			{/* List props with map */}
			{products.map((product) => {
				return (
					<div key={product._id}>
						<h3>
							<Link to={`/product/${product._id}`}>{product.Title}</Link>
						</h3>
						<p>{product.Price}</p>
						<p>{product.Description}</p>
						<p>
							<Link to={`/product/${product._id}/edit`}>Edit</Link>
            </p>
            <button onClick={() => onDelete(product._id)}>Delete</button>
						<hr />
					</div>
				);
			})}
		</div>
	);
};
