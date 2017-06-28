import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../index';

it('<Search />, Should reder the searrh component', () => {
  function foundBooks(e) {
    expect(true).toBeTruthy();
  };

  const titleInputRef = (input) => {
    expect(input).toBeTruthy();
  };

  const searchWrapper = shallow(<Search 
    titleInputRef={titleInputRef}
    foundBooks={foundBooks}/>
  );
  // Render component
  expect(searchWrapper).toMatchSnapshot();
  
  // test props
  expect(searchWrapper.instance().props.titleInputRef).toEqual(titleInputRef);
  expect(searchWrapper.instance().props.foundBooks).toEqual(foundBooks);
  searchWrapper.find('#search').simulate('click')
})
