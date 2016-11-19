import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';


class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      links: {
        1: '/app/home',
        2: '/app/account',
        3: '/app/kids',
        4: '/app/logout',
      },
    };

    this.handleLink = this.handleLink.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLink(eventKey) {
    browserHistory.push(this.state.links[eventKey]);
  }

  handleLogout() {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('piddleToken');
    window.location = ('/login');
  }

  render() {
    return (
      <div className='container'>
        <Navbar fixedTop className='navbar'>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand eventKey={1} onClick={this.handleLink}>myNanny</Navbar.Brand>
              <Nav>
                <NavItem eventKey={1} onSelect={this.handleLink}>Home</NavItem>
                <NavItem eventKey={2} onSelect={this.handleLink}>Account</NavItem>
                <NavItem eventKey={3} onSelect={this.handleLink}>Kids</NavItem>
                <NavDropdown title='Menu' id='basic-nav-dropdown'>
                  <MenuItem eventKey={2} onSelect={this.handleLink}>Account</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4} onSelect={this.handleLogout}>Log Out</MenuItem>
                </NavDropdown>
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

      