import React from 'react';
import './thumbnail.css';

function Thumbnail({ images, selectedIndex, onSelect }) {
  return (
    <div className="thumbnails-container">
      {images.map((img, index) => (
        <div className={`image-card ${selectedIndex === index ? 'selected' : ''}`} key={index}>
          <div className="image-content">
            <img
              src={img.src.small}
              alt={img.alt || 'Thumbnail'}
              onClick={() => onSelect(index)}
              className={`thumbnail ${selectedIndex === index ? 'selected' : ''}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thumbnail;
