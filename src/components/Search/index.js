import React from 'react';
import glamorous from 'glamorous';
import { Input } from '../Form';

const Div = glamorous.div({
  width: '100%',
  height: '20px',
  marginBottom: '40px',
  display: 'flex',
  flexDirection: 'row'
});

const InputSearch = glamorous(Input)({
  width: '30%',
  marginRight: '15px',
});

const Search = ({ foundBooks, titleValue, authorValue, priceValue, handleInputChange }) => (
  <Div className="search">
    <InputSearch 
      id="searchTitle"
      name="isGoing"
      className="search-input"
      placeholder="Title"
      onChange={handleInputChange}
      value={titleValue}/>
    <InputSearch  
      id="searchAuthor"
      name='authorInput'
      className="search-input" 
      placeholder="Author"
      onChange={handleInputChange}
      value={authorValue} />
    <InputSearch  
      id="searchPrice"
      name='priceInput'
      className="search-input" 
      placeholder="Price" 
      onChange={handleInputChange}
      value={priceValue} />
    <button id="search" className="search-query" onClick={foundBooks}> Search </button>
  </Div>
);

module.exports = Search