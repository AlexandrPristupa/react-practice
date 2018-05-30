import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column'
import AddColumn from './addColumn';
import { getColumns } from './../actions/actions';
import { GET_COLUMNS } from './../actions/actionsTypes';


class ColumnList extends Component {


    render() {

        const columns = this.props.columns;

        return (
            <div>
                {
                    columns.map((column) => <Column column={column} key={column.id} /> )
                }
                <AddColumn />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        columns: state
    }
};

export default connect(mapStateToProps)(ColumnList);
