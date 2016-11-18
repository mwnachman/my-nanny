import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import config from '../../config';



class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      urlPrefix: config.baseUrl,
    };
  }

  // handleInputChange(e) {
  //   console.log(e.target);
  //   const inputChange = {};
  //   inputChange[e.target.name] = e.target.value;
  //   this.setState(inputChange);
  // }

  loginRedirect() {
    console.log('in login redirect');
    $.ajax({
      url: this.state.urlPrefix + '/login',
      type: 'GET',
      complete: function (data) {
        console.log('Logged in:' + JSON.stringify(data));
      }
    });
  }

  // checkAuth(e) {
  //   console.log('in check auth');
  //   $.ajax({
  //     url: this.state.urlPrefix + '/test',
  //     type: 'GET',
  //     complete: function(data) {
  //       console.log('Status is:', JSON.stringify(data));
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <button onClick={this.loginRedirect.bind(this)}>Login</button>
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