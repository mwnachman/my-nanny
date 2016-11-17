import React from 'react';
import Schedule from '../Schedule/index';
import Chores from '../Chores/index';
import $ from 'jquery';
 
class IndividualKid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.child.name,
      phone: this.props.child.phone,
      id: this.props.child.id,
      amazonId: '999888777666',
      urlPrefix: 'http://localhost:1337',
      chore: '',
      details: '',
      date: '',
      editable: false,
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
        'name': this.state.name,
        'id': this.state.id,
      },
      'chores': [{
        'title': this.state.chore,
        'details': this.state.details,
        'date': this.state.date
      }]
    };
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

  editChild(e) {
    this.setState({ editable: true });
  }

  confirmChanges(e) {
    console.log('in confirm changes');
    const child = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'id': this.state.id,
        'name': this.state.name,
        'phone': this.state.phone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children',
      type: 'PUT',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Updated chore:' + JSON.stringify(data));
      }
    });
    this.setState({ editable: false });
  }

  render() {
    return (
      <div>
        <h1>{this.props.child.name}</h1>
        <button onClick={this.editChild.bind(this)}>Edit</button>
        {(this.state.editable === true && 
          <form>
            <input type='text' name='name' value={this.state.name}
              onChange={this.handleInputChange.bind(this)}>
            </input>
            <input type='text' name='phone' value={this.state.phone}
              onChange={this.handleInputChange.bind(this)}>
            </input>
            <button className='btn btn-default' 
              onClick={this.confirmChanges.bind(this)}>
              Confirm
            </button>
          </form>
        )}
        <div> 
          <h2>Schedule</h2>
          <Schedule child={this.props.child} schedule={this.props.child.schedule} name={this.props.child.name}/>
        </div>
        <div> 
          <h3>Chores</h3>
          {(this.props.child.chores !== undefined &&  
            this.props.child.chores.map((chore, index) =>
              <Chores child={this.props.child} chore={chore} index={index} key={chore.id}/>
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



