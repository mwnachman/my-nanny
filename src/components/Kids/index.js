import React from 'react';
// import { IndexLink, Link } from 'react-router';
import $ from 'jquery';
import IndividualKid from '../IndividualKid/index';


class Kids extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newChildName: '',
      newChildPhone: '',
      phone: '',
      username: '',
      email: '', 
      amazonId: '999888777666',
      urlPrefix: 'http://localhost:1337',
      children: [],
      adding: false,
    };
  }

  componentWillMount() {
    console.log('we need to check for a token here');
  }

  componentDidMount() {
    $.ajax({
      url: this.state.urlPrefix + '/api/account?amazonId=' + this.state.amazonId,
      type: 'GET',
    }).done(dataRes => {
      const data = JSON.parse(dataRes);
      console.log('children', data.children);
      console.log('username', data.username);
      console.log('phone', data.phone);
      console.log('email', data.email);
      this.setState({ username: data.username }); 
      this.setState({ phone: data.phone });
      this.setState({ email: data.email });
      this.setState({ children: data.children });
    });
  }

  addChild(e) {
    const child = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'name': this.state.name,
        'phone': this.state.phone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children',
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
    if (this.state.children === undefined || this.state.adding === true) {
      return (
        <div style={{ margin: '0 auto' }} >
          <h2>Add a Child</h2>
            <form>
              <input type='text' name='newChildName' placeholder='Name' onChange={this.handleInputChange.bind(this)}>
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
              <IndividualKid child={child} index={index} key={child.id}/>
            )
          }
          </div>
          <p>{this.state.username}blah</p>
          <br />
          <button name='adding' onClick={this.addChildView.bind(this)}>Add a Child</button>
        </div>
      );
    } 
  } 
}


export default Kids;


// {
//   "account": {
//     "id": 1,
//     "token": "1234",
//     "username": "Mary",
//     "amazonId": "999888777666",
//     "timeZone": "EST",
//     "phone": "1234567890",
//     "email": "mary@example.com"
//   },
//   "children": [
//     {
//       "id": 1,
//       "name": "Winston",
//       "accountId": 1,
//       "schedule": {
//         "id": 15,
//         "defaultCurfews": "[null,\"18:30\",\"14:30\",\"17:00\",\"22:00\",\"17:00\",null]",
//         "dateOfLastCurfew": "2000-12-31",
//         "childId": 1
//       },
//       "chores": [
//         {
//           "id":3,
//           "title": "Clean your room",
//           "details": "Please clean your room nice and neat. Vaccuum it too!",
//           "date": "2016-12-24",
//           "completed": false,
//           "childId": 1
//         },
//         {
//           "id":4,
//           "title": "Wash the dishes",
//           "details": "Use the blue sponge under the sink.",
//           "date": "2016-12-24",
//           "completed": true,
//           "childId": 1
//         }
//       ],
//     },
//     {
//       "id": 2,
//       "name": "Wendy",
//       "accountId": 1,
//       "chores": [],
//       "schedule": null
//     }
//   ]
// }


    // $.ajax({
    //   url: this.state.urlPrefix + '/login',
    //   method: 'GET',
    //   dataType: 'application/json',
    // // }).done(data => {
    // //   // this.setState({subscriptions: data});
    // //   console.log('data', data);
    //   complete: function(data) {
    //     console.log('data', JSON.stringify(data));
    //   }
    // });



