import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// components imports
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <div id="main">
          <h1>Reading list</h1>
          <BookList/>
      </div>
    );
  }
}

export default App;
