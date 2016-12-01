import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const mapStateToProps = function(state) {
  return {
    account: state.account,
    children: state.children,
    chores: state.chores
  };
};

// const mapDispatchToProps = function(dispatch) {
//   return bindActionCreators({ activateChild: activateChild }, dispatch);
// };

class Dashboard extends Component {

  createChildrenList() {
    if (Object.keys(this.props.chores.list).length === 0) {
      return (
        <li>
          Loading...
        </li>
      );
    }
    
    return (
      Object.keys(this.props.children).map((child) => {
        return (
          <li key={child}>
            <span className='status'>
              <img src={this.props.children[child].photo} className='avatar'/>
              {this.props.children[child].name}
              {this.props.chores.list[child].map((chore) => {
                return (
                  <li key={'chore' + chore.id}>
                    <span className='status'>
                      {chore.title}
                      <br/>              
                    </span>
                  </li>
                );
              })}
              <br/>              
            </span>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.account.username + '\'s Dashboard'}</h1>
        <br/>
        <hr/>
        <br/>
        <ul>
          {this.createChildrenList()}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
