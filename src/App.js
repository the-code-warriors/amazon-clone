import React, { Component } from 'react';
import Highlights from './components/highlights-component/highlights.component';
import MainCarousel from './containers/MainCarousel/MainCarousel';
import KindleCarousel from './containers/KindleCarousel/KindleCarousel';
import './App.css';

import Navbar from './components/navbar-component/nav-bar.component'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Highlights></Highlights>
        <Navbar/>
<<<<<<< HEAD
        <Carousel />
=======
        <MainCarousel />
        <KindleCarousel />
>>>>>>> master
      </div>
    );
  }
}

export default App;
