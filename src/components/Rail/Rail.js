import React from 'react';
import './rail.css';

function Rail ({ images, selectedIndex, onSelect }) {
  return (
    <div className="rail-container">
      {images.map((img, index) => (
        <button
          key={img.id}
          onClick={() => onSelect(index)}
          className={`rail-button ${selectedIndex === index ? 'selected' : ''}`}
        >
          Image {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Rail;
