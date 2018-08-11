import React, { Component } from 'react';
import './../styles/App.css';

class AddColumn extends Component {

    handleKeyPress = (e) => {

        if(e.key === 'Enter') {

          let time = new Date();
          let id = time.getMilliseconds();

            this.props.onAddColumn({
                name: e.target.value,
                id: id,
                cards: []
              })

          e.target.value = '';
        }
    }

    render() {
        console.log(this.props)

        return (
            <input type="text" placeholder="add column" className="input" onKeyPress={this.handleKeyPress}/>
        );
    }
}

export default AddColumn;
