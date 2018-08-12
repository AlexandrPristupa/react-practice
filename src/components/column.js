import React, { Component } from 'react';
import Card from './card';
import './../styles/App.css';
import AddCard from './addCard';

class Column extends Component {
    handeleDeleteColumn = () => {
        this.props.onDeleteColumn(this.props.column.id);
    }

    render() {
        return (
            <div className='column'>
                <div className='column-title-wrap'>
                    <h5>{ this.props.column.name }</h5>
                    <button onClick={this.handeleDeleteColumn}>x</button>
                </div>
                {
                   this.props.column.cards.map((card) => {
                        return (
                            <Card
                                onDeleteCard={this.props.onDeleteCard}
                                cardId={card.id}
                                columnId={this.props.column.id}
                                name={card.name}
                                key={card.id}
                            /> 
                        )
                    }) 
                }
                <AddCard onAddCard={this.props.onAddCard} columnId={this.props.column.id} />
            </div>
        );
    }
}

export default Column;
