import React from 'react';
import Search from '../Search/Search';
import BookList from '../books/BookList';

const Home = () => (
  <div>
    <Search />
    <BookList />
  </div>
)

module.exports = Home;