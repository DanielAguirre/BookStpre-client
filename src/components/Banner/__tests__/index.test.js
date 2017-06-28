import React from 'react';
import { shallow, mount } from 'enzyme';
import Banner from '../index';

it('<Banner />', () => {
  const component = shallow(<Banner/>);
  expect(Banner).toMatchSnapshot();
})