import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Cv from './CV';
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
        
        <Main />     
        <Cv />
        <Contact />
      </div>
    );
  }
}

export default App;
