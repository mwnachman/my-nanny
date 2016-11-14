  
import React from 'react';

class Schedule extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '';
      defaults: [],
      newSchedule: [],
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  render() {
    if (this.state.defaults.length === 0) {
      return (
        <div>
          <h1>Schedule</h1>
          <p>{this.state.name} does not currently have a Schedule. Enter the times {this.state.name} is expected to arrive home in the afternoons, and we will send you notifications when {this.state.name} checks in.</p>          
        </div>
      );
    } else {
      return (
        <div>
          <div>
          <h5>Sunday</h5>
            {this.state.schedule.defaults[0]}
          </div>
          <div>
          <h5>Monday</h5>
            {this.state.schedule.defaults[1]}
          </div>
          <div>
          <h5>Tuesday</h5>
            {this.state.schedule.defaults[2]}
          </div>
          <div>
          <h5>Wednesday</h5>
            {this.state.schedule.defaults[3]}
          </div>
          <div>
          <h5>Thursday</h5>
            {this.state.schedule.defaults[4]}
          </div>
          <div>
          <h5>Friday</h5>
            {this.state.schedule.defaults[5]}
          </div>
          <div>
          <h5>Saturday</h5>
            {this.state.schedule.defaults[6]}
          </div>
        </div>
      );
    }
  } 
}


export default Schedule;







  