  
import React from 'react';

class Schedule extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      defaultCurfews: [],
      newSchedule: [],
    };
  }

  // handleInputChange(e) {
  //   console.log(e.target);
  //   const inputChange = {};
  //   inputChange[e.target.name] = e.target.value;
  //   this.setState(inputChange);
  // }

  render() {
    if (this.props.schedule.defaultCurfews.length === 0) {
      return (
        <div>
          <h1>Schedule</h1>
          <p>{this.props.name} does not currently have a Schedule. 
          Enter the times {this.props.name} is expected to arrive home in the afternoons, 
          and we will send you notifications when {this.props.name} checks in.</p>          
        </div>
      );
    } else {
      return (
        <div>
          <div>
          <h5>Sunday</h5>
            {this.props.schedule.defaultCurfews[0]}
          </div>
          <div>
          <h5>Monday</h5>
            {this.props.schedule.defaultCurfews[1]}
          </div>
          <div>
          <h5>Tuesday</h5>
            {this.props.schedule.defaultCurfews[2]}
          </div>
          <div>
          <h5>Wednesday</h5>
            {this.props.schedule.defaultCurfews[3]}
          </div>
          <div>
          <h5>Thursday</h5>
            {this.props.schedule.defaultCurfews[4]}
          </div>
          <div>
          <h5>Friday</h5>
            {this.props.schedule.defaultCurfews[5]}
          </div>
          <div>
          <h5>Saturday</h5>
            {this.props.schedule.defaultCurfews[6]}
          </div>
        </div>
      );
    }
  } 
}


export default Schedule;







  