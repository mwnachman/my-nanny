import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChild } from '../actions/children';

class ChildrenList extends Component {
  
  createChildrenList() {
    return this.props.children.map((children) => {
      return (
        <li key={children.name}
          onClick={() => this.props.selectChild(children)}>
          {children.name}
        </li>
      );
    });
  }

  render () {
    return (
      <ul>
        {this.createChildrenList()}
      </ul>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    children: state.children
  };
};

var matchDispatchToProps = function(dispatch) {
  return bindActionCreators({ selectChild: selectChild }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ChildrenList);
