import React, { Component } from 'react';
import Highlights from './components/highlights-component/highlights.component';
import Carousel from './containers/Carousel/Carousel';
import './App.css';

import Navbar from './components/navbar-component/nav-bar.component'
import Dummy from './containers/dummy';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Highlights></Highlights>
<<<<<<< HEAD
        <Carousel />
=======

        <Navbar/>
        <Dummy />

        {/* <Carousel /> */}

>>>>>>> master
      </div>
    );
  }
}

export default App;
