import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';



class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '999888777666',
      urlPrefix: 'http://localhost:1337'
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  submitLoginForm(e) {
    const authInfo = {
      'account': {
        'amazonId': this.state.username
      }
    };
    console.log('authInfo', JSON.stringify(authInfo));
    $.ajax({
      url: this.state.urlPrefix + '/login',
      type: 'POST',
      dataType: 'application/json',
      data: authInfo,
      complete: function (data) {
        console.log('Logged in:' + JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <button onClick={this.submitLoginForm.bind(this)}>Login</button>
        <span>Need an account? </span>
        <Link to='/signup'>Sign up</Link>
      </div>
    );
  } 

}

export default Login;


  //       <form>
  //         <table>
  //           <tbody>
  //             <tr>
  //               <td>Email</td>
  //               <td><input type='text' name='email'
  //                 onChange={this.handleInputChange.bind(this)}/>
  //               </td>
  //             </tr>
  //             <tr>
  //               <td>Password</td>
  //               <td><input type='password' name='password'
  //                 onChange={this.handleInputChange.bind(this)}/>
  //               </td>
  //             </tr>
  //           </tbody>
  //         </table>

  //       </form>
  // 