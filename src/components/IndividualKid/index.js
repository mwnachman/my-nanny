import React from 'react';
import Schedule from '../Schedule/index';
import Chores from '../Chores/index';

class IndividualKid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      username: '999888777666',
      chores: [],
      schedule: [],
      newChore: '',
      newDate: '',

    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  render() {
    if (this.state.chores.length === 0) {
      return (
        <div>
          <h1>{this.props.child.name}</h1>
          <div> 
            <Schedule schedule={this.props.child.schedule} name={this.props.child.name}/>
          </div>
          <div> 
          {
            this.props.child.chores.map((chore, index) =>
              <Chores chore={chore} index={index}/>
            )
          }
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ margin: '0 auto' }} >
          <h2>Chores</h2>
          <h3>Add a Chore</h3>
            <form>
              <input type='' name='name' placeholder='Name' onChange={this.handleInputChange.bind(this)}>
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


export default IndividualKid;






