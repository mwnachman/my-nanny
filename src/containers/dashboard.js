import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activateChild } from '../actions/activeChild';
import { ChildDetails } from './childDetails';

const mapStateToProps = function(state) {
  return {
    dashboard: state.dashboard
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ activateChild: activateChild }, dispatch);
};

class Dashboard extends Component {
  
  createChildrenList() {
    return (
      this.props.dashboard.children.map((child) => {
        return (
          <li key={child.id} 
            onClick={() => { this.props.activateChild(child); }}>
              <img src={child.photo} className='avatar'/>
              <span className='status'>
                {child.name} 
                {child.checkedIn ? 
                  <span className='isHome'> has checked in.</span> 
                  : <span className='isNotHome'> has not checked in.</span>
                }
              </span>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <br/>
        <h1>{this.props.dashboard.account.username + '\'s Dashboard'}</h1>
        <br/>
        <ul>
          {this.createChildrenList()}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
