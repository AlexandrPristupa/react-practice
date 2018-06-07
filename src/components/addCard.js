import React, { Component } from 'react';
import './../App.css';
import { store } from '../config/store';
import { addCard } from "../actions/actions";

class AddCard extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {

      let time = new Date();
      let id = time.getMilliseconds();

      if(e.key === 'Enter') {
        store.dispatch(addCard({
          name: e.target.value,
          id: id,
          columnId: this.props.columnId
        }));
          e.target.value = '';
        }
    }

    render() {
        return (
            <input type="text" placeholder="add card" className="input" onKeyPress={this.handleKeyPress}/>
        );
    }
}

export default AddCard;
