import React from 'react';
import Slider from 'react-slick';
import './Slider.css'; // Optional for additional styling

const imageUrls = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = () => (
  <div className="slider-container">
    <Slider {...sliderSettings}>
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Slide ${index + 1}`} className="slider-image" />
        </div>
      ))}
    </Slider>
  </div>
);

export default ImageSlider;
