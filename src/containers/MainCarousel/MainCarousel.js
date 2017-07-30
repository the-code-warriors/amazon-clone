import React, { Component } from 'react';
import $ from 'jquery';

import Carousel from './../Carousel/Carousel';
import './mainCarousel.css';



export default class MainCarousel extends Component{

  componentDidMount(){


  }

  render(){





    return (
      <div className='main-carousel-main'>
        <Carousel
          imageWidth='15vw'
          carouselItemData = {[
            {
              color:'#82D8E3',
              title:'PRIME',
              desc1:'GET FREE ONE-DAY SHIPPING',
              desc2:'Order by the afternoon',
              img:'http://i.imgur.com/qxfz07S.png'
            },
            {
              color:'#ADE422',
              desc1:'LOCAL FAVORITES DELIVERED',
              desc2:'Save a trip across town',
              title:'FRESH',
              img:'http://i.imgur.com/m8In2Hn.png'
            },
            {
              color:'#FFA724',
              desc1:'START WATCHING',
              desc2:'The Tick',
              title:'VIDEO',
              img:'http://i.imgur.com/0iAraVB.jpg'
            },
            {
              color:'#FF5252',
              desc1:'AMAZON MUSIC UNLIMITED',
              desc2:'$10 Towards Music',
              title:'MUSIC',
              img:'http://i.imgur.com/jOGdecm.png'
            },
            {
              color:'#82D8E3',
              desc1:'VOICE CONTROL YOUR WORLD',
              desc2:'Echo & Alexa Devices',
              title:'MEET ALEXA',
              img:'http://i.imgur.com/SIWXChR.png'
            }
          ]}
         />
      </div>
    )
  }

}
