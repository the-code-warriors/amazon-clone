import React, { Component } from 'react';
import $ from 'jquery';


import './carousel.css';



export default class Carousel extends Component{

  componentDidMount(){

  let carouselItems = $('.carousel-items');
  let scrollDistance = 0;
  $('.arrow-right').on('click', function(){
    if(scrollDistance < 200){
    scrollDistance += 50;
    carouselItems.stop().animate({scrollLeft: scrollDistance})
  }
  });
  $('.arrow-left').on('click', function(){
    if(scrollDistance > 0){
    scrollDistance -= 50;
    carouselItems.stop().animate({scrollLeft: scrollDistance})
  }
  })













    // let carouselItems = document.querySelector('.carousel-items');
    // let scrollDistance = 0;
    // let maxScrollDistance = 100;
    // carouselItems.scrollLeft = 0;
    //
    //
    // document.querySelector('.arrow-right').addEventListener('click', function(e){
    //   e = e || window.event;
    //   e.preventDefault();
    //   console.log(e.defaultPrevented);
    //
    //   if(scrollDistance < maxScrollDistance){
    //     animateScrollRight();
    //   }
    // });
    //
    // document.querySelector('.arrow-left').addEventListener('click', function(e){
    //   e = e || window.event;
    //   e.preventDefault();
    //
    //   // if(scrollDistance !== 0){
    //     animateScrollLeft();
    //
    //   // }
    // });
    //
    // function animateScrollRight(){
    //   var pos = carouselItems.scrollLeft;
    //   var stop = carouselItems.scrollLeft += 20;
    //   var id = setInterval(frame, 10);
    //   function frame() {
    //
    //     if (pos == stop) {
    //         clearInterval(id);
    //     } else {
    //         pos++;
    //         carouselItems.scrollLeft = pos;
    //         carouselItems.scrollLeft = pos;
    //     }
    //   }
    // }
    // function animateScrollLeft(){
    //   console.log(carouselItems.scrollLeft);
    //   var pos = carouselItems.scrollLeft;
    //   var stop = carouselItems.scrollLeft -= 20;
    //   var id = setInterval(frame, 10);
    //   function frame() {
    //
    //     if (pos == stop) {
    //         clearInterval(id);
    //     } else {
    //         pos--;
    //         carouselItems.scrollLeft = pos;
    //         carouselItems.scrollLeft = pos;
    //     }
    //   }
    // }

  }

  render(){





    return (
      <div className='carousel-flex'>

        <div className="carousel-and-arrows">
          <h1 className="arrow arrow-left">←</h1>

          <div className='carousel-items'>

           <div className="item"></div>
           <div className="item"></div>
           <div className="item"></div>
           <div className="item"></div>
           <div className="item"></div>

         </div>

         <h1 className="arrow arrow-right">→</h1>



      </div>

    </div>
    )
  }

}
