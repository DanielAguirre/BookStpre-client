import React from 'react';
import Home from '../index';

it('Render <Home />', () => {
  fetch.mockResponseOnce(JSON.stringify({ access_token: '12345' }));
  fetch.mockResponseOnce(JSON.stringify({ name: 'naruto' }));

  const wrapper = mount(<Home/>);
  wrapper.find('#searchTitle').simulate('change', { target: { 
    value: 'harry',
    name:'titleInput'
  } });

  wrapper.find('#searchTitle').simulate('keyDown', { keyCode: 9, key: 'Tab' });
  /*wrapper.find('#searchTitle').simulate('change', { target: { 
    value: 'harry',
    name:'titleInput'
  } });*/
  // wrapper.find('#searhTitle').node.value = 2;
  wrapper.find('#search').simulate('click');
  console.log();
  
});