import React from 'react';
import { Link } from 'react-router';
import { ButtonToolbar, Button, Grid, Row, Jumbotron, Col } from 'react-bootstrap';
import Nav from '../Nav';
import Login from '../Login';
import Signup from '../Signup';
import './styles.css';
import Logo from './assets/logo.png';
import navbarInstance from '../LandingNav/index';


const amazonButtonImage = 'https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png';

const amazonLogin = () => {
  const options = { scope: 'profile' };
  amazon.Login.authorize(options, '/app/home');
  return false;
};

export const Landing = () => (
    <Grid fluid>
      {navbarInstance}
      <Row componentClass='expose'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron id='landingJumbotron'>
            <h1>Get your ducks in a row.</h1>
            <p>Kids are a breeze with myNanny</p>
            <img
            className='pull-left'
            id='amazonButton'
            alt='Login with Amazon'
            src={amazonButtonImage}
            onClick={amazonLogin.bind(this)}
            />
          </Jumbotron>
        </Col>
        <Col md={2} />
      </Row>


      <Row>
        <Col md={4}>
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <div>
                <div>Your family – abstracted<br/></div>
                New Alexa technology puts you in control of all your children so that you can 
                see what's going on at a glance and decide how to manage your children's lives.
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Col>

        <Col md={4}>
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <div>
                <div>Your family – abstracted<br/></div>
                New Alexa technology puts you in control of all your children so that you can 
                see what's going on at a glance and decide how to manage your children's lives.
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Col>

        <Col md={4}>
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <div>
                <div>Your family – abstracted<br/></div>
                New Alexa technology puts you in control of all your children so that you can 
                see what's going on at a glance and decide how to manage your children's lives.
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Col>

      </Row>
    </Grid>
);

export default Landing;
