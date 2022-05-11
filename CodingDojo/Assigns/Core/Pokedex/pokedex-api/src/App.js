import './App.css';
import { createContext, useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import MyContext from './context/MyContext';
import axios from 'axios';
import SearchResult from './components/SearchResult';

function App() {
	const [search, setSearch] = useState('');
	const [seachResult, setseachResult] = useState([]);
	const [pagination, setPagination] = useState({
		currentPage: 1,
		pageSize: 10,
		totalPages: 1,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (search === '') {
			console.log('empty');
			// if it's empty, set the state to empty
			setseachResult([]);
		} else {
			// if it's not empty, call the API
			axios
				.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
				.then((res) => {
					// filter the result with the search
					// console.log(res.data.results, search);
					const result = res.data.results.filter((pokemon) =>
						pokemon.name.includes(search.trim().toLowerCase())
					);

					// console.log(result);
					// set the result in the state
					setseachResult(result);
				})
				.catch((err) => console.log(err));
		}
	};
	return (
		<div className='container-md'>
			<div className='mx-auto my-5'>
				<h1 className='display-5 text-center mb-3'>Pokemon Api Search</h1>
				<hr className='w-50 mx-auto' />
				<MyContext.Provider
					value={{
						search,
						setSearch,
						handleSubmit,
					}}>
					{/* // search input */}
					<SearchInput />
					<hr className='col-9 mx-auto' />
					<div className='col-9 mx-auto row row-cols-3 gx-3 d-flex justify-content-start row-no-gutters'>
						{/* // search result */}
						{seachResult.length > 0 ? (
							seachResult.map((result, i) => {
								return <SearchResult key={i} result={result} index={i} />;
							})
						) : (
							<div className='text-center'>
								<h1 className='display-5'>No Results</h1>
							</div>
						)}
					</div>
				</MyContext.Provider>
			</div>
		</div>
	);
}

export default App;
