import React from 'react';
import './mainImage.css';

function MainImage ({ image }) {
  if (!image) return <div>Loading...</div>;

  return (
    <div className="main-image-container">
      <h2>
        <a href={image.photographer_url} target="_blank">
          {image.photographer}
        </a>
      </h2>
      <img 
        src={image.src.large} 
        alt={image.alt || 'Selected Image from Pexels'} 
      />
    </div>
  );
};

export default MainImage;
