import './App.css';
import React from 'react';
import { Switch, Route, Link, redirect, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './components/Search';
import MyContext from './context/MyContext';
import People from './components/People';
import Notfound from './components/Notfound';
import Planet from './components/Planet';

function App() {
	const [search, setSearch] = React.useState({
		type: '',
		id: '',
	});
	const [results, setResults] = React.useState([]);
	const [redirect, setRedirect] = React.useState(false);

	return (
		<MyContext.Provider
			value={{
				search,
				setSearch,
				results,
				setResults,
				redirect,
				setRedirect,
			}}>
			<Container fluid='md'>
				<Row className='mx-auto'>
					<Col className='mx-auto'>
						<Col className='col-9 mt-5 mx-auto'>
							<h1 className='text-center mb-3'>Search</h1>
							<Search />
							<Switch>
								<Route exact path='/people/:id'>
									<People />
								</Route>
								<Route exact path='/planets/:id'>
									<Planet />
								</Route>
								<Route exact path='/' />
								<Route exact path='/not-found'>
									<Notfound />
								</Route>
								<Redirect to='/not-found' />
							</Switch>
						</Col>
					</Col>
				</Row>
			</Container>
		</MyContext.Provider>
	);
}

export default App;
