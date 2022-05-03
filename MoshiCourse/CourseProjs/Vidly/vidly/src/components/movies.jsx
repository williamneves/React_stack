import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
	state = {
		movies: getMovies(),
	};
    
    // Delete movie
    handleMovie = (id) => {
        const movies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({ movies });
    };

    renderMoviesTable(){
        if (this.state.movies.length === 0) {
            return (
                <div className="notification is-warning">
            <p>There are no movies in the database</p>
            </div>
            );
        }
        else{
            return (
                <React.Fragment>
                <table className="table is-striped table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => (
                            <tr key={movie._id}>
                                <td key={movie.title}>{movie.title}</td>
                                <td key={movie.genre.name}>{movie.genre.name}</td>
                                <td key={movie.numberInStock}>{movie.numberInStock}</td>
                                <td key={movie.dailyRentalRate}>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.handleMovie(movie._id)} className="button is-danger is-inverted">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    <p className="is-size-6">This list has <span className="tag is-info">{this.state.movies.length}</span> movies</p>
                </React.Fragment>
            );
        }
    }
    
	render() {
        return (
            <React.Fragment>
				<div className='table-container'>
					{this.renderMoviesTable()}
				</div>
			</React.Fragment>
		);
	}
}

export default Movies;
