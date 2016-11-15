import React from 'react';

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
          <h1>{this.state.name}</h1>
          <h2>Time to Arrive Home</h2>
          
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


// {
//     "account": {
//         "amazonId": "999888777666"
//     },
//     "child": {
//         "name": "Winston"
//     },
//     "chores": [
//         {
//             "title": "Clean your room",
//             "details": "Please clean your room nice and neat. Vaccuum it too!",
//             "date": "2016-12-24"
//         },
//         {
//             "title": "Wash the dishes",
//             "details": "Use the blue sponge under the sink.",
//             "date": "2016-12-24"
//         }
//     ]
// }





