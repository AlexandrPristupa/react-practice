import React, { Component } from 'react';
import './../App.css';
import { addCard } from './../actions/actions';


class AddColumn extends Component {

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
            <input type="text" placeholder="add column" className="input" onKeyPress={this.handleKeyPress}/>
        );
    }
}

export default AddColumn;
