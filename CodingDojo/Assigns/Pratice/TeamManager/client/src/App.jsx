import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PersonForm from './components/PersonForm';
import MyContext from './context/MyContext';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import ListAddTab from './components/ListAddTab';
import TablePlayers from './components/TablePlayers';
import AddPlayer from './components/AddPlayer';
import GamesList from './components/GamesList';
import TablePlayersinGame from './components/TablePlayersinGame';

function App() {
	const [themeColor, setThemeColor] = useState(
		sessionStorage.getItem('themeColor') ? sessionStorage.getItem('themeColor') : 'light-skin'
	);
	const [bgcolor, setBgcolor] = useState(
		sessionStorage.getItem('bgcolor') ? sessionStorage.getItem('bgcolor') : '#ffffff'
	);

	return (
		<MyContext.Provider value={{ setThemeColor, setBgcolor, themeColor, bgcolor }}>
			<MDBContainer fluid className={`${themeColor} p-0`}>
				{/* Website */}
				<Navbar title={'Team Manager'} />
				<MDBContainer breakpoint='md'>
					<Routes>
						<Route path='/' element={<ListAddTab />}>
							<Route path='list' element={<TablePlayers />} />
							<Route path='new' element={<AddPlayer />} />
						</Route>
						<Route path='/games' element={ <GamesList /> }>
							<Route path='game-:id' element={<TablePlayersinGame/>} />
						</Route>
					</Routes>
				</MDBContainer>
				{/* Endwebsite */}
			</MDBContainer>
		</MyContext.Provider>
	);
}

export default App;
