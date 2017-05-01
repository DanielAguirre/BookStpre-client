import React from 'react';
import './Search.css';

const Search = () => (
  <div className="search">
    <input id="searhTitle" className="search-input" placeholder="Title" />
    <input id="searchAuthor" className="search-input" placeholder="Author"/>
    <input id="searchPrice" className="search-input" placeholder="Price"/>
    <button id="search" className="search-query"> Search </button>
  </div>
);

module.exports = Search