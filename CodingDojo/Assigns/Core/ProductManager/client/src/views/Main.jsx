import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';
export default () => {
	// list with products state
	const [products, setProducts] = useState([]);
	// Loading state
	const [loaded, setLoading] = useState(false);
	// submit handler
	const [submited, setSubmited] = useState(false);
	// navigate hook
	const navigate = useNavigate();

	// get all products from the server
	useEffect(() => {
		axios
			.get('http://localhost:8000/api/product/all')
			.then((res) => {
				console.log(res.data);
				setProducts(res.data);
				setLoading(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [submited]);

	// submit handler
	const handleSubmit = () => {
		setSubmited(!submited);
	};

	// handle delete\
	const handleDelete = (id) => {
		setSubmited(!submited);
		axios
			.delete(`http://localhost:8000/api/product/${id}`)
			.then((res) => {
				console.log(res);
				setSubmited(!submited);
				navigate('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<ProductForm submited={handleSubmit} />
			<br />
			<hr />
			{loaded && <ProductList products={products} onDelete={handleDelete} />}
		</div>
	);
};
