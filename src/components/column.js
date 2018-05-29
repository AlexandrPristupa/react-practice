import React, { Component } from 'react';
import Card from './card';
import './../App.css';
import AddCard from './addCard';

class Column extends Component {

    render() {

        console.log(this.props);

        return (
            <div className="column">
                <p>{ this.props.column.name }</p>
                {
                    this.props.column.cards.map((card) => <Card name={card.name} key={card.id} /> )
                }
                <AddCard />
            </div>
        );
    }
}

export default Column;
