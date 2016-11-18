import React from 'react';
import { Link } from 'react-router';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';


class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className='container'>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/app/home'>myNanny</Link>
              </Navbar.Brand>
              <Nav>
                <NavItem><Link to='/'>Landing</Link></NavItem>
                <NavItem><Link to='/app/home'>Home</Link></NavItem>
                <NavItem><Link to='/app/account'>Account</Link></NavItem>
                <NavItem><Link to='/app/kids'>Kids</Link></NavItem>
                <NavItem><Link to='/app/logout'>Logout</Link></NavItem>
                <NavItem pullRight>
                  <NavDropdown title='Menu' id='basic-nav-dropdown'>
                    <MenuItem><Link to='app/account'>Account</Link></MenuItem>
                    <MenuItem divider />
                    <MenuItem><Link to='app/logout'>Log Out</Link></MenuItem>
                  </NavDropdown>
                </NavItem>
              </Nav>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
      </div>
    );
  }

}

export default Navigation;

      