import React, { Component } from 'react';
import './../styles/App.css';


class Card extends Component {
    handleDeleteCard = () => {
        this.props.onDeleteCard({
            cardId: this.props.cardId, 
            columnId: this.props.columnId
        })
    }

    render() {
        return (
            <div className="card">
                <p>{this.props.name}</p>
                <button onClick={this.handleDeleteCard}>x</button>
            </div>
        );
    }
}

export default Card;
