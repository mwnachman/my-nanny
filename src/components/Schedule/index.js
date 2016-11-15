  
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
          <table>
            <tbody>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
              <tr>
                <td>{this.props.schedule.defaultCurfews[0]}</td>
                <td>{this.props.schedule.defaultCurfews[1]}</td>
                <td>{this.props.schedule.defaultCurfews[2]}</td>
                <td>{this.props.schedule.defaultCurfews[3]}</td>
                <td>{this.props.schedule.defaultCurfews[4]}</td>
                <td>{this.props.schedule.defaultCurfews[5]}</td>
                <td>{this.props.schedule.defaultCurfews[6]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  } 
}


export default Schedule;







  