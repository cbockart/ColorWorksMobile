import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './GrayAnswerBubble.css';
import '../Navigation/Buttons/HyperlinkButton/HyperlinkButtonNavigate.css'; 

const GrayAnswerBubble = ({text, buttonText, to}) => {

    const handleClick = () => {    
    };

    const navigation = useNavigation(); // Get the navigation object

    const handlePress = () => {
        if(to){
        navigation.navigate(to); // Navigate to the specified screen
        } 
    };
  
    return (
        <div className="AnswerBubble-gray-box" onClick={handleClick}>
            <div className="colorworks-instruction-text">
                {text}
                {to && (
                    <><br></br><br></br></>
                )}   
                <button className="HyperlinkButtonNavigate" onClick={handlePress}>
                    <text>{buttonText}</text>
                </button>  
            </div>
        </div>
    );
  };
  
  export default GrayAnswerBubble;