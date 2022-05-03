import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.data.age,
        };
    }

        render() {
            return(
                <div style={{marginLeft:30}}>
                <h4>{this.props.data.firstName}, { this.props.data.firstName }</h4>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.data.hairColor}</p>
                <input id='inputage' type='number' defaultValue={1}  min={1} max={5}/>
                <button onClick={ () => this.incrementAge() }>Increment Age</button>
            </div>
        );
    }
    incrementAge = () => {
        let amount = parseInt(document.getElementById('inputage').value);
        this.setState({age: this.state.age + amount});
    }
}

export default PersonCard;
