import React from 'react';
import $ from 'jquery';

class Chores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      details: '',
      date: '',
      username: '999888777666',
      urlPrefix: 'http://localhost:1337',
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
  }

  updateChore(e) {
    console.log('in update chore');
    const chore = {
      'account': {
        'amazonId': this.state.username
      },
      'child': {
        'name': this.state.name,
        'phone': this.state.phone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/chores',
      type: 'PUT',
      dataType: 'application/json',
      data: chore,
      complete: function (data) {
        console.log('Updated child:' + JSON.stringify(data));
      }
    });
  }


  render() {
    return (
      <div>
        {(this.state.editable === false &&
          <div>
            {this.props.chore.title}
            {this.props.chore.details}
            {this.props.chore.date}
            <button onClick={this.makeEditable.bind(this)}>Edit</button> 
          </div> 
        )}

        {(this.state.editable === true && 
          <div>
            <input name='title' defaultValue={this.props.chore.title} onChange={this.handleInputChange.bind(this)}/>
            <input name='details' defaultValue={this.props.chore.details} onChange={this.handleInputChange.bind(this)}/>
            <input name='date' defaultValue={this.props.chore.date} onChange={this.handleInputChange.bind(this)}/>
            <button onClick={this.updateChore.bind(this)}>Update</button> 
          </div>
        )}
      </div>
    );  
  } 
}


export default Chores;






