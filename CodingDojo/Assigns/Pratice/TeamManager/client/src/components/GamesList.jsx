import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const GamesList = () => {
	const [games, setGames] = React.useState([]);
	const [players, setPlayers] = React.useState([]);
	const location = useLocation();
	const [activeItem, setActiveItem] = useState(location.pathname);

	useEffect(() => {
		setActiveItem(location.pathname);
	}, [location]);
	const navigate = useNavigate();

	// get all games
	useEffect(() => {
		axios
			.get('http://localhost:8000/api/games')
			.then((res) => {
				setGames(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<React.Fragment>
			<h3 className='text-center'>Player Status</h3>
			<MDBListGroup horizontal className='col-6 my-4 mx-auto'>
				{games.map((game) => {
					return (
						<MDBListGroupItem
							key={game._id}
							tag='button'
							action
							active={activeItem === `/games/game-${game._id}` ? true : false}
							className={`text-center ${
								activeItem === `/games/game-${game._id}` ? 'text-light' : ''
							}`}
							type='button'
							onClick={() => navigate(`game-${game._id}`)}>
							{game.name}
						</MDBListGroupItem>
					);
				})}
      </MDBListGroup>
      <Outlet />
		</React.Fragment>
	);
};

export default GamesList;
