import React from 'react';
import glamorous from 'glamorous'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Book =  glamorous.div({
  'flexGrow': 1,
  display: 'flex',
  'marginTop': '20px'
});

const Cover =  glamorous.div({
  width: '200px',
  height: '230px',
  backgroundSize: 'cover',
  backgroundImage: 'url(../img/no-cover-placeholder.jpg)'
});

const Content =  glamorous.div({
  width: '75%',
  padding: '5%'
});

const BookCard  = ({ book, getDate }) => (
  <Book className="book">
    <Cover className="book-cover">
      <img alt=''/>
    </Cover>
    <Content className="book-content" >
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.author}</p>
      <p className="book-price">{book.price}</p>
      <p className="book-publication">{book.publication}</p>
      <Link className="book-edit" to={`/edit/${book._id}`}>Edit </Link>
    </Content>
  </Book>
);

module.exports = BookCard;