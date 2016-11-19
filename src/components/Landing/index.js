import React from 'react';
import Nav from '../Nav';
import Login from '../Login';
import Signup from '../Signup';
import { Link } from 'react-router';

const amazonLogin = () => {
  const options = { scope: 'profile' };
  amazon.Login.authorize(options, '/app/home');
  return false;
};

export const Landing = () => (
  <div className='landing'>
    <a href='#' id='LoginWithAmazon' onClick={amazonLogin.bind(this)} >
      <img alt='Login with Amazon'
        src='https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png'
        width='156' height='32' />
    </a>
  </div>
); 
export default Landing;