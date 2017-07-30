import React, { Component } from 'react';
import $ from 'jquery';

import Carousel from './../Carousel/Carousel';
import './kindleCarousel.css';



export default class MainCarousel extends Component{

  componentDidMount(){


  }

  render(){





    return (
      <div className='kindle-carousel-main'>
        <h1 className="kindle-carousel-title">Recommendations for You in Kindle Store</h1>
        <Carousel
          imageWidth='12vw'
          carouselItemData = {[
            {
              img:'http://i.imgur.com/kHuZ3aq.jpg'
            },
            {
              img:'http://i.imgur.com/Q3Yt8s5.jpg'
            },
            {
              img:'http://i.imgur.com/etpHlir.jpg'
            },
            {
              img:'http://i.imgur.com/Mpp9Msy.jpg'
            },
            {
              img:'http://i.imgur.com/XaGI1hK.jpg'
            },
            {
              img:'http://i.imgur.com/CdZjtIu.jpg'
            },
            {
              img: 'http://i.imgur.com/ihalXWx.jpg'
            },
            {
              img: 'http://i.imgur.com/pvhhoEj.jpg'
            },
            {
              img: 'http://i.imgur.com/5BNcDqe.jpg'
            },
            {
              img: 'http://i.imgur.com/dDpqBWO.jpg'
            },
            {
              img: 'http://i.imgur.com/bKSqRLh.jpg'
            },
            {
              img: 'http://i.imgur.com/W8obh5g.jpg'
            },
            {
              img: 'http://i.imgur.com/DpZkLp2.jpg'
            }
          ]}
         />
      </div>
    )
  }

}
