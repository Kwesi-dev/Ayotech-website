import React from 'react'
import Slider from "react-slick";
import "./carousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
    };
  return (
    <div className="carousel-container">
        <div className="carousel-container-wrapper">
            <Slider {...settings}>
                <div className="slider-item">
                </div>
                <div className="slider-item">
                </div>
                <div className="slider-item">
                </div>
                <div className="slider-item">
                </div>
                <div className="slider-item">
                </div>
                <div className="slider-item">
                </div>
                <div className="slider-item">
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Carousel