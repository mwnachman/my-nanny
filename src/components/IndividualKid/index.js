import React from 'react';
import Schedule from '../Schedule/index';
import Chores from '../Chores/index';
import $ from 'jquery';

class IndividualKid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      id: '',
      username: '',
      amazonId: '999888777666',
      urlPrefix: 'http://localhost:1337',
      chores: [],
      schedule: [],
      chore: '',
      details: '',
      date: '',

    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  addChore(e) {
    const chore = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'name': this.props.child.name,
      },
      'chores': [{
        'title': this.state.chore,
        'details': this.state.details,
        'date': this.state.date
      }]
    };
    console.log('chore', JSON.stringify(chore));
    $.ajax({
      url: this.state.urlPrefix + '/api/chores',
      type: 'POST',
      dataType: 'application/json',
      data: chore,
      complete: function (data) {
        console.log('Added chore:' + JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.child.name}</h1>
        <div> 
          <h2>Schedule</h2>
          <Schedule schedule={this.props.child.schedule} name={this.props.child.name}/>
        </div>
        <div> 
          <h3>Chores</h3>
          {(this.props.child.chores !== undefined &&  
            this.props.child.chores.map((chore, index) =>
              <Chores chore={chore} index={index} key={chore.id}/>
            ))
          }
          {(this.props.child.chores === undefined &&
            <div>
              <p>{this.props.name} does not currently have any chores assigned. 
              Add a chore below.</p>          
            </div>
          )}
          <div> 
            <h3>New Chore</h3>
              <form>
                <input type='text' name='chore' placeholder='Chore' 
                  onChange={this.handleInputChange.bind(this)}>
                </input>
                {' '}
                <input type='text' name='details' placeholder='Explanation' 
                  onChange={this.handleInputChange.bind(this)}>
                </input>
                {' '}
                <input type='date' name='date' 
                  onChange={this.handleInputChange.bind(this)}>
                </input>
                {' '}
                <button className='btn btn-default' 
                  onClick={this.addChore.bind(this)}>
                  Add Chore
                </button>
              </form>
          </div>
        </div>
      </div>
    );
  } 
}


export default IndividualKid;



