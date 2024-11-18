// './PipPopUpPage'
import React, { useState, useEffect, useRef }  from 'react';
import './PinPopUpPage.css';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import xImage from'./x.svg';

// THIS IS HOW YOU CALL THE PAGE
// <PinPopUpPage 
// toBackAScreen={strings.LaunchPage} 
// toForwardAScreen={strings.LaunchPage}>
// </PinPopUpPage> */}


const PinPopUpPage = ({toBackAScreen, toForwardAScreen, onClose}) => {

  const navigation = useNavigation();

  const [pins, setPins] = useState(['', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  //Grabbing the pin from backend

    //USE FOR TESTING
    const usersPinBackend = "1234"  

    //THIS SHOULD PULL FROM BACKEND -> NEED TO TEST ONCE SERVER IS RUNNING
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch(`http://localhost:8080/api/quiz/${quizId}`);
    //       const data = await response.json();
    //       const usersPinBackend = data.usersPinBackend;
    //     } catch (error) {
    //       console.error('There was a problem fetching the pin:', error);
    //     }
    //   };
    //   fetchData();
    // }, [toBackAScreen, navigation]);

  

  
  //This is for the popup and allows the user to go back a screen when hitting the x 
  const handlePressBack = () => {
    navigation.navigate(toBackAScreen);
  };

  //This checks if the pin is correct and if not shows an error message
  useEffect(() => {
    const pinEntered = pins.join('');
    if (pinEntered.length === 4) {
        if (pinEntered === usersPinBackend) {
            onClose();
            navigation.navigate(toForwardAScreen);
        } else {
            setErrorMessage('Incorrect PIN. Please try again.');
            setShowErrorMessage(true);
            setPins(['', '', '', '']);
            setTimeout(() => {
              setShowErrorMessage(false);
            }, 5000);
        }
    }
}, [pins, usersPinBackend, navigation, toForwardAScreen]);


//This handles if there are multiple pins that need to be entered/changed while typing in the pin
const handleChangePin = (index, event) => {
    const inputPin = event.target.value.replace(/\D/g, '');
    if (inputPin.length <= 1) {
        const newPins = [...pins];
        newPins[index] = inputPin;
        setPins(newPins);
        setErrorMessage('');
        if (index < 3 && inputPin !== '') {
          refs[index + 1].current.focus();
      }
    }
};

  return (
      <div className="container-pin-pop-up-purple" >
        <div className="exit-pin-pop-up-container" onClick={handlePressBack} >
          <img src={xImage} alt="exit" className='exit-pin-pop-up' />
        </div>

        <div className="description-pin-pop-up-container" >
            <div className="description-pin-pop-up" >Please enter your PIN to continue</div>
        </div>

        <div className="pin-pop-up-container" >
          {pins.map((pin, index) => (
            <input key={index} ref={refs[index]} type="password" maxLength={1} value={pin} onChange={(event) => handleChangePin(index, event)} className="pin-input" />
          ))}
        </div>

        {showErrorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      </div>
  );
};

export default PinPopUpPage;



