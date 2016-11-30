import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAccount } from '../../actions/account';
import './account.css'; 
import config from '../../config';
import $ from 'jquery';
import { Row, Col, Grid, Form, FormControl, Button } from 'react-bootstrap';
// import { Field, reduxForm } from 'redux-form';

import IndividualKidBrief from '../IndividualKidBrief/index';


class Account extends Component {

  constructor(props) {
    super(props);

    this.state = {
      amazonToken: 'Atza%7CIwEBIGXFfppgf9xIf0KrY8Wtxhoc7J' +
        'aI72BnsDDv2PsHNhnm5cJ50BKvD0yg5wYn3xWeCN6hAYqHbmbFE5X' +
        'edNARtBanVBpUYcAkhe7lOfdT7cuBACryaucIlaZwArtLx78yqXyuc' +
        'EIu_2IX_w0MqDIz8CSHSTuiX-Gx_4QDputnV7-YuBS2Wc7LnDkxqT4' +
        'dA7eOK9phxu5H7xyyjroK6ybd-qkEhSF4akhiK5SyiESWOSM4Ldyg48' +
        'g5XwdcM5OhN2OWjHOmTFT-qQ4sE1j-cyq74z24TfCdWzei-fDsUu4Bc' +
        '3QTMao2WZCvhj48NRgYPojXpP54rUujYPhEA5IVuDRrfBgKWnTVKwN5P' +
        'NB0veEhTuyMNNuiHSxe_BqO_soG-7qgOiJ0mRsVVNY6oqcf7mIXpwDDOs' +
        'gxdqyKNjW8Z1yRXVR3fGNRTI8pFbIBv4ObNxfftDj8JsTQ08ITF1p5_XN' +
        'jHcufLaf-vELHC8N9OTBhKBurO8hG9d8VYVtyi_eyL_Nw3YIG1yeRIMMJd2oh' +
        'VzOuD4QEhABJ5fn0-Ma1v2LSLQ_oNFrwX5FlncsUwhgtDM4yiOY',
      email: this.props.account.email,
      phone: this.props.account.phone, 
      username: this.props.account.username,
      timezone: this.props.account.timezone,
      children: [],
      editable: false,
    };
  }

  componentWillMount() {
    this.context.store.dispatch(getAccount());
    // console.log('store.getState in will mount', this.context.store.getState());
  }

  // componentDidMount() {
  //   console.log('store.getState in did mount', this.context.store.getState());
  // }

  handleInputChange(e) {
    console.log('name', this.state.username);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  updateAccount(e) {
    // console.log('in update Account');
    // console.log('this.state at start of update account', this.state);
    const signupData = {
      'account': {
        'phone': '6462709704'
      }
    };
    $.ajax({
      url: 'https://localhost:1337/api/account?access_token=' + this.state.amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: signupData,
      complete: function (data) {
        console.log('Updated account:' + JSON.stringify(data));
      }
    });
    this.setState({ editable: false });
  }

  // updateAccount(e) {

  // return dispatch => {
  //   const signupData = {
  //     'account': {
  //       'amazonId': this.state.amazonId,
  //       'username': this.state.username,
  //       'phone': this.state.phone,
  //       'email': this.state.email,
  //       'timeZone': this.state.timezone
  //     }
  //   };
  //   dispatch(requestPosts(subreddit))
  //   return fetch(`http://www.reddit.com/r/${subreddit}.json`)
  //     .then(response => response.json())
  //     .then(json => dispatch(receivePosts(subreddit, json)))
  //   }
  // }


  makeEditable(e) {
    console.log('in make editable', this.props.store);
    this.setState({ editable: true });
  }

  render() {
    return (
      <div className='account'>
        <h1>Your Account</h1>
        <h2>Account Details</h2>
        {(this.state.editable === false && 
        <div>
          <Grid className='well'>
            <Row>
              <Col xs={4} md={3}>Name</Col>
              <Col xs={6} md={6}>{this.props.account.username}</Col>
            </Row>
            <Row className='gridRow'>
              <Col xs={4} md={3}>Email</Col>
              <Col xs={6} md={6}>{this.props.account.email}</Col>
            </Row>
            <Row className='gridRow'>
              <Col xs={4} md={3}>Phone Number</Col>
              <Col xs={6} md={6}>{this.props.account.phone}</Col>
            </Row>
            <Row className='gridRow'>
              <Col xs={4} md={3}>Time Zone</Col>
              <Col xs={6} md={6}>{this.props.account.timezone}</Col>
            </Row>
            <Row>
              <Button className='editButton' 
                onClick={this.makeEditable.bind(this)}>Edit Account</Button>
            </Row>
          </Grid>
          </div>
        )}
        {(this.state.editable === true && 
        <Form>
          <Grid className='well'>
            <Row>
              <Col xs={4} md={3}>Name</Col>
              <Col xs={6} md={6}><FormControl type='text' name='username' defaultValue={this.props.account.username}
                onChange={this.handleInputChange.bind(this)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={3}>Email</Col>
              <Col xs={6} md={6}><FormControl type='text' name='email' defaultValue={this.props.account.email}
                onChange={this.handleInputChange.bind(this)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={3}>Phone Number</Col>
              <Col xs={6} md={6}><FormControl type='text' name='phone' defaultValue={this.props.account.phone}
                onChange={this.handleInputChange.bind(this)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={3}>Time Zone</Col>
              <Col xs={6} md={6}>
                <select name='timezone' onChange={this.handleInputChange.bind(this)}>
                  <option value='EST'>EST / Eastern / UTC-5</option>
                  <option value='CST'>CST / Central / UTC-6</option>
                  <option value='MST'>MST / Mountain / UTC-7</option>
                  <option value='PST'>PST / Pacific / UTC-8</option>
                  <option value='HST'>HST / Hawaii / UTC-10</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Button className='editButton' onClick={this.updateAccount.bind(this)}>Update Account</Button>
            </Row>
          </Grid>
        </Form>
        )}
        {(this.state.children.length !== 0 &&
        <Grid className='childrenBlock'>
          <Row>
            <h2 className='childrenHeader'>Children</h2>
          </Row>
          <Row className='well'>
            {this.state.children.map((child, index) =>
              <IndividualKidBrief amazonToken={this.state.amazonToken} 
               child={child} index={index} key={child.id}/>
            )}
          </Row>
        </Grid>
        )}
      </div>
    );
  }

} 

Account.contextTypes = {
  store: React.PropTypes.object
};

var mapStateToProps = function(state) {
  console.log('in map state to props');
  return {
    account: state.account
  };
};

// this.context.store.getState().account.username

var matchDispatchToProps = function(dispatch) {
  console.log('in match dispatch to props');
  return bindActionCreators({ getAccount: getAccount }, dispatch);
};

// Account = reduxForm({
//   form: 'account'
// })(Account);

export default connect(mapStateToProps, matchDispatchToProps)(Account);




