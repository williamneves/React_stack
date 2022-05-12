import React, { Component } from 'react';
import Table from './common/Table/Table';
import Like from './common/like';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
	columns = [
		{
			path: 'title',
			label: 'Title',
			content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
		},
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{
			key: 'like',
			content: (movie) => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
		},
		{
			key: 'delete',
			content: (movie) => (
				<button onClick={() => this.props.onDelete(movie)} className='btn btn-danger btn-sm'>
					Delete
				</button>
			),
		},
	];

	raiseSort = (path) => {
		const sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path) {
			sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn.path = path;
			sortColumn.order = 'asc';
		}
		this.props.onSort(sortColumn);
	};

	render() {
		const { movies, sortColumn, onSort } = this.props;
		return <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />;
	}
}

export default MoviesTable;
