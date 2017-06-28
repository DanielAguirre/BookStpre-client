import React from 'react';
import glamorous from 'glamorous'

// import './Banner.css';

const Div = glamorous.div({
  width: '100%',
  height: '450px',
  overflow: 'hidden',
  color: 'white',
  backgroundImage: 'url(../img/header.jpg)',
});

const H1  = glamorous.h1 ({
  display: 'inline-block',
  margin: '200px 35%',
  fontSize: '55px',
});

module.exports = () => (
  <Div className="banner">
    <H1 className="banner-title">Bookstore</H1>
  </Div>
);
