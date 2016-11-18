import React from 'react';
import $ from 'jquery';

class Chores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.chore.title,
      name: this.props.child.name,
      details: this.props.chore.details,
      date: this.props.chore.date,
      amazonToken: this.props.amazonToken,
      id: this.props.child.id,
      choreId: this.props.chore.id,
      urlPrefix: 'https://localhost:1337',
      completed: false,
      editable: false,
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  makeEditable(e) {
    console.log('in make editable');
    this.setState( { 'editable': true } );
    console.log('state in updateChore', this.state);
  }

  createChore() {
    return {
      'child': {
        'id': this.state.id
      },
      'chores': [{
        'id': this.state.choreId,
        'title': this.state.title,
        'details': this.state.details,
        'date': this.state.date,
        'completed': this.state.completed
      }]
    };
  }

  updateChore(e) {
    // console.log('in update chore', e);
    const chore = createChore();
    // console.log('state in updateChore', this.state);
    // console.log('chore', chore);
    $.ajax({
      url: this.state.urlPrefix + '/api/chores?access_token=' + this.state.amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: chore,
      complete: function (data) {
        console.log('Updated chore:' + JSON.stringify(data));
      }
    });
    this.setState( { 'editable': false } );
    // console.log('state in updateChore', this.state);
  }

  deleteChore(e) {
    // console.log('in delete chore');
    const chore = this.createChore();
    $.ajax({
      url: this.state.urlPrefix + '/api/chores?access_token=' + this.state.amazonToken,
      type: 'DELETE',
      dataType: 'application/json',
      data: chore,
      complete: function (data) {
        console.log('Deleted chore:' + JSON.stringify(data));
      }
    });
  }

  markCompleted(e) {
    console.log('in mark completed');
    this.setState({ completed: true });
    this.updateChore();
  }


  render() {
    return (
      <div>
        {(this.state.editable === false &&
          <div>
            {this.state.title}
            {this.state.details}
            {this.state.date}
            <button onClick={this.makeEditable.bind(this)}>Edit</button> 
            <button onClick={this.deleteChore.bind(this)}>Delete</button> 
            <button onClick={this.markCompleted.bind(this)}>Mark Completed</button> 
          </div> 
        )}

        {(this.state.editable === true && 
          <div>
            <input name='title' value={this.state.title} 
              onChange={this.handleInputChange.bind(this)}/>
            <input name='details' value={this.state.details}
              onChange={this.handleInputChange.bind(this)}/>
            <input type='date' name='date' value={this.state.date}
              onChange={this.handleInputChange.bind(this)}/>
            <button onClick={this.updateChore.bind(this)}>Update</button> 
          </div>
        )}
      </div>
    );  
  } 
}


export default Chores;






