import React from 'react';
import { Link } from 'react-router';
// import './User.css';

export const Nav = () => (
  <div className='nav'>
    <h1>myNanny</h1>
    <ul>
      <li><Link to='/'>LANDING</Link></li>
      <li><Link to='/app/home'>Home</Link></li>
      <li><Link to='/app/account'>account</Link></li>
      <li><Link to='/app/kids'>kids</Link></li>
      <li><Link to='/app/logout'>logout</Link></li>
    </ul>
  </div>
); 



export default Nav;