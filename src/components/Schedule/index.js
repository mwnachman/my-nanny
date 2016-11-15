  
import React from 'react';

class Schedule extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      name: this.props.name, 
      sunday: this.props.schedule.defaultCurfews[0],
      monday: this.props.schedule.defaultCurfews[1],
      tuesday: this.props.schedule.defaultCurfews[2],
      wednesday: this.props.schedule.defaultCurfews[3],
      thursday: this.props.schedule.defaultCurfews[4],
      friday: this.props.schedule.defaultCurfews[5],
      saturday: this.props.schedule.defaultCurfews[6],
      defaultCurfews: this.props.schedule.defaultCurfews,
      editable: false
    };
  }

  handleinputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    console.log('state', JSON.stringify(this.state));
  }

  editSchedule(e) {
    console.log('in edit schedule');
  }

  updateSchedule(e) {
    console.log('in update schedule');
  }

  render() {
    if (this.state.defaultCurfews === undefined || this.state.defaultCurfews.length === 0) {
      return (
        <div>
          <h1>Schedule</h1>
          <p>{this.state.name} does not currently have a Schedule. 
          Enter the times {this.state.name} is expected to arrive home in the afternoons, 
          and we will send you notifications when {this.state.name} checks in.</p>          
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
              {(this.state.editable === false &&
                <tr>
                  <td>{this.state.sunday}</td>
                  <td>{this.state.monday}</td>
                  <td>{this.state.tuesday}</td>
                  <td>{this.state.wednesday}</td>
                  <td>{this.state.thursday}</td>
                  <td>{this.state.friday}</td>
                  <td>{this.state.saturday}</td>
                  <td><button onClick={this.editSchedule.bind(this)}>Edit</button></td>
                </tr>
              )}

              {(this.state.editable === true && 
                <tr>
                  <td><input name='sunday' type='time' 
                    onChange={this.handleInputChange.bind(this)}>{this.state.sunday}</input></td>
                  <td><input name='monday' type='time' 
                    onChange={this.handleInputChange.bind(this)}>{this.state.monday}</input></td>
                  <td><input name='tuesday' type='time' 
                    onChange={this.handleInputChange.bind(this)}>{this.state.tuesday}</input></td>
                  <td><input name='wednesday' type='time' 
                    onChange={this.handleInputChange.bind(this)}>{this.state.wednesday}</input></td>
                  <td><input name='thursday' type='time' 
                    onChange={this.handleInputChange.bind(this)}>{this.state.thursday}</input></td>
                  <td><input name='friday' type='time' 
                    onChange={this.handleInputChange.bind(this)}>{this.state.friday}</input></td>
                  <td><input name='saturd' type='time' 
                    onChange={this.handleInputChange.bind(this)}>{this.state.saturday}</input></td>
                  <td><button onClick={this.updateSchedule.bind(this)}>Update</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
  } 
}


export default Schedule;







  