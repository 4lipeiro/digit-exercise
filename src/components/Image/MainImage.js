import React, { useState } from 'react';
import './mainImage.css';

function MainImage ({ image }) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!image) return <div>Loading...</div>;

  return (
    <div className="main-image-container">
      <div className="tooltip">
        <button onClick={() => window.open(image.photographer_url, "_blank")}>
        {image.photographer}
        </button>
        <div className="tooltip-text">Take me to profile ...</div>
      </div> 

      {showTooltip && <div className="tooltip">Take me to profile</div>}
      <img className='main-image' 
        src={image.src.large} 
        alt={image.alt || 'Selected Image from Pexels'} 
      />
    </div>
  );
};

export default MainImage;
