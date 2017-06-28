import React, { Component } from 'react';
import glamorous from 'glamorous'
import moment from 'moment';
import Book from './Book';

const Div =  glamorous.div({
  width: '100%',
  display: 'flex',
  boxSizing: 'border-box',
  flexWrap: 'wrap',
});

const BookList  = ({ bookList, getDate }) =>(
  <Div className="books-container">
    { bookList.map((book,i) => <Book book={book} key={book._id} /> )}
  </Div>
) 

export default BookList;