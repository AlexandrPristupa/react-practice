import React, { Component, Fragment } from 'react';
import Column from './column'
import AddColumn from './addColumn';

class ColumnList extends Component {
    render() {

        console.log(this.props);

        return (
            <Fragment>
                {
                    this.props.columns.map((column) => {
                        return( 
                            <Column
                                column={column}
                                key={column.id}
                                onAddCard={this.props.addCard}
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
