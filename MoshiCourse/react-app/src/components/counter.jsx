import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
    }

    handleIncrement = () => {
        console.log('Increment Clicked');
        this.setState({ count: this.state.count + 1 });
    }

	render() {
		
		return (
			<React.Fragment>
                <div className="mx-auto mt-2 p-3 col-6">
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
				<button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm">increment</button>
                </div>
			</React.Fragment>
		);
	}

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;
