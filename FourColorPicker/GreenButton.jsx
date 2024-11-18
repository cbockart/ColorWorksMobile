import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './GreenButton.css'; // Import ButtonNavigate.css

const GreenButton = ({ buttonText, to, onClick, disabled, color }) => {
  const navigation = useNavigation(); // Get the navigation object
  const handlePress = () => {
    if(!disabled) {
    if(onClick) {
      onClick();
    }
    if(to) {
      navigation.navigate(to, color); // Navigate to the specified screen
    }
  }
  };

  return (
    <button className="green-button" onClick={handlePress} disabled={disabled}>
      <text>{buttonText}</text>
    </button>
  );
};

export default GreenButton;
