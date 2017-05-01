import React from 'react';
import './Book.css';

const Book = ({ book }) => (
  <div className="book">
    <div className="book-cover">
      <img />
    </div>
    <div className="book-content" >
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.author}</p>
      <p className="book-price">{book.price}</p>
      <p className="book-publication">{book.date}</p>
      <a className="book-edit" href={`/edit/${book._id}`}> </a>
    </div>
  </div>
);

module.exports = Book;