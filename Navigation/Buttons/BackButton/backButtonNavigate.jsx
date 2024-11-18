import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './backButtonNavigate.css'; // Import ButtonNavigate.css

import Arrow from'./arrow.png'

//Callie added 
import purple_arrow from './arrow-small-left 1.png'

const BackButtonNavigate = ({to, dataTag, data}) => {
  const navigation = useNavigation(); // Get the navigation object

  const handlePress = () => {
    navigation.navigate(to, {[dataTag]: data}); 
  };

  return (
    <button className="BackButtonNavigate" onClick={handlePress} >
        <img src={purple_arrow} alt="backButton" className="backButtonImage"/>
    </button>
  );
};

export default BackButtonNavigate;
