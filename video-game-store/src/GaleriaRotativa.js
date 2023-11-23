import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './componetes/GaleriaRotativa.css';

const ImageCarousel = () => {
  // Lista de URLs de imagens
  const images = [
    'https://rubberchickengames.com/wp-content/uploads/2018/07/dark-souls-remastered.jpg',
    'https://image.api.playstation.com/vulcan/img/rnd/202201/2122/J7oJE8POxtzUdpfGRKTeErQt.jpg',
    'https://files.tecnoblog.net/wp-content/uploads/2021/11/lies-of-p.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && sliderRef.current.slickNext) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    afterChange: (index) => setCurrentImageIndex(index),
  };

  return (
    <div className="ImageCarousel">
      <Slider ref={sliderRef} {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
