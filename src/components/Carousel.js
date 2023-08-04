import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    // <div className="carousel">
    //   <div className="image-container">
    //     <img style={{width: "100%"}} src={images[currentIndex]} alt={`${currentIndex + 1}`} />
    //   </div>
    //   <div className="controls">
    //     <button style={{ fontWeight: 'bold', fontSize:"30px" }} onClick={handlePrev}>{"<"}</button>
    //     <button style={{ fontWeight: 'bold', fontSize:"30px" }} onClick={handleNext}>{">"}</button>
    //   </div>
    // </div>

    <div className="carousel">
      <div className="image-container">
        <img className="img-fluid" src={images[currentIndex]} alt={`${currentIndex + 1}`} />
      </div>
      <div className="controls">
        <button
          className="btn btn-primary p-1"
          style={{ fontWeight: '300', fontSize: '20px'  }}
          onClick={handlePrev}
        >
          {"<"}
        </button>
        <button
          className="btn btn-primary p-1"
          style={{ fontWeight: '300', fontSize: '20px' }}
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
