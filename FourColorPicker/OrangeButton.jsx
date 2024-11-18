import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './OrangeButton.css'; // Import ButtonNavigate.css

const ClearButton = ({ buttonText, to, onClick, disabled, color }) => {
  const navigation = useNavigation(); // Get the navigation object

  /**
   * TODO: This may need to be fixed. Should we return after onClick() or to()
   */
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
    <button className="clear-button" onClick={handlePress} disabled={disabled}>
      <text>{buttonText}</text>
    </button>
  );
};

export default ClearButton;
