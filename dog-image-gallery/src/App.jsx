/* 
  Name: Sarah Murphy
  Date: November 30, 2024
  QAP 3 - Semester 2

How many hours did it take you to complete this assessment? (Please keep try to keep track of how many hours you have spent working on each individual part of this assessment as best you can - an estimation is fine; we just want a rough idea.)

Answer: This assignment took about 12-15 hours to complete throughout the week.

What online resources you have used? (My lectures, YouTube, Stack overflow etc.)

Answer: I used YouTube, class recordings, and O'Reilly resources to complete this assignment.

Did you need to ask any of your friends in solving the problems. (If yes, please mention name of the friend. They must be amongst your class fellows.)

Answer: I didn't ask any friends/classmates for help.

Did you need to ask questions to any of your instructors? If so, how many questions did you ask (or how many help sessions did you require)?

Answer: I did not ask any questions to instructors.

Rate (subjectively) the difficulty of Making this all! from your own perspective, and whether you feel confident that you can solve a similar but different problem requiring some of the same techniques in the future now that you’ve completed this one.

Answer: Honestly, I'd give this one an 8. React is a little overwhelming and finnicky, but I know I'll get the hang of it the more I practice. 
*/


import React, { useState } from 'react';
import BreedSelector from './BreedSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import './App.css';


function App() {
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    if (breed && numImages > 0) {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`);
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="text">
      <h1>Dog Image Gallery</h1></div>
      <BreedSelector 
        breed={breed} 
        setBreed={setBreed} 
        numImages={numImages} 
        setNumImages={setNumImages} 
        fetchImages={fetchImages} 
      />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;