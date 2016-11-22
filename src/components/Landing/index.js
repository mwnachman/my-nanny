import React from 'react';
import Nav from '../Nav';
import Login from '../Login';
import Signup from '../Signup';
import { Link } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './styles.css';
import Logo from './assets/logo.png';
import Splash from './assets/splash.jpg';

const amazonLogin = () => {
  const options = { scope: 'profile' };
  amazon.Login.authorize(options, '/app/home');
  return false;
};

export const Landing = () => (
  <div className='landing'>
    <div className='siteHeader'>
      <img className='logo' src={Logo}/>
      <ButtonToolbar>
        <Button class='siteHeader-button' id='login-button' bsStyle='default'>Login</Button>
        <Button class='siteHeader-button' id='signup-button' bsStyle='primary'>Sign up</Button>
      </ButtonToolbar>
    </div>
    <div className='wrapper'>
      <img className='splash' src={Splash}/>
      <div className='desc'>
        Kids are a breeze with myNanny<br/>
        <a href='#' id='LoginWithAmazon' onClick={amazonLogin.bind(this)} >
          <img alt='Login with Amazon'
            src='https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png'
            width='156' height='32' />
        </a>
      </div>
    </div>
    <div>
      <div>Your family – abstracted<br/></div>
      New Alexa technology puts you in control of all your children so that you can 
      see what's going on at a glance and decide how to manage your children's lives.
    </div>
  </div>
);

export default Landing;
