import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildDetails extends Component {
  
  render() {
    if (!this.props.child) {
      return (<div>Select a user...</div>);
    }
    return (
      <div>
      <ul>
        {this.props.child.chores.map((chore) => {
          return (
            <li key={chore.title}>{chore.title}</li>
          );
        })}
      </ul>
      </div>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    child: state.activeChild
  };
};

export default connect(mapStateToProps)(ChildDetails);