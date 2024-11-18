import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './ButtonNavigate.css'; // Import ButtonNavigate.css

const ButtonNavigate = ({ buttonText, to, onClick, disabled, backgroundColor, textColor, dataMap}) => {
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
      if (dataMap) {
        navigation.navigate(to, dataMap); 
      } else {
        navigation.navigate(to); 
      }    }
  }
  };

  return (
    <button className="ButtonNavigate" onClick={handlePress} disabled={disabled} style={{ background: backgroundColor}}>
      <text style={{ color: textColor }}>{buttonText}</text>
    </button>
  );
};

export default ButtonNavigate;
