import React from 'react';
import { shallow } from 'enzyme';
import Book from '../Book';
import BookList from '../BookList';

it('<Book />', () => {
  const book = {
    title: 'Harry Poterr 1',
    author: 'J.K. Rownling',
  };

  const component = shallow(<Book book={book}/>);
  expect(component).toMatchSnapshot();

})

it('<Books />', () => {
  const bookList = [{
    _id: 1,
    title: 'Harry Poterr 1',
    author: 'J.K. Rownling',
  }];

  const component = shallow(<BookList bookList={bookList}/>);
  expect(component).toMatchSnapshot();

})
