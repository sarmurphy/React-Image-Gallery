import React from 'react';
import './App.css';

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt="Dog" />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
