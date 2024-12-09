import React, { useEffect, useState } from 'react';
import { LuBone } from "react-icons/lu";

function BreedSelector({ breed, setBreed, numImages, setNumImages, fetchImages }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className = "breeds-text">
        Select Breed:&nbsp;&nbsp;
        <select value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option value="">Dog breeds...</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </label>
      <label className = "images-text">
        Number of Images:&nbsp;&nbsp;
        <input 
          type="number" 
          value={numImages} 
          onChange={(e) => setNumImages(e.target.value)} 
          min="1" 
          max="100"
        />
      </label> <br/>
      <button className ="button" type="submit">Go Fetch! <LuBone/></button>
    </form>
  );
}

export default BreedSelector;
