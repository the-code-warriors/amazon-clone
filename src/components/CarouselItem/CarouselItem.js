import React, { Component } from 'react';
import $ from 'jquery';


import './carouselItem.css';



export default class CarouselItem extends Component{

  componentDidMount(){


  }

  render(){





    return (
      <div className='carousel-item-main'>
        <h1 className='carousel-item-title'>{this.props.title}</h1>
        <div className='colored-border-div'></div>
        <p className="carousel-item-desc1">{this.props.desc1}</p>
        <p className="carousel-item-desc2">{this.props.desc2}</p>
        <img className='carousel-item-image' src={this.props.img} alt="image"/>
      </div>
    )
  }

}
