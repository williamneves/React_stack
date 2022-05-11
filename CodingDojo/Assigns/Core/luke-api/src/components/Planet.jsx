import React from 'react';
// Import MyContext
import MyContext from '../context/MyContext';
// Import useContext
import { useContext } from 'react';
// use parameter to access the context
import { useParams } from 'react-router';
// use axios
import axios from 'axios';
// import bootstrap components
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import useEffect
import { useEffect, useState } from 'react';

const Planet = (props) => {
	const { results, setResults } = useContext(MyContext);
	const { id } = useParams();
	const [isloading, setIsLoading] = useState(true);

	// useEffect
	useEffect(() => {
		console.log('argument');
		handleResult();
	}, [id]);
	// handleResult
	const handleResult = () => {
		// call api starwars with the id and type with axios
		axios
			.get(`https://swapi.dev/api/planets/${id}/`)
			.then((res) => {
				// set the results to the response
				console.log(res.data);
				setResults(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setResults({ error: true, message: err });
			});
	};

	// if the isloading is true show the loading
	if (isloading) {
		return (
			<div className='mx-auto my-4 row flex-row justify-content-center'>
				<div className='lds-roller col-2'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}

	// results.error is true if there is an error
	if (results.error) {
		return (
			<div className='mx-auto my-4 row flex-row justify-content-center'>
				{/* Image with  */}
				<img
					src='https://www.pngkey.com/png/full/189-1896739_lego-obi-wan-kenobi-vector-lego-obi-wan.png'
					className='w-25 text-center my-3'
					alt='error'
				/>
				<h3 className='text-center fst-italic'>These aren't the droids you're looking for</h3>
			</div>
		);
	}

	return (
		<Card className='mx-auto mt-5' style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>Name: {results.name}</Card.Title>
			</Card.Body>
			<ListGroup className='list-group-flush'>
				<ListGroupItem>Terrain: {results.terrain}</ListGroupItem>
				<ListGroupItem>Diameter: {results.diameter} Km</ListGroupItem>
				<ListGroupItem>Orbital period: {results.orbital_period} days</ListGroupItem>
				<ListGroupItem>Population: {results.population}</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default Planet;
