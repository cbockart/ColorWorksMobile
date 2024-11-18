import React, { useState, useEffect, useRef }  from 'react';
import './LogOutPopUp.css';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import xImage from './x.svg';

//HOW TO CALL THIS CONTAINER
{/* <LogOutPopUp 
    toForwardAScreen={strings.PAGE}>
</LogOutPopUp> */}


const LogOutPopUp = ({toForwardAScreen, onClose}) => {
    
    const navigation = useNavigation();
    
    const handlePressBack = () => {
        console.log("Back button clicked");
        onClose();
    };

    const handlePressForward = () => {
        navigation.navigate(toForwardAScreen);
    };  

    return (
        <div className="container-log-out-pop-up-purple" >

            <div className="exit-log-out-pop-up-container" onClick={handlePressBack} >
                <img src={xImage} alt="exit" className='exit-log-out-pop-up' />
            </div>

            <div className="description-log-out-pop-up-container" >
                <div className="description-log-out-pop-up" >Are you sure you want to logout?</div>
            </div>

            <div className="yes-no-log-out-pop-up-container">
                <div className="no-log-out-pop-up-container" onClick={handlePressBack}>
                    <div className = "no-yes-log-out-pop-up">No</div>
                </div>

                <div className="yes-log-out-pop-up-container" onClick={handlePressForward}>
                    <div className = "no-yes-log-out-pop-up">Yes</div>
                </div>

            </div>


        </div>
    );
  };
  
  export default LogOutPopUp;
  
