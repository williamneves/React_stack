import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/Pagination';
import { Paginate } from '../utils/Paginate';

class Movies extends Component {
	state = {
		movies: getMovies(),
		pageSize: 4,
		currentPage: 1,
	};

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

	render() {
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, movies: allMovies } = this.state;
		if (count === 0)
			return (
				<div className='notification is-warning'>
					<p>There are no movies in the database</p>
				</div>
			);

		const movies = Paginate(allMovies, currentPage, pageSize);

		return (
			<React.Fragment>
				<p className='is-size-6'>
					This list has <span className='tag is-info'>{this.state.movies.length}</span> movies
				</p>
				<table className='table is-striped is-fullwidth is-narrow is-align-items-center'>
					<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{movies.map((movie) => (
							<tr key={movie._id}>
								<td key={movie.title}>{movie.title}</td>
								<td key={movie.genre.name}>{movie.genre.name}</td>
								<td key={movie.numberInStock}>{movie.numberInStock}</td>
								<td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
								{/* like component */}
								<td>
									<Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
								</td>
								<td>
									<button
										onClick={() => this.handleMovie(movie._id)}
										className='button is-danger is-inverted'
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tfoot>
				</table>
				<Pagination
					pageSize={pageSize}
					itemsCount={count}
					onPageChange={this.handlePageChange}
					currentPage={currentPage}
				/>
			</React.Fragment>
		);
	}
}

export default Movies;
