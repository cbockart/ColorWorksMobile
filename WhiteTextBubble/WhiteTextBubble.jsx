import React, { Component, useState } from 'react';
import './WhiteTextBubble.css';
import GrayAnswerBubble from '../GrayAnswerBubble/GrayAnswerBubble';

const WhiteTextBubble = ({ text1, text2, buttonText, to}) => {
    
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        //setIsClicked(true);
        setIsClicked(prevState => !prevState);
    };
  
    return (
        <div>
            <div className="TextBubble-white-box" onClick={handleClick}>
                <div className="TextBubble-purple-text">
                    {text1}
                </div>     
            </div>
            {isClicked && <GrayAnswerBubble text={text2} buttonText={buttonText} to = {to} />}
            
        </div>
    );
  };
  
  export default WhiteTextBubble;