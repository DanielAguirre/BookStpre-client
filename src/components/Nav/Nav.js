import React from 'react';
import './Nav.css';

const Nav = () => (
  <nav className="navigation">
    <ul className="navigation-container">
      <li>
        <a href="/">Home </a>
      </li>
      <li>
        <a href="/add">Add Book </a>
      </li>
      <li>
        <a href="">User </a>
      </li>
    </ul>
  </nav>
);

module.exports = Nav;