import React from 'react';

class Chores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      details: '',
      date: '',
      username: '999888777666',
      completed: false,
    };
  }

  // handleInputChange(e) {
  //   console.log(e.target);
  //   const inputChange = {};
  //   inputChange[e.target.name] = e.target.value;
  //   this.setState(inputChange);
  // }

  render() {
    return (
      <div>
        {this.props.chore.title}
        {this.props.chore.details}
        {this.props.chore.date}
      </div>  
    );  
  } 
}


export default Chores;






