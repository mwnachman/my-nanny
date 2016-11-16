import React from 'react';
import $ from 'jquery';


class Schedule extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      name: this.props.name, 
      username: '',
      amazonId: '999888777666',
      urlPrefix: 'http://localhost:1337',
      sunday: (this.props.schedule[0] || ''),
      monday: (this.props.schedule[1] || ''),
      tuesday: (this.props.schedule[2] || ''),
      wednesday: (this.props.schedule[3] || ''),
      thursday: (this.props.schedule[4] || ''),
      friday: (this.props.schedule[5] || ''),
      saturday: (this.props.schedule[6] || ''),
      schedule: [this.sunday, this.monday, this.tuesday, 
        this.wednesday, this.thursday, this.friday, this.saturday],
      editable: false
    };
  }

  componentDidMount() {
    console.log('default prop curfew', this.props.schedule);
    console.log('default prop curfew', (typeof this.props.schedule));
  }

  handleInputChange(e) {
    // console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    // console.log('state', JSON.stringify(this.state));
  }

  editSchedule(e) {
    // console.log('in edit schedule');
    this.setState( { 'editable': true } );
    // console.log('state in updateChore', this.state);
  }

  updateSchedule(e) {
    console.log('in update schedule');
    const schedule = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'name': this.state.name
      },
      'schedule': {
        'defaultCurfews': this.defaultCurfews
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

        {((this.state.defaultCurfews === null || this.props.schedule.defaultCurfews.length === 0) && 
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
                {(this.props.schedule.defaultCurfews.length !== 0 &&
                  <td><button onClick={this.editSchedule.bind(this)}>Edit</button></td>
                )}
              </tr>
            )}

            {((this.state.defaultCurfews === null || this.state.editable === true || 
              this.props.schedule.defaultCurfews.length === 0) &&
              <tr>
                <td><input name='sunday' type='time' 
                  onChange={this.handleInputChange.bind(this)} value={this.state.sunday} /></td>
                <td><input name='monday' type='time' 
                  onChange={this.handleInputChange.bind(this)} value={this.state.monday} /></td>
                <td><input name='tuesday' type='time' 
                  onChange={this.handleInputChange.bind(this)} value={this.state.tuesday} /></td>
                <td><input name='wednesday' type='time' 
                  onChange={this.handleInputChange.bind(this)} value={this.state.wednesday} /></td>
                <td><input name='thursday' type='time' 
                  onChange={this.handleInputChange.bind(this)} value={this.state.thursday} /></td>
                <td><input name='friday' type='time' 
                  onChange={this.handleInputChange.bind(this)} value={this.state.friday} /></td>
                <td><input name='saturd' type='time' 
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




  