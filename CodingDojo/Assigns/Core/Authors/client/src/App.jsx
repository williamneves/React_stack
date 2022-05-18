import React from 'react';
import { useContext, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import MyContext from './context/MyContext';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import Main from './views/Main';
import AddAuthor from './components/AddAuthor';
import { useNavigate } from 'react-router-dom';
import EditAuthor from './components/common/EditAuthor';

function App() {
	const [themeColor, setThemeColor] = useState(
		sessionStorage.getItem('themeColor') ? sessionStorage.getItem('themeColor') : 'light-skin'
	);
	const [bgcolor, setBgcolor] = useState(
		sessionStorage.getItem('bgcolor') ? sessionStorage.getItem('bgcolor') : '#ffffff'
	);

	// Use navigate to redirect to another page
	const navigate = useNavigate();

	return (
		<MyContext.Provider value={{ setThemeColor, setBgcolor, themeColor, bgcolor }}>
			<MDBContainer fluid className={`${themeColor} p-0`}>
				{/* Website */}
				<Navbar title={'Fav Authors'} />
				<MDBContainer breakpoint='md'>
					<Routes>
						<Route path='/' element={<Main />}></Route>
						<Route path='/add' element={<AddAuthor />} />
						<Route path='/author/:id/edit' element={<EditAuthor />} />
					</Routes>
				</MDBContainer>
				{/* Endwebsite */}
			</MDBContainer>
		</MyContext.Provider>
	);
}

export default App;
