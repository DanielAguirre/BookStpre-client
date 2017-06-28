import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Banner from './components/Banner';
import Home from './components/Home';
import Add from './components/Add';
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
          <Route path="/edit/:id" component={({match}) => <Add edit={true} params={match.params}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
