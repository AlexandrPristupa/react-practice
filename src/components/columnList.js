import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column'


class ColumnList extends Component {

    render() {

        const columns = this.props.columns;

        return (
            columns.map((column) => <Column column={column} key={column.id} /> )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        columns: state
    }
};

export default connect(mapStateToProps)(ColumnList);
