import React from 'react';
// import { IndexLink, Link } from 'react-router';
import $ from 'jquery';
import IndividualKid from '../IndividualKid/index';


class Kids extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      username: '999888777666',
      urlPrefix: 'http://localhost:1337',
      children: [
        {
          name: 'Winston',
          id: '123',
          chores: [
            {
              title: 'Clean your room',
              details: 'Please clean your room nice and neat. Vaccuum it too!',
              date: '2016-12-24',
              id: '127',
              completed: false
            },
            {
              title: 'Wash the dishes',
              details: 'Use the blue sponge under the sink.',
              date: '2016-12-24',
              id: '122',
              completed: true
            }
          ],
          checkedIn: false,
          schedule: {
            defaultCurfews: [null, '18:30', '14:30', '17:00', '22:00', '17:00', null],
            dateOfLastCurfew: '2016-11-14'
          }
        },
        {
          name: 'Wendy',
          id: '125',
          chores: [
            {
              title: 'Clean your room',
              details: 'Please clean your room nice and neat. Vaccuum it too!',
              date: '2016-12-24',
              id: '128',
              completed: true
            },
            {
              title: 'Wash the dishes',
              details: 'Use the blue sponge under the sink.',
              date: '2016-12-24',
              id: '129',
              completed: false
            }
          ],
          checkedIn: true,
          schedule: {
            defaultCurfews: [null, '18:30', '14:30', '17:00', '22:00', '17:00', null],
            dateOfLastCurfew: '2016-11-13'
          }
        }],
      adding: false,
    };
  }


  addChild(e) {
    const child = {
      'account': {
        'amazonId': this.state.username
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
        // this.setState('adding', false);
      }
    });
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  addChildView(e) {
    e.preventDefault();
    console.log('e.target', e.target);
    const inputChange = {};
    inputChange[e.target.name] = true;
    this.setState(inputChange);
    console.log('state', this.state);
  }

  render() {
    if (this.state.children === undefined || this.state.adding === true) {
      return (
        <div style={{ margin: '0 auto' }} >
          <h2>Add a Child</h2>
            <form>
              <input type='text' name='name' placeholder='Name' onChange={this.handleInputChange.bind(this)}>
              </input>
              {' '}
              <input type='text' name='phone' placeholder='Phone Number' 
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
          <br />
          <button name='adding' onClick={this.addChildView.bind(this)}>Add a Child</button>
        </div>
      );
    } 
  } 
}


export default Kids;








