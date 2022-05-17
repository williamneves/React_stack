import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductUpdate = () => {
	const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

	// get product from the server
	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/product/${id}`)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	// handdle Product update
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8000/api/product/${id}`, product)
      .then( ( res ) => {
				console.log(res);
        navigate(`/product/${id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div style={{ margin: 'auto', width: '177px' }}>
			<form onSubmit={handleSubmit}>
				<p>
					Edit
					<label>Title</label>
					<br />
					<input
						type='text'
						onChange={(e) => {
							setProduct({ ...product, Title: e.target.value });
						}}
						value={product.Title}
					/>
				</p>
				<p>
					<label>Price</label>
					<br />
					<input
						type='text'
						onChange={(e) => {
							setProduct({ ...product, Price: e.target.value });
						}}
						value={product.Price}
					/>
				</p>
				<p>
					<label>Descripton</label>
					<br />
					<input
						type='text'
						onChange={(e) => {
							setProduct({ ...product, Description: e.target.value });
						}}
						value={product.Description}
					/>
				</p>
				<input type='submit' />
			</form>
		</div>
	);
};

export default ProductUpdate;
