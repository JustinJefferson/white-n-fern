import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Workshop from './pages/Workshop';

const list = [
  'Gallery',
  'Workshop',
  'Flowers',
  'About'
];

class App extends Component {
  render () {
    return (
      <div className="App"> 
        <Router>
          <Sidebar pages={list} open={true} />
          <h1>White & Fern</h1>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/workshop">
              <Workshop />
            </Route>
            <Route path="/flowers"></Route>
            <Route path="/about"></Route>
          </Switch>
        </Router>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
