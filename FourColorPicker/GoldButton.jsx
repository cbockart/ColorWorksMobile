import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './GoldButton.css'; // Import ButtonNavigate.css

const GoldButton = ({ buttonText, to, onClick, disabled, color }) => {
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
    <button className="gold-button" onClick={handlePress} disabled={disabled}>
      <text>{buttonText}</text>
    </button>
  );
};

export default GoldButton;
