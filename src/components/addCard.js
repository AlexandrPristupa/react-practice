import React, { Component } from 'react';
import './../styles/App.css';

class AddCard extends Component {
    handleKeyPress = (e) => {
      let time = new Date();
      let id = time.getMilliseconds();

      if(e.key === 'Enter') {
        this.props.onAddCard({
            name: e.target.value,
            id: id,
            columnId: this.props.columnId
          });
          e.target.value = '';
        }
    }

    render() {
        console.log(this.props);

        return (
            <input type="text" placeholder="Add card..." className="add-card-input" onKeyPress={this.handleKeyPress}/>
        );
    }
}

export default AddCard;
