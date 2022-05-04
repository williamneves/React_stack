import React, { Component } from "react";

class Counter extends Component {
	render() {
		const { onDelete, onIncrement, counter, onDecrement } = this.props;
		return (
			<React.Fragment>
				<div className='row my-3'>
					<div className='col-1 p-0 d-flex align-items-center justify-content-center'>
						<span className={this.getBadgeClasses()}>{this.	formatCount()}</span>
					</div>
					<div className='col p-0'>
						<button onClick={() => onIncrement(counter)} className='btn btn-secondary btn-sm fw-bold'>
							+
						</button>
						<button onClick={() => onDecrement(counter)} className='btn btn-secondary btn-sm mx-2 fw-bold' disabled={counter.value === 0 ? "disabled" : ""}>
							-
						</button>
						<button onClick={() => onDelete(counter.id)} className='btn btn-danger btn-sm fw-bold'>
							X
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = 'badge bg-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;
