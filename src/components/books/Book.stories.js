import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Book from '../Book';
import BookList from '../BookList';

const book = {
  _id:'1',
  title: 'El Quijote',
  author: 'Miguel de Cervantes 2',
  price: '$75.00',
  date :'12-03-1860',

}

storiesOf('book', module)
  .add('List of Books', () => (
    <Book book={book} getDate={function(){}} />
  ))

