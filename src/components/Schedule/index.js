import React from 'react';
import $ from 'jquery';


class Schedule extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      name: this.props.name, 
      username: '',
      id: this.props.child.id,
      amazonId: '999888777666',
      urlPrefix: 'http://localhost:1337',
      sunday: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      // schedule: [this.sunday, this.monday, this.tuesday, 
      //   this.wednesday, this.thursday, this.friday, this.saturday],
      originalSchedule: this.props.schedule,
      editable: false
    };
  }

  componentDidMount() {
    if (this.props.schedule !== null) {
      this.setState({ sunday: this.props.schedule.sunday });
      this.setState({ monday: this.props.schedule.monday });
      this.setState({ tuesday: this.props.schedule.tuesday });
      this.setState({ wednesday: this.props.schedule.wednesday });
      this.setState({ thursday: this.props.schedule.thursday });
      this.setState({ friday: this.props.schedule.friday });
      this.setState({ saturday: this.props.schedule.saturday });
      this.setState({ originalSchedule: this.props.schedule });
    }
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    console.log('state', JSON.stringify(this.state));
  }

  editSchedule(e) {
    // console.log('in edit schedule');
    this.setState({ editable: true });
    this.setState({ originalSchedule: [] });
    // console.log('state in updateChore', this.state);
  }

  // This function needs an API endpoint 
  // If we need to send child's Id, need to keep
  // it in state/props to send
  updateSchedule(e) {
    console.log('in update schedule');
    console.log('id', this.state.id);
    console.log('schedule', this.state.schedule);
    console.log('monday', this.state.monday);
    const schedule = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'name': this.state.name,
        'id': this.state.id
      },
      'schedule': {
        sunday: this.state.sunday,
        monday: this.state.monday,
        tuesday: this.state.tuesday,
        wednesday: this.state.wednesday,
        thursday: this.state.thursday,
        friday: this.state.friday,
        saturday: this.state.saturday
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/schedule',
      type: 'POST',
      dataType: 'application/json',
      data: schedule,
      complete: function (data) {
        console.log('Added schedule:' + JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <div>

        {((this.state.originalSchedule === null) && 
          <div>
            <p>{this.state.name} does not currently have a Schedule. 
            Enter the times {this.state.name} is expected to arrive home in the afternoons, 
            and we will send you notifications when {this.state.name} checks in.</p>          
          </div>
        )}

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
                {(this.props.schedule !== null &&
                  <td><button onClick={this.editSchedule.bind(this)}>Edit</button></td>
                )}
              </tr>
            )}

            {((this.state.originalSchedule === null || this.state.editable === true) &&
              <tr>
                <td><input name='sunday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.sunday} /></td>
                <td><input name='monday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.monday} /></td>
                <td><input name='tuesday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.tuesday} /></td>
                <td><input name='wednesday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.wednesday} /></td>
                <td><input name='thursday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.thursday} /></td>
                <td><input name='friday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.friday} /></td>
                <td><input name='saturday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.saturday} /></td>
                <td><button onClick={this.updateSchedule.bind(this)}>Confirm</button></td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default Schedule;

