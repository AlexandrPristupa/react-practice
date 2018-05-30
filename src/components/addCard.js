import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux';
import { addCard } from './../actions/actions';

class AddCard extends Component {

    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {

        if(e.key === 'Enter') {
            console.log(e.target.value)
        }
    }

    render() {
        return (
            <input type="text" placeholder="add card" className="input" onKeyPress={this.handleKeyPress}/>
        );
    }
}

export default connect()(AddCard);
