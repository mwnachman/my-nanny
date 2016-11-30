import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAccount } from '../../actions/actions';
import Dashboard from '../../containers/dashboard';
import './home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var fullDate = year + '-' + month + '-' + day;

    const amzToken = localStorage.getItem('amazon-token') ? localStorage.getItem('amazon-token') : 
      ((((window.location.href).split('='))[1]).split('&'))[0];

    this.props.getAccount(amzToken, fullDate);

  }

  render() {
    return (
    <div className='home'>
      <Dashboard />
      <hr/>
    </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    account: state.account,
    chores: state.chores
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ getAccount: getAccount }, dispatch);
};

Home.contextTypes = {
  store: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
