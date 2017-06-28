import React from 'react';
import CreateBook from '../CreateBook';
import glamorous from 'glamorous'

const Div = glamorous.div({
  display: 'flex',
  width: '80%',
  margin: '0 auto',
  fontSize: '16px',
  flexWrap: 'wrap'
});

const H3 = glamorous.h3({
  width: '100%',
  margin: '0 auto',
});

const Add = ({edit, params={}}) => {
  return (<Div className="form">
    <H3>{
      edit? 'Edit the Book'
      :'Add a new Book to the Catalog' }</H3>
    <CreateBook params={params} id={params.id}/>
  </Div>
)};

module.exports = Add;