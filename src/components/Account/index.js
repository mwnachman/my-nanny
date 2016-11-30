import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAccount, updateAccountInStore, toggleEditable } from '../../actions/actions';
import './account.css'; 
import config from '../../config';
import $ from 'jquery';
import { Row, Col, Grid, Form, FormControl, Button, getValue } from 'react-bootstrap';
import IndividualKidBrief from '../IndividualKidBrief/index';


class Account extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: null,
      phone: null, 
      username: null,
      timezone: null,
      urlPrefix: config.baseUrl
    };
  }

  componentWillMount() {
    this.context.store.dispatch(getAccount());
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    console.log('timezone', this.state);
  }

  updateAccount(e) {
    const username = this.state.username || this.props.account.username;
    const phone = this.state.phone || this.props.account.phone;
    const timezone = this.state.timezone || this.props.account.timezone;
    const email = this.props.account.email;
    const amazonToken = localStorage.getItem('amazon-token');

    this.context.store.dispatch(updateAccountInStore(username, phone, timezone, email));

    const signupData = {
      'account': {
        'username': username,
        'phone': phone,
        'email': email,
        'timezone': timezone
      }
    };

    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: signupData,
      complete: function (data) {
        console.log('Updated account:' + JSON.stringify(data));
      }
    });

    this.context.store.dispatch(toggleEditable());
  }

  makeEditable(e) {
    this.context.store.dispatch(toggleEditable());
  }

  render() {
    return (
      <div className='account'>
        <h2>Account Details</h2>
        {(this.props.account.editable === false && 
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
        {(this.props.account.editable === true && 
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
        {(this.props.account.children &&
        <Grid className='childrenBlock'>
          <Row>
            <h2 className='childrenHeader'>Children</h2>
          </Row>
          <Row className='well'>
            {this.props.children.map((child, index) =>
              <IndividualKidBrief child={child} index={index} key={child.id}/>
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
  var kids = [];
  var kidsToMap = state.children;
  for (var key in kidsToMap) {
    kids.push({ id: key, name: kidsToMap[key]['name'], phone: kidsToMap[key]['phone'] });
  }
  console.log('kids', kids);
  return {
    account: state.account,
    children: kids
  };
};

var matchDispatchToProps = function(dispatch) {
  return bindActionCreators({ getAccount: getAccount }, dispatch);
  //WE SEEM NOT TO NEED THIS?  DON'T HAVE IT FOR ALL FUNCS BUT
  //THEY STILL FIRE
};

export default connect(mapStateToProps, matchDispatchToProps)(Account);




