import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/Pagination';
import ListGroup from './common/ListGroup';
import { Paginate } from '../utils/Paginate';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './MoviesTable';
import _ from 'lodash';

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		sortColumn: { path: 'title', order: 'asc' },
	};

	componentDidMount() {
		const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
		this.setState({ movies: getMovies(), genres });
	}

	// Delete movie
	handleMovie = (id) => {
		const movies = this.state.movies.filter((movie) => movie._id !== id);
		this.setState({ movies });
	};

	handleLike = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleGenreSelect = (genre) => {
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	handleSort = (sortColumn) => {
		this.setState({ sortColumn });
	};

	getPagedData = () => {
		const { pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn } = this.state;

		const filtered =
			selectedGenre && selectedGenre._id
				? allMovies.filter((m) => m.genre._id === selectedGenre._id)
				: allMovies;

		const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

		const movies = Paginate(sorted, currentPage, pageSize);

		return { totalCount: filtered.length, data: movies };
	};
	render() {
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, sortColumn } = this.state;
		if (count === 0)
			return (
				<div className='notification is-warning'>
					<p>There are no movies in the database</p>
				</div>
			);

		const { totalCount, data: movies } = this.getPagedData();

		return (
			<div className='row'>
				<div className='col-3 pt-5'>
					<ListGroup
						items={this.state.genres}
						onItemSelect={this.handleGenreSelect}
						selectedItem={this.state.selectedGenre}
					/>
				</div>
				<div className='col'>
					<p className='fs-5'>
						This list has <span className='badge bg-secondary'>{totalCount}</span> movies of{' '}
						{this.state.selectedGenre ? this.state.selectedGenre.name : 'All Genres'}
					</p>
					<MoviesTable
						movies={movies}
						onLike={this.handleLike}
						onDelete={this.handleMovie}
						onSort={this.handleSort}
						sortColumn={sortColumn}
					/>
					<Pagination
						pageSize={pageSize}
						itemsCount={totalCount}
						onPageChange={this.handlePageChange}
						currentPage={currentPage}
					/>
				</div>
			</div>
		);
	}
}

export default Movies;
