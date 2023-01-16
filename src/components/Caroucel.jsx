import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { cryptoProjects } from '../assets/data';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  380: { items: 2 },
  568: { items: 3 },
  1024: { items: 6 },
};

const Caroucel = () => {
  return (
    <div className="p-10 md-p-l5">
      <AliceCarousel
        mouseTracking
        items={cryptoProjects}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={2000}
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
      />
    </div>
  );
};

export default Caroucel;
