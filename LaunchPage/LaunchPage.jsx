import React, { useState } from 'react';
import './LaunchPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import ColorWorksSquareLogo from '../../Images/LaunchPage/ColorWorks Sqr logo 1.png';
import strings from '../../navigationStrings.json';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';

const LaunchPage = () => {
    return (
      <>  
        <img src={ColorWorksSquareLogo} className='launch-page-image-container' alt="logo"></img>
       
        <div className="text-container-launch-page">
          <div className="text-container-launch-page-bold">
            The ColorWorks team is devoted to helping you achieve your team, parenting, and relationship communication goals. 
          </div>
          <br></br>
          We meet your unique communication needs through an individualized approach to help you grow resilient and 
          low-stress relationships in all areas of your life. 
        </div>

        <div className="top-button-container">
          <ButtonNavigate buttonText="Sign-Up" to ={strings.beginQuizPage}></ButtonNavigate>
        </div>
        
        <div className="button-container">
          <ButtonNavigate buttonText="Login" to ={strings.loginPage}></ButtonNavigate>
        </div>

        <div className="button-container">
          <ButtonNavigate buttonText="Home" to ={strings.homePage}></ButtonNavigate>
        </div>

      </>
    );
};
export default LaunchPage;
