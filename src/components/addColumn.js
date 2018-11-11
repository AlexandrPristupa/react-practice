import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
              });

          e.target.value = '';
        }
    };

    render() {
        return (
            <input
                type="text"
                placeholder="Add column..."
                className="add-list-input"
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}

AddColumn.propTypes = {
  onAddColumn: PropTypes.func.isRequired
};

export default AddColumn;
