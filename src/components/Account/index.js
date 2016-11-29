import React from 'react'; 
import $ from 'jquery';
import './account.css'; 
import config from '../../config';
// import fetch from 'isomorphic-fetch';

import { getAccount } from '../../actions/account.js';


import { Row, Col, Grid, Form, FormControl, Button } from 'react-bootstrap';

import IndividualKidBrief from '../IndividualKidBrief/index';

import AccountInfo from '../../containers/accountInfo';


class Account extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amazonToken: '',
      email: '',
      phone: '', 
      username: '',
      timezone: '',
      urlPrefix: config.baseUrl,
      children: [],
      editable: false,
    };
  }


  componentWillMount() {
    this.setState({ amazonToken: localStorage.getItem('amazon-token') });
  }

  componentDidMount() {
    console.log('in component did mount');
    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + this.state.amazonToken,
      type: 'GET',
    }).done(dataRes => {
      const data = JSON.parse(dataRes);
      this.setState({ username: data.username }); 
      this.setState({ phone: data.phone });
      this.setState({ email: data.email });
      this.setState({ children: data.children });
      this.setState({ timezone: data.timeZone });
    });
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  updateAccount(e) {
    // console.log('in update Account');
    // console.log('this.state at start of update account', this.state);
    const signupData = {
      'account': {
        'amazonId': this.state.amazonId,
        'username': this.state.username,
        'phone': this.state.phone,
        'email': this.state.email,
        'timeZone': this.state.timezone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + this.state.amazonToken,
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
        <AccountInfo />
        <h1>Your Account</h1>
        <h2>Account Details</h2>
        {(this.state.editable === false && 
        <div>
          <Grid className='well'>
            <Row>
              <Col xs={4} md={3}>Name</Col>
              <Col xs={6} md={6}>{this.state.username}</Col>
            </Row>
            <Row className='gridRow'>
              <Col xs={4} md={3}>Email</Col>
              <Col xs={6} md={6}>{this.state.email}</Col>
            </Row>
            <Row className='gridRow'>
              <Col xs={4} md={3}>Phone Number</Col>
              <Col xs={6} md={6}>{this.state.phone}</Col>
            </Row>
            <Row className='gridRow'>
              <Col xs={4} md={3}>Time Zone</Col>
              <Col xs={6} md={6}>{this.state.timezone}</Col>
            </Row>
            <Row>
              <Button className='editButton' 
                onClick={getAccount(5)}>Edit Account</Button>
            </Row>
          </Grid>
          </div>
        )}
        {(this.state.editable === true && 
        <Form>
          <Grid className='well'>
            <Row>
              <Col xs={4} md={3}>Name</Col>
              <Col xs={6} md={6}><FormControl type='text' name='username' defaultValue={this.state.username}
                onChange={this.handleInputChange.bind(this)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={3}>Email</Col>
              <Col xs={6} md={6}><FormControl type='text' name='email' defaultValue={this.state.email}
                onChange={this.handleInputChange.bind(this)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={3}>Phone Number</Col>
              <Col xs={6} md={6}><FormControl type='text' name='phone' defaultValue={this.state.phone}
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


export default Account;

