import React, { Component } from 'react';
import { Form, Input, Button, Label, Select } from '../Form';

class CreateBook extends Component {
  state = {} 
  constructor(){
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSummit = this.handleSummit.bind(this);
    this.titleInput = '';
  }

  handleInputChange(event) {
    const tmpBook = Object.assign({}, this.state.book);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    tmpBook[name] = value
    
    this.setState(() => ({
      'book': tmpBook
    }));
  }

  handleSummit (e) {
    e.preventDefault();
    e.stopPropagation();
    const myHeaders = new Headers();
    const book = {
      title: this.titleInput.value,
      author: 'J.K. Rowling',
      ISBN: this.ISBNInput.value,
      price: this.priceInput.value, 
      publication: this.publicationInput.value,
    }
    
    myHeaders.append('Content-Type', 'application/json');
    fetch(`/api/books`, {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(book),
    })
   .then(res =>  {
      return res.json()
    })
   .then(body => console.log(body))
   .catch(err => console.log(err));
  }

  componentDidMount() {
    if(this.props.id){
      fetch(`/api/books/${this.props.id}`)
      .then(res => res.json())
      .then(body =>{
        return this.setState((prevState, props) => ({ book: body}))
      })
      .catch(err => console.log(err));  
    }
  }

  render() {
    return (
      <Form id="createBook" >
        <input id="id" type="hidden"  />
        <Label htmlFor="title" >Title</Label> 
        <Input 
          id="title" 
          name='title'
          placeholder="Title"
          innerRef={input => { this.titleInput = input; }}
          value={this.state.book ? this.state.book.title : '' }
          onChange={this.handleInputChange}
         />
        <Label htmlFor="author" >Author</Label> 
        <Select 
          id="author"
          innerRef={input => { this.authorInput = input; }} 
        ></Select>
        <Label htmlFor="publication" >Publication</Label> 
        <Input 
          id="publication" 
          name="publication"
          type="date" 
          placeholder="Publication" 
          innerRef={input => { this.publicationInput = input; }}
          value={this.state.book ? this.state.book.publication: ''} />
        <Label htmlFor="isbn" >ISBN</Label> 
        <Input 
          id="isbn" 
          name="ISBN"
          placeholder="ISBN" 
          required 
          maxLength="13" 
          innerRef={input => { this.ISBNInput = input; }}
          value={this.state.book ? this.state.book.isbn: ''}
          />
        <Label htmlFor="price">Price</Label> 
        <Input 
          id="price"
          name="prcie" 
          placeholder="Price" 
          type="number" 
          step='0.01'
          min={1.00}
          required
          innerRef={input => { this.priceInput = input; }}
          value={this.state.book ? this.state.book.priceInput: ''} />
        <Button id="save" type="submmit" onClick={this.handleSummit}>Save</Button>
      </Form>
    );
  }
}

export default CreateBook;
