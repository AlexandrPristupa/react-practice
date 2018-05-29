import React, { Component } from 'react';
import './../App.css';


class Card extends Component {

    render() {

        return (
            <div className="card">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Card;