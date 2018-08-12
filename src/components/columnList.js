import React, { Component, Fragment } from 'react';
import Column from './column'
import AddColumn from './addColumn';

class ColumnList extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.columns.map((column) => {
                        return (
                            <Column
                                column={column}
                                key={column.id}
                                onAddCard={this.props.addCard}
                                onDeleteColumn={this.props.deleteColumn}
                                onDeleteCard={this.props.deleteCard}
                            />
                        )
                    })
                }
                <AddColumn
                    onAddColumn={this.props.addColumn}
                />
            </Fragment>
        )
    }
}

export default ColumnList;
