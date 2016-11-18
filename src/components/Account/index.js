import React from 'react';
// import IndividualKidBrief from '../IndividualKidBrief/index';
import $ from 'jquery';

class Account extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amazonToken: '',
      email: 'Not Yet Entered',
      phone: 'Not Yet Entered', 
      username: 'Not Yet Entered',
      timezone: 'Not Yet Entered',
      urlPrefix: 'https://localhost:1337',
      children: [],
      editable: false,
    };
  }

  componentWillMount() {
    this.setState({ amazonToken: localStorage.getItem('amazon-token') });
  }

  componentDidMount() {
    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + this.state.amazonToken,
      type: 'GET',
    }).done(dataRes => {
      const data = JSON.parse(dataRes);
      this.setState({ username: data.username }); 
      this.setState({ phone: data.phone });
      this.setState({ email: data.email });
      this.setState({ children: data.children });
      this.setState({ timezone: data.timeZone });
    });
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  updateAccount(e) {
    // console.log('in update Account');
    // console.log('this.state at start of update account', this.state);
    const signupData = {
      'account': {
        'amazonId': this.state.amazonId,
        'username': this.state.username,
        'phone': this.state.phone,
        'email': this.state.email,
        'timeZone': this.state.timezone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + this.state.amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: signupData,
      complete: function (data) {
        console.log('Updated account:' + JSON.stringify(data));
      }
    });
    this.setState({ editable: false });
  }

  makeEditable(e) {
    this.setState({ editable: true });
  }

  render() {
    return (
      <div>
        <h1>Account Page!</h1>
        {(this.state.editable === false && 
        <div>
          <button onClick={this.makeEditable.bind(this)}>Edit Account</button>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{this.state.username}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{this.state.phone}</td>
                </tr>
                <tr>
                  <td>Time Zone</td>
                  <td>{this.state.timezone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {(this.state.editable === true && 
        <form>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input type='text' name='username' defaultValue={this.state.username}
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type='text' name='email' defaultValue={this.state.email}
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td><input type='text' name='phone' defaultValue={this.state.phone}
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Time Zone</td>
                <td>
                  <select name='timezone' onChange={this.handleInputChange.bind(this)}>
                    <option value='EST'>EST / Eastern / UTC-5</option>
                    <option value='CST'>CST / Central / UTC-6</option>
                    <option value='MST'>MST / Mountain / UTC-7</option>
                    <option value='PST'>PST / Pacific / UTC-8</option>
                    <option value='HST'>HST / Hawaii / UTC-10</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.updateAccount.bind(this)}>Update Account</button>
        </form>
        )}
      </div>
    );
  }

} 


export default Account;

// {(this.state.children.length !== 0 &&
//               <div>
//                 <h3>Children</h3>
//                 {
//                 this.state.children.map((child, index) =>
//                 <IndividualKidBrief amazonToken={this.state.amazonToken} 
//                  child={child} index={index} key={child.id}/>
//                 )
//                 }
//               </div>
//             )}
