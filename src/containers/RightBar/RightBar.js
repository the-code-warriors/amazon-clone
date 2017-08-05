import React, { Component } from 'react';
import $ from 'jquery';

import CarouselItem from './../../components/CarouselItem/CarouselItem';
import './rightBar.css';



export default class Carousel extends Component{

  componentDidMount(){


  }

  render(){





    return (
      <div className='right-bar-main'>
        <img src="http://i.imgur.com/3vjr6eD.png" alt="deals"/>
        <a href='#'><p className='ad-feedback'>Ad Feedback</p></a>
        <h1>Your Dash Buttons</h1>
        <div className="dash-buttons-div">
          <a href='#'><p>Manage Buttons</p></a>
          <a href='#'><p>Learn More</p></a>
        </div>
        <div className="tap-div">
          <div>
            <p><span>TAP HERE</span> for info</p>
            <h1>↓</h1>
          </div>
          <div>
            <p><span>TAP HERE</span> to buy</p>
            <h1>↓</h1>
          </div>
        </div>
        <img src="http://i.imgur.com/43qo3IB.png" alt="ginger product"/>
        <a href="#"><p>See all</p></a>
        <img src="http://i.imgur.com/JKE7FgH.png" alt="prime-shipping"/>
        <img src="http://i.imgur.com/oWwvH4K.png" alt="music"/>
        <img src="http://i.imgur.com/FAHBCmg.png" alt="book"/>
        <img src="http://i.imgur.com/H9verj1.png" alt="icon"/>
        <img src="http://i.imgur.com/WjnYD4r.png" alt="icon"/>
      </div>
    )
  }

}
