import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image } from 'react-bootstrap';
import './styles.css';

const amazonButtonImage = 'https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png';

const amazonLogin = () => {
  const options = { scope: 'profile' };
  amazon.Login.authorize(options, '/app/home');
  return false;
};

const navbarInstance = (
  <Navbar fixedTop >
    <Navbar.Header>
      <Navbar.Brand>
        <a href='#'>myNanny</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight className='navRight'>
        <Image
        id='amazonButton'
        alt='Login with Amazon'
        src={amazonButtonImage}
        onClick={amazonLogin.bind(this)}
        />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbarInstance;
