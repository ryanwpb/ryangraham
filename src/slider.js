import React, { Component } from 'react';
import Slider from "react-slick";
import tiyLogo from './assets/images/tiy-logo.png';
import vLogo from './assets/images/vitacost-logo.png';
import marLogo from './assets/images/marketran-logo.jpg';

 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div>
          <img src={tiyLogo} width="200" alt="The Iron Yard Logo"/>
        </div>
        </div>
        <div>
          <img src={vLogo} width="200" alt="Vitacost Logo"/>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;