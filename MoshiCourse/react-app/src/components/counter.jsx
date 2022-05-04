import React, { Component } from "react";

class Counter extends Component {
	render() {
		const { onDelete, onIncrement, counter } = this.props;
		return (
			<React.Fragment>
				<div className='mt-2'>
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
					<button onClick={() => onIncrement(counter)} className='btn btn-secondary btn-sm'>
						increment
					</button>
					<button onClick={() => onDelete(counter.id)} className='btn btn-danger btn-sm m-2'>
						Delete
					</button>
				</div>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 bg-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;
