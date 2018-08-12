import React, { Component } from 'react';
import ColumnList from '../components/columnList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions'
import '../styles/reset.css';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
        <ColumnList {...this.props} />
    );
  }
}

const mapStateToProps = state => {
      return {
        columns: state.columns
      }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
