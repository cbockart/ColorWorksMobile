// LibraryClickingDest.jsx
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './libraryClickingDest.css';

// THIS IS HOW YOU CALL THE PAGE
// <libraryClickingDest
//   header="Your Header"
//   description="Your Description"
//   icon="path/to/your/icon.png"
//   backgroundColor="blue"
//   to="QuizQuestionPage"
// />

const LibraryClickingDest = ({ header, description, imagePath, backgroundColor, to }) => {
  const navigation = useNavigation(); // Get the navigation object

  const containerStyle = {
    backgroundColor: backgroundColor // Set the background color dynamically
  };

  const handlePress = () => {
    navigation.navigate(to); // Navigate to the specified screen
  };

  return (
    <div className="container" style={containerStyle} onClick={handlePress}>
      <div className='text-container-library-clicking-dest' >
        <div className="header" >
              <text>{header}</text>
        </div>
        <div className="description" >
              <text>{description}</text>
        </div>
      </div>
      <div className="icon-container">
        <img src={imagePath} alt="Icon" className="icon-library-clicking-dest"/>
      </div>
    </div>
  );
};

export default LibraryClickingDest;



