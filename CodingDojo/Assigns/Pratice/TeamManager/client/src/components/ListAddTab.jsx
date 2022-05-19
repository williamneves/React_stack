import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useNavigate, useLocation } from 'react-router-dom';
// import CreateGame from './common/CreateGame';

const ListAddTab = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeItem, setActiveItem] = useState(location.pathname);

	useEffect(() => {
		setActiveItem(location.pathname);
	}, [location]);

	return (
		<React.Fragment>
			<MDBListGroup horizontal className='col-4 my-4'>
				<MDBListGroupItem
					tag='button'
					action
					active={activeItem === '/list' ? true : false}
					type='button'
					onClick={() => navigate('list')}>
					All Players
				</MDBListGroupItem>
				<MDBListGroupItem
					tag='button'
					action
					active={activeItem === '/new' ? true : false}
					type='button'
					onClick={() => navigate('new')}>
					Add New Player
				</MDBListGroupItem>
			</MDBListGroup>
			<Outlet />
			{/* <CreateGame /> */}
		</React.Fragment>
	);
};

export default ListAddTab;
