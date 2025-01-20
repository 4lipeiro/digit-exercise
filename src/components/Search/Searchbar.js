import React, { useState } from 'react';
import './searchbar.css';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
    setInputValue(''); //to be implemented: toast message for empty search
  };

  return (
    <form onSubmit={handleSubmit} className="search-form search-container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Enter a topic ..." 
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;
