import React from 'react';
import { Link } from 'react-router';



class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  submitLoginForm(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td><input type='text' name='email'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type='password' name='password'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.submitLoginForm.bind(this)}>Sign Up</button>
        </form>
        <span>Have an account? </span>
        <Link to='/login'>Log In</Link>
      </div>
    );
  }
}


export default Signup;








  