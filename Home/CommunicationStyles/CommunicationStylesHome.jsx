import React from 'react';
import './CommunicationStylesHome.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import ClearButton from '../../../components/FourColorPicker/OrangeButton';
import BlueButton from '../../../components/FourColorPicker/BlueButton';
import GreenButton from '../../../components/FourColorPicker/GreenButton';
import GoldButton from '../../../components/FourColorPicker/GoldButton';
import PageInfoBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';

import threeWordsImage from '../../../Images/AllColors/general_allColors_t.png';

import { useFocusEffect } from '@react-navigation/native';
import PageInfoTopSection from '../../../components/HomePageTopSection/HomePageTopSection';

const CommunicationStylesHome = () => {
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
            <PageInfoTopSection headerText="Communication Styles" hasDropdown={false}/>

            {/*3 words Image*/}
            <img src={threeWordsImage} className='communication-colorworks-image' alt="logo"></img>


            {/*Instruction + new buttons*/}
            <div className='communication-change-account-text'>Please select a color you would like to learn the 3 words for</div>
            {/*4 Buttons*/}
            <div className='communication-new-buttons-grid-container'>
                <div><GoldButton buttonText="" to ={strings.communicationStyleColor} color={"Gold"}></GoldButton></div>  
                <div><ClearButton buttonText="" to ={strings.communicationStyleColor} color={"Orange"}></ClearButton></div>    
                <div><GreenButton buttonText="" to ={strings.communicationStyleColor} color={"Green"}></GreenButton></div>
                <div><BlueButton buttonText="" to ={strings.communicationStyleColor} color={"Blue"}></BlueButton></div> 
            </div>

            {/**/}
            <PageInfoBottomSection/>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default CommunicationStylesHome;