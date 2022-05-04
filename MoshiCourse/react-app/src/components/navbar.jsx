import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className='navbar navbar-dark bg-dark'>
					<div className='container'>
						<a className='navbar-brand' href='#'>
							Navbar
							<span className='ms-1 badge badge-pill bg-light text-dark'>{this.props.counter}</span>
						</a>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;
