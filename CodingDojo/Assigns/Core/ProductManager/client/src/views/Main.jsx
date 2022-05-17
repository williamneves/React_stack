import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import ProductList from '../components/ProductList';
export default () => {
	// list with products state
	const [ products, setProducts ] = useState( [] );
	// Loading state
	const [ loaded, setLoading ] = useState( false );
	// submit handler
	const [ submited, setSubmited ] = useState( false );
	
	// get all products from the server
	useEffect( () => {
		axios.get( 'http://localhost:8000/api/product/all' )
			.then( res => {
				console.log(res.data)
				setProducts( res.data );
				setLoading( true );
			} )
			.catch( err => {
				console.log( err );
			} );
	}, [submited] );

	// submit handler
	const handleSubmit = () => {
		setSubmited( !submited );
	};

	return (
		<div>
			<ProductForm submited={handleSubmit} />
			<br />
			<hr />
			{loaded && <ProductList products={products} />}
		</div>
	);
};
