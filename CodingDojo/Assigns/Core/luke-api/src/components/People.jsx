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
import { Link } from 'react-router-dom';

const People = (props) => {
	const { results, setResults } = useContext(MyContext);
	const { id } = useParams();
	const [hometown, setHometown] = useState('');
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
			.get(`https://swapi.dev/api/people/${id}`)
			.then((res) => {
				// set the results to the response
				setResults(res.data);

				// make another request to get the hometown
				axios
					.get(res.data.homeworld)
					.then((res) => {
						setHometown(res.data);
						setIsLoading(false);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
				setResults({ error: true, message: err });
			});
	};

	const getPlanetId = ( url ) => {
		const urlArray = url.split( '/' ); // split the url into an array [https:,swapi.dev,api,planets,1,]
		return urlArray[ urlArray.length - 2 ];
	}

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
				<ListGroupItem>Gender: {results.gender}</ListGroupItem>
				<ListGroupItem>Height: {results.height} cm</ListGroupItem>
				<ListGroupItem>Mass: {results.mass} Kg</ListGroupItem>
				<ListGroupItem>Skin Color: {results.skin_color}</ListGroupItem>
				<ListGroupItem>Eye Color: {results.eye_color}</ListGroupItem>
				<ListGroupItem>
					<Link to={`/planets/${getPlanetId(hometown.url)}`}>
						Home Town: {hometown.name}
					</Link>
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default People;
