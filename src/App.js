import React, { Component } from 'react';
import Highlights from './components/highlights-component/highlights.component';
import Carousel from './containers/Carousel/Carousel';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Highlights></Highlights>
        <Carousel />
      </div>
    );
  }
}

export default App;
