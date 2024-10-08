import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import Slider from 'react-slick';
import "../assets/css/Home.css"
import infra8 from "../assets/images/infra8.jpg"
import infra10 from "../assets/images/infra10.jpeg"
import infra11 from "../assets/images/infra11.jpg"
import infra12 from "../assets/images/infra12.jpg"

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
    <Slider {...settings}>
      <div className="slider_img">
        <img src={infra8} alt='infra8' />
      </div>
      <div className="slider_img">
        <img src={infra10} alt='infra10' />
      </div>
      <div className="slider_img">
        <img src={infra11} alt='infra11' />
      </div>
      <div className="slider_img">
        <img src={infra12} alt='infra12' />
      </div>
    </Slider>
  )
}

export default Home
