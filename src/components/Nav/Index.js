import React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous'
import Login from '../Login';

const Nav = glamorous.nav({
  position: 'absolute',
  color: 'white',
  width: '100%'
});

const NavContainer = glamorous.ul({
  display: 'flex',
  'flexDirection': 'row',
  'justifyContent': 'center',
  'alignContent': 'center'
});

 const Navigation = () => (
  <Nav className="navigation">
    <NavContainer className="navigation-container">
      <Link to="/" className="navigation-element">Home</Link>
      <Link to="/add" className="navigation-element">Add Book</Link>
      <Link to="/user" className="navigation-element">User</Link>
      <Login />
    </NavContainer>
  </Nav>
);

module.exports =  Navigation;