import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Workshop from './pages/Workshop';

const list = [
  'Gallery',
  'Workshp',
  'Flowers',
  'About'
];

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar pages={list} open={true} />
      </div>
      <h1>White & Fern</h1>
      <Router>
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

export default App;
