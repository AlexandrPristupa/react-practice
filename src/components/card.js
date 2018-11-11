import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/App.css';


class Card extends Component {
    handleDeleteCard = () => {
        this.props.onDeleteCard({
            cardId: this.props.cardId, 
            columnId: this.props.columnId
        })
    };

    render() {
        return (
            <div className="card" style={{ background: this.props.color }}>
                <p>{this.props.name}</p>
                <button onClick={this.handleDeleteCard}>x</button>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    onDeleteCard: PropTypes.func.isRequired
};

export default Card;
