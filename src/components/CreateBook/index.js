import React from 'react';
// import './Form.css';

const CreateBookForm = () => (
  <form id="createBook" >
    <input id="id" type="hidden" value="" />
    <label htmlFor="title" >Title</label> 
    <input id="title" placeholder="Title" value="" />
    <label htmlFor="author" >Author</label> 
    <select id="author"></select>
    <label htmlFor="publication" >Publication</label> 
    <input id="publication" type="date" placeholder="Publication" value="" />
    <label htmlFor="isbn" >ISBN</label> 
    <input id="isbn" placeholder="ISBN" value="" required maxLength="13" />
    <label htmlFor="price">Price</label> 
    <input id="price" placeholder="Price" type="number" step='0.01' min={1.00} value="" required />
    <button id="save" type="submmit">Save</button>  
  </form>
);

module.exports = CreateBookForm;