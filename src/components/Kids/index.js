import React from 'react';
// import { IndexLink, Link } from 'react-router';
import $ from 'jquery';
import IndividualKid from '../IndividualKid/index';
import config from '../../config';

class Kids extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newChildName: '',
      newChildPhone: '',
      phone: '',
      username: '',
      email: '', 
      urlPrefix: config.baseUrl,
      children: [],
      adding: false,
      amazonToken: '',
    };
  }

  componentWillMount() {
    this.setState({ amazonToken: localStorage.getItem('amazon-token') });
  }

  componentDidMount() {
    // console.log('amazonToken', this.state.amazonToken);
    console.log('incomponent did mount');
    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + this.state.amazonToken,
      type: 'GET',
    }).done(dataRes => {
      const data = JSON.parse(dataRes);
      this.setState({ username: data.username }); 
      this.setState({ phone: data.phone });
      this.setState({ email: data.email });
      this.setState({ children: data.children });
    });
  }

  addChild(e) {
    const child = {
      'child': {
        'name': this.state.newChildName,
        'phone': this.state.newChildPhone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children?access_token=' + this.state.amazonToken,
      type: 'POST',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Added child:' + JSON.stringify(data));
      }
    });
  }

  handleInputChange(e) {
    // console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  addChildView(e) {
    e.preventDefault();
    // console.log('e.target', e.target);
    const inputChange = {};
    inputChange[e.target.name] = true;
    this.setState(inputChange);
    // console.log('state', this.state);
  }

  render() {
    if (this.state.children.length === 0 || this.state.adding === true) {
      return (
        <div style={{ margin: '0 auto' }} >
          <h2>Add a Child</h2>
            <form>
              <input type='text' name='newChildName' placeholder='Name' 
                onChange={this.handleInputChange.bind(this)}>
              </input>
              {' '}
              <input type='text' name='newChildPhone' placeholder='Phone Number' 
               onChange={this.handleInputChange.bind(this)}>
              </input>
              {' '}
              <button className='btn btn-default' onClick={this.addChild.bind(this)}>
                Add Child
              </button>
            </form>
        </div>
      );
    } else {
      return (
        <div>
          <h3>My Children</h3>

          <div> 
          {
            this.state.children.map((child, index) =>
              <IndividualKid child={child} index={index} key={child.id} amazonToken={this.state.amazonToken}/>
            )
          }
          </div>
          <br />
          <button name='adding' onClick={this.addChildView.bind(this)}>Add a Child</button>
        </div>
      );
    } 
  } 
}


export default Kids;




