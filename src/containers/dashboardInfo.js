import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { activateChild } from '../actions/activeChild';

var mapStateToProps = function(state) {
  return {
    dashboard: state.dashboard
  };
};


class dashboardInfo extends Component {
  
  createChildrenList() {
    return (
      this.props.dashboard.children.map((child) => {
        return (
          <li key={child.id}>
            <img src={child.photo} />
            {child.name}
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div>
        Dashboard Info!
        <ul>
          {this.createChildrenList()}
        </ul>
        <hr />
        <hr />
        <hr />
      </div>
    );
  }
}

export default connect(mapStateToProps)(dashboardInfo);
