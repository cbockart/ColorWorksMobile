import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './HyperlinkButtonNavigate.css'; // Import HyperlinkButtonNavigate.css

const HyperlinkButtonNavigate = ({ buttonText, to, onClick }) => {
  const navigation = useNavigation(); // Get the navigation object

  const handlePress = () => {
    if(to){
      navigation.navigate(to); // Navigate to the specified screen
    } else if (onClick) {
      onClick(); // Call the onClick function passed as a prop
    }
  };

  return (
    <div>
      <button className="HyperlinkButtonNavigate" onClick={handlePress}>
        <text>{buttonText}</text>
      </button>
    </div>
  );
};

export default HyperlinkButtonNavigate;
