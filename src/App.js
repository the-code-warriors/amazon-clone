import React, { Component } from 'react';
import Highlights from './components/highlights-component/highlights.component';
import Carousel from './containers/Carousel/Carousel';
import './App.css';

import Navbar from './components/navbar-component/nav-bar.component'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Highlights></Highlights>
        <Navbar/>
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
    );
  }
}

export default App;
