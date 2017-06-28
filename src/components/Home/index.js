import React, { Component } from 'react';
import glamorous from 'glamorous';
import Search from '../Search';
import BookList from '../books/BookList';

const Div = glamorous.div({
  display: 'flex',
  width: '70%',
  maxWidth: '1200px',
  boxSizing:'border-box',
  height: 'auto',
  margin: '40px auto',
  flexWrap: 'wrap',
});

class Home extends Component{
  state = {
    titleValue:'',
    authorValue:'',
    priceValue:0.00,
    bookList: [],
  };
  
  constructor() {
    super();
    this.foundBooks = this.foundBooks.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/books')
    .then(res => res.json())
    .then(body =>{
      return this.setState((prevState, props) => ({ bookList: body}))
    })
    .catch(err => console.log(err));  
  }

  foundBooks(e){
    const q = {
     title: this.state.titleInput,
     author: this.state.authorInput,
     price: this.state.priceInput,
    };

    const queryParams = `?${Object.keys(q).map((key) => q[key] ? `${key}=${encodeURI(q[key])}&`: '').join('')}`;
    
    fetch(`/api/books${queryParams}`)
    .then(res => res.json())
    .then(body =>{
      return this.setState((prevState, props) => ({ bookList: body}))
    })
    .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const tmpBook = Object.assign({}, this.state);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    tmpBook[name] = value;
    this.setState(() => (`${name}`: tmpBook));
  }

  render() {
    return (
      <Div className="content">
        <Search 
          foundBooks={this.foundBooks}
          titleValue={this.state.titleValue}
          authorValue={this.state.authorValue}
          priceValue={this.state.priceValue}
          handleInputChange={this.handleInputChange} />
        <BookList bookList={this.state.bookList}/>
      </Div>
    )}
}

export default Home;