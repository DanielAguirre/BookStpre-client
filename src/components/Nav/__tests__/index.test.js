import React from 'react'
import { shallow } from 'enzyme';
import Nav from '../index';

it('<Nav />', ()=> {
  const component = shallow(<Nav/>)
  expect(component).toMatchSnapshot();
})