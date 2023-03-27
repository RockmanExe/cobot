import React, {useState} from 'react';
import './gallery.css';

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  return (
    <div className = 'gallery' id = "gallery">
      <h1> Gallery </h1>
      <img src={images[currentImageIndex]} alt="Carousel" className = 'Carousel' />
      <div>
        <button onClick={goToPreviousImage}>Previous</button>
        <button onClick={goToNextImage}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;