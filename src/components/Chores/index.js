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
        <p>trying</p>
      </div>
    );
    // if (true) {
    //   return (
    //     <div>
    //       <h1>there are kids!</h1>
    //       <h3>We need a component to render them!</h3>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div style={{ margin: '0 auto' }} >
    //       <h2>Add a Child</h2>
    //         <form>
    //           <input type='text' name='name' placeholder='Name' onChange={this.handleInputChange.bind(this)}>
    //           </input>
    //           {' '}
    //           <input type='text' name='phone' placeholder='Phone Number' 
    //            onChange={this.handleInputChange.bind(this)}>
    //           </input>
    //           {' '}
    //           <button className='btn btn-default' onClick={this.addChild.bind(this)}>
    //             Add Child
    //           </button>
    //         </form>
    //     </div>
    //   );
    // }
  } 
}


export default Chores;


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





