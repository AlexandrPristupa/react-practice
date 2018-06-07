import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column'
import AddColumn from './addColumn';

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
