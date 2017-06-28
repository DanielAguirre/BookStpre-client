import React from 'react';
import { shallow } from 'enzyme';
import Add from '../index';

it('Render the add componet', () => {
  const componet = shallow(<Add/>);
  expect(componet).toMatchSnapshot();
});

it('Render the add componet to edit a book', () => {
  const componet = shallow(<Add edit={true} params={{id:1}} />);
  expect(componet).toMatchSnapshot();
});