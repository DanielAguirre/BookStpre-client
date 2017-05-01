import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
  constructor () {
    super();
    this.bookList = [{
      _id:'1',
      title: 'El Quijote',
      author: 'Miguel de Cervantes',
      price: '$75.00',
      date :'12-03-1860',
    },
    {
      _id:'1',
      title: 'El Quijote',
      author: 'Miguel de Cervantes',
      price: '$75.00',
      date :'12-03-1860',
    }];
  }

  render() {
    return (
      <div className="books-container">
        { this.bookList.map((book,i) => <Book book={book} key={i}/> )}
      </div>
    )
  }
}

export default BookList;