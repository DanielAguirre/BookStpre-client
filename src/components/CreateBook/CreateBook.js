import React from 'react';

const CreateBookForm = ({handleSummit}) => (
  <form id="createBook" >
    <input id="id" type="hidden"  />
    <label htmlFor="title" >Title</label> 
    <input 
      id="title" 
      placeholder="Title"
      ref={(input) => { this.title = input; }} />
    <label htmlFor="author" >Author</label> 
    <select id="author" ></select>
    <label htmlFor="publication" >Publication</label> 
    <input 
      id="publication" 
      type="date" 
      placeholder="Publication" 
        />
    <label htmlFor="isbn" >ISBN</label> 
    <input 
      id="isbn" 
      placeholder="ISBN" 
      required 
      maxLength="13" 
      />
    <label htmlFor="price">Price</label> 
    <input 
      id="price" 
      placeholder="Price" 
      type="number" 
      step='0.01'
      min={1.00}
      required />
    <button id="save" type="submmit" onClick={handleSummit}>Save</button>  
  </form>
);

module.exports = CreateBookForm;