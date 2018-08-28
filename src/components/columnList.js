import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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

ColumnList.propTypes = {
  addCard: PropTypes.func.isRequired,
  deleteColumn: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired
};

export default ColumnList;
