import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dummy from './containers/dummy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dummy />
      </div>
    );
  }
}

export default App;
