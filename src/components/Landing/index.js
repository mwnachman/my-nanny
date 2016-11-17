import React from 'react';
import Nav from '../Nav';
import Login from '../Login';
import Signup from '../Signup';
import { Link } from 'react-router';


export const Landing = () => (
  <div className='landing'>
    <Nav />
    <h1>Landing Page!</h1>
    <Link to='/login'>Log In</Link>
  </div>
); 



export default Landing;