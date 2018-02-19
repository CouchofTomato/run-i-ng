import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header     from './Components/Header';
import Sidebar    from './Components/Sidebar';
import Main       from './Components/Main'
import Timeline   from './Components/Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timeline />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
