import React, { Component } from 'react';
import './../App.css';
import { addColumn } from './../actions/actions';
import { store } from '../config/store';

class AddColumn extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {

        if(e.key === 'Enter') {

          let time = new Date();
          let id = time.getMilliseconds();

          store.dispatch(addColumn({
            name: e.target.value,
            id: id,
            cards: []
          }));

          e.target.value = '';
        }
    }

    render() {

        return (
            <input type="text" placeholder="add column" className="input" onKeyPress={this.handleKeyPress}/>
        );
    }
}

export default AddColumn;
