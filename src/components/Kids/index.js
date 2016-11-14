import React from 'react';
// import { IndexLink, Link } from 'react-router';
import $ from 'jquery';


class Kids extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      username: '999888777666',
      urlPrefix: 'http://localhost:1337',
      children: [],
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
      }
    });
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  render() {
    if (this.state.children.length > 0) {
      return (
        <div>
          <h1>there are kids!</h1>
          <h3>We need a component to render them!</h3>

          <div style={styles.IndividualKid}> 
          {
            this.state.children.map((child, index) =>
              <IndividualKid key={index} child={child}/>
            )
          }
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ margin: '0 auto' }} >
          <h2>Add a Child</h2>
            <form>
              <input type='text' name='name' placeholder='Name' onChange={this.handleInputChange.bind(this)}>
              </input>
              {' '}
              <input type='text' name='phone' placeholder='Phone Number' onChange={this.handleInputChange.bind(this)}>
              </input>
              {' '}
              <button className='btn btn-default' onClick={this.addChild.bind(this)}>
                Add Child
              </button>
            </form>
        </div>
      );
    }
  } 
}


export default Kids;








