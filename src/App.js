import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Banner />
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={Add}/>
        </div>
      </Router>
    );
  }
}

export default App;
