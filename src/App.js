import React, { Component } from 'react';
import Highlights from './components/highlights-component/highlights.component'
import './App.css';

import Dummy from './containers/dummy';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Highlights></Highlights>
        <Dummy />
      </div>
    );
  }
}

export default App;
