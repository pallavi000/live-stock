import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function index() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider className="slick-slider" {...settings}>
      <div className="slick-slide bg-red-500">Slide 1</div>
      <div className="slick-slide bg-blue-500">Slide 2</div>
      <div className="slick-slide bg-green-500">Slide 3</div>
      <div className="slick-slide bg-red-500">Slide 1</div>
      <div className="slick-slide bg-blue-500">Slide 2</div>
      <div className="slick-slide bg-green-500">Slide 3</div>
    </Slider>
  );
}

export default index;
