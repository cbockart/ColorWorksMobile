import React from 'react';
import './AskBeDoHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';

import ClearButton from '../../../components/FourColorPicker/OrangeButton';
import GoldButton from '../../../components/FourColorPicker/GoldButton';
import GreenButton from '../../../components/FourColorPicker/GreenButton';
import BlueButton from '../../../components/FourColorPicker/BlueButton';

import threeW_allColors from '../../../Images/Home/AskBeDo/threeW_allColors.png';

import { useFocusEffect } from '@react-navigation/native';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';

const AskBeDoHomePage = () => { 
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
        <div className='home-pages-whole-container'>
            <TopHeader />
            {/*Title Bubble*/}
            <HomePageTopSection headerText={"Ask Be Do"} hasDropdown={false}/>

            {/*3 words Image*/}
            <img src={threeW_allColors} className='home-pages-img-container' alt="logo"></img>

            {/*Instruction + new buttons*/}
            <div className='threewords-paragraph-subheaders'>Please select a color you would like to learn the ask be do steps for</div>
            {/*4 Buttons*/}
            <div className='threeWords-new-buttons-grid-container'>
                <div><GoldButton buttonText="" to ={strings.askBeDoGold}></GoldButton></div>  
                <div><ClearButton buttonText="" to ={strings.askBeDoOrange}></ClearButton></div>    
                <div><GreenButton buttonText="" to ={strings.askBeDoGreen}></GreenButton></div>
                <div><BlueButton buttonText="" to ={strings.askBeDoBlue}></BlueButton></div> 
            </div>

            <HomePageBottomSection/>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default AskBeDoHomePage;