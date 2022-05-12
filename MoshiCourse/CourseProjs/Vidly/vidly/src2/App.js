import "./App.css";
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import NotFound from './components/NotFound';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NavBar from './components/NavBar';
import MoviesForm from './components/MoviesForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/registerForm';

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<main className='container-md mt-4'>
				<Switch>
					<Route path="/login" component={LoginForm} />
					<Route path="/register" component={RegisterForm} />
					<Route path="/movies/:id" component={MoviesForm} />
					<Route path='/movies' component={Movies}></Route>
					<Route path='/customers' component={Customers}></Route>
					<Route path='/rentals' component={Rentals}></Route>
					<Route path='/not-found' component={NotFound}></Route>
					<Redirect exact from='/' to='/movies'></Redirect>
					<Redirect to='/not-found'></Redirect>
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;