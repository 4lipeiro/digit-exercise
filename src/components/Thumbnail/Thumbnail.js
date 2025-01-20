import React from 'react';
import './thumbnail.css';

function Thumbnail({ images, selectedIndex, onSelect }) {
  return (
    <div className="thumbnails-container">
      {images.map((img, index) => (
        <img
          key={img.id}
          src={img.src.small}
          alt={img.alt || 'Thumbnail of the image'}
          onClick={() => onSelect(index)}
          className={`thumbnail ${selectedIndex === index ? 'selected' : ''}`}
        />
      ))}
    </div>
  );
};

export default Thumbnail;
