import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
    }

	render() {
		
		return (
			<React.Fragment>
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
				<button className="btn btn-secondary btn-sm" onClick={this.state.count++}>increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                </ul>
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

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }

}

export default Counter;
