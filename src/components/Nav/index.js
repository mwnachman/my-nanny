import React from 'react';
import { Link } from 'react-router';
import { Grid, Navbar, Jumbotron, Button, Row } from 'react-bootstrap';

// import './User.css';

export const Nav = () => (
  <div className='container'>
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/app/home'>myNanny</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
  </div>
); 



export default Nav;

      