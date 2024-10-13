import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import Slider from 'react-slick';
import "../assets/css/Home.css"
import slider1 from "../assets/images/slider1.jpg"
import slider2 from "../assets/images/slider2.jpg"
import slider3 from "../assets/images/slider3.jpeg"
import slider5 from "../assets/images/slider5.jpg"


const Home = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div className="right_btn" onClick={onClick}><IoIosArrowDropright size={50} color='#fff' /> </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div  className="left_btn" onClick={onClick}><IoIosArrowDropleft size={50} color='#fff'  /></div>
        );
      }

      var settings = {
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        className: 'homeSlider',
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <div id="home">
    <Slider {...settings}>
      <div className="slider_img">
        <img src={slider1} alt='infra8' />
      </div>
      <div className="slider_img">
        <img src={slider2} alt='infra10' />
      </div>
      <div className="slider_img">
        <img src={slider3} alt='infra11' />
      </div>
      <div className="slider_img">
        <img src={slider5} alt='infra12' />
      </div>
    </Slider>
    </div>
  )
}

export default Home
