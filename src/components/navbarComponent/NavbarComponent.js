import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export class NavBar extends React.Component {

  render(){
      return(
         <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">HeroesWorld.org</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                    HeroesList
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    Stories
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                    Country
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    Login
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
  }



}