import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const SearchResult = ({ result, index }) => {
	const [pokemon, setPokemon] = useState(null);
	const { name, url } = result;

	// call api to get pokemon details, set pokemon state everytime the result changes
	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				setPokemon(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [name]);

	return (
		<div className='col'>
			<Card className='mb-4'>
				<Card.Img variant='top' src={pokemon ? pokemon.sprites.front_default : 'poke-n'} />
				<Card.Body>
					<Card.Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
				</Card.Body>
				<ListGroup className='list-group-flush'>
					<Card.Header>
						<b>Types</b>
					</Card.Header>
					<ListGroupItem>
						{pokemon
							? pokemon.types.map((type, i) => {
									return (
										<span key={i} className='fst-italic'>
											{type.type.name}
											{i != pokemon.types.length - 1 ? ', ' : ''}
										</span>
									);
							  })
							: null}
					</ListGroupItem>
					<Card.Header>
						<b>Abilities</b>
					</Card.Header>
					<ListGroupItem>
						{pokemon
							? pokemon.abilities.map((abilities, i) => {
									return (
										<span key={i} className='fst-italic'>
											{abilities.ability.name}
											{i != pokemon.abilities.length - 1 ? ', ' : ''}
										</span>
									);
							  })
							: null}
					</ListGroupItem>
				</ListGroup>
				<Card.Footer>
					<Card.Link href='#'>Card Link</Card.Link>
					<Card.Link href='#'>Another Link</Card.Link>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default SearchResult;
