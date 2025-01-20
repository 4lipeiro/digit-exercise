import React, { useState, useEffect } from 'react';
import './App.css';
import { Rail, MainImage, Thumbnail, SearchBar } from './components';

const API_KEY = '563492ad6f917000010000017f488949f5c24f7cb9fc4ad4069c1050';
const DEFAULT_QUERY = 'nature';

function App() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [query, setQuery] = useState(DEFAULT_QUERY);

  async function fetchImages(searchQuery) {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=3`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      if (data.photos) {
        setImages(data.photos);
        setSelectedIndex(0);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  useEffect(() => {
    fetchImages(query);
  }, [query]);

  function handleSelect(index) {
    setSelectedIndex(index);
  }

  function handleSearch(newQuery) {
    setQuery(newQuery);
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />

      <div className="gallery-container">

        <div className="left-rail-container">
          <Rail images={images} selectedIndex={selectedIndex} onSelect={handleSelect} />
        </div>

        <div className="main-content-container">
          <MainImage image={images[selectedIndex]} />
          <Thumbnail images={images} selectedIndex={selectedIndex} onSelect={handleSelect} />
        </div>

      </div>
    </div>
  );
}

export default App;
