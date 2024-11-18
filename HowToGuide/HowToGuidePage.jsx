import React from 'react';
import './HowToGuidePage.css';
import LibraryClickingDestination from '../../components/Navigation/LibraryClickingDest/libraryClickingDest'

import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import colorSpectrumImage from './../../Images/HowToGuide/color_spectrum_transparent.png';
import ExtroverPuzzleImage from './../../Images/HowToGuide/Extrovert_puzzle.png';
import GB_inncorect_colorsImage from './../../Images/HowToGuide/GB_incorrect_colors.png';
import GO_inncorect_colorsImage from './../../Images/HowToGuide/GO_incorrect_colors.png';
import IntrovertPuzzleImage from './../../Images/HowToGuide/Introvert_puzzle.png';
import Orange_GreenImage from './../../Images/HowToGuide/Orange_Green.png';
import PersonalizedInfoPageImage from './../../Images/Home/Personalized_Info_Page.png';
import Purple_envolopeImage from './../../Images/HowToGuide/Purple_envelope.png';
import Purple_homeImage from './../../Images/HowToGuide/Purple_home.png';
import Purple_profileImage from './../../Images/HowToGuide/Purple_profile.png';
import Purple_settingsImage from './../../Images/HowToGuide/setting (1) 2.png';
import Purple_diceImage from './../../Images/HowToGuide/Purple_dice.png';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';

import { useFocusEffect } from '@react-navigation/native';

const HowToGuidePage = () => {
  const resetState = () => {
    window.scrollTo(0, 0);
  };

  useFocusEffect(
    React.useCallback(() => {
        resetState();
        return () => {};
    }, [])
  );
    return (
      <>
      <div className='howToGuide-page-whole-container'>
      <TopHeader />
        {/* Screen Header */}  
        <HomePageTopSection headerText={"How-To Guide"} hasDropdown={false}/>
        <ColorWorksText type={'instruction'} inputText={'Some useful tips for navigating and understanding the app'}></ColorWorksText>

        {/* Overview of symbols graph */}
        <div className='container-of-symbol-containers'>
          <div className="symbols-container">
            {/* <div className = "home-icon">ICON-HERE</div> */}
            <img src={Purple_homeImage} alt="Part 4" className="responsive-image" />
            <div className = "colorworks-information-text" style={{width: '235px'}}>Home will take you anywhere you need to go on the app</div>
          </div>   

          <div className="symbols-container">
            <img src={Purple_diceImage} alt="Part 4" className="responsive-image" />
            <div className = "colorworks-information-text" style={{width: '235px'}}>Link to games</div>
          </div>    

          <div className="symbols-container">
            <img src={Purple_envolopeImage} alt="Part 4" className="responsive-image" />
            <div className = "colorworks-information-text" style={{width: '235px'}}>Personal messages to CW</div>
          </div>

          <div className="symbols-container">
          <img src={Purple_profileImage} alt="Part 4" className="responsive-image" />
            <div className = "colorworks-information-text" style={{width: '235px'}}>Profile has a list of users on the account and their color types</div>
          </div>

          <div className="symbols-container">
            <img src={Purple_settingsImage} alt="Part 4" className="responsive-image" />
            <div className = "colorworks-information-text" style={{width: '235px'}}>Go to settings</div>
          </div>

          <div className="symbols-container">
          <img src={ExtroverPuzzleImage} alt="Part 4" className="responsive-image" />
            <div className = "colorworks-information-text" style={{width: '235px'}}>Extrovert</div>
          </div>

          <div className="symbols-container">
            <img src={IntrovertPuzzleImage} alt="Part 4" className="responsive-image" />
            <div className = "colorworks-information-text" style={{width: '235px', marginBottom: '4%'}}>Introvert</div>
          </div>
        </div>

        {/* Payment Header */}
        <div className="how-to-guide-header-container">
          <ColorWorksText type={'header'} inputText={'Payment Plans'}></ColorWorksText>
          <ColorWorksText type={'info'} inputText={'Different payment plans offer various activities or unlimited accounts, if you have not activated a higher account the option/ability will be grayed out as seen below'}></ColorWorksText>
        </div>

        <LibraryClickingDestination header={"Personalized Information"} description = {"Learn more about yourself"} imagePath = {PersonalizedInfoPageImage} backgroundColor = {"#C0C0C0"} ></LibraryClickingDestination>
        <ColorWorksText type={'header'} inputText={'OR'}></ColorWorksText>

        <ButtonNavigate buttonText={"Begin Quiz"} backgroundColor={'#C0C0C0'} ></ButtonNavigate>

        {/* Color Typing Rules Header */}
        <div className="how-to-guide-header-container">
          <ColorWorksText type={'header'} inputText={'Color Typing Rules'}></ColorWorksText>
          <ColorWorksText type={'info'} inputText={'You have a dominant and non dominant color your personality is not often an actual 50/50 split like in the image'}></ColorWorksText>
        </div>  

        <div className='GO_inncorect_colors-image-container'>
          <img src={Orange_GreenImage} alt="Part 4" className="GO_inncorect_colors-image" />
        </div> 

        <ColorWorksText type={'info'} inputText={'Certain colors do not mix with one another and here’s why. Reference the charts below for more understanding'}></ColorWorksText>
   
        <img src={colorSpectrumImage} alt="Part 4" className="howToGuide-image-container" />
 
        <div className="how-to-guide-header-container">
          <ColorWorksText type={'info'} inputText={'hese two color pairings and their reverses are not allowed'}></ColorWorksText>
        </div>

        <div className='color-pair-container'>
         <img src={GO_inncorect_colorsImage} alt="Part 4" className="GO_inncorect_colors-image" />
         <img src={GB_inncorect_colorsImage} alt="Part 4" className="GO_inncorect_colors-image" />
        </div>
      </div>
      <BottomHeader />
      </>
            
    );
  };
  
  export default HowToGuidePage;
  