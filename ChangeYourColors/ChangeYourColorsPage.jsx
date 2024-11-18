
import React from 'react';
import './ChangeYourColorsPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import HyperlinkButtonNavigate from '../../components/Navigation/Buttons/HyperlinkButton/HyperlinkButtonNavigate';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';

import GoldMyersBriggs from '../../Images/ChangeYourColor/Gold_Briggs.PNG';
import OrangeMyersBriggs from '../../Images/ChangeYourColor/Orange_Briggs.PNG';
import GreenMyersBriggs from '../../Images/ChangeYourColor/Green_Briggs.PNG'
import BlueMyersBriggs from '../../Images/ChangeYourColor/Blue_Briggs.PNG'

import strings from '../../navigationStrings.json';
import { useFocusEffect } from '@react-navigation/native';
import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage';


const ChangeYourColorsPage = () => {
  const resetState = () => {
    window.scrollTo(0, 0);
  };

  useFocusEffect(
    React.useCallback(() => {
        resetState();
        return () => {};
    }, [])
  );

  const handleChangeYourColors = () => {
    // Just filler text for now
    // if(isCheckboxChecked) {
    //   console.log('Creating account...');
    //   //Add additional logic as needed
    // }else {
    //   console.log('Please accept the terms and privacy policy.');
    //   //You can provide a user-friendly message or take appropriate action
    // }
  };
  const [email] = useAsyncStorage('email');

    return (
      <>
        <div className='CYCP-one-whole-page-container'>
          <TopHeader/>
            {/*Top info stuff*/}
            <HomePageTopSection headerText={"Change Your Colors"} hasDropdown={false}/>
            <ColorWorksText type={'instruction'} inputText={'If unsatisfied with your colors, you may retake the quiz or manually change your colors'}></ColorWorksText>

            {/*Begin Quiz Button + hyperlink*/}
            <div className="CYCP-style-button-container">
              <ButtonNavigate buttonText="Begin Quiz" to = {strings.quizQuestionPage} onClick={handleChangeYourColors} dataMap={{"email": email, "changingColors" : true}} disabled={false}></ButtonNavigate>
            </div> 
            <HyperlinkButtonNavigate buttonText="Manually Change Your Colors" to = {strings.changeYourColorsPageTwo}></HyperlinkButtonNavigate>
            <br></br>
          
            {/*Text above images*/}
            <ColorWorksText type={'info'} inputText={'If you have taken a similar quiz to our before such as Myers Briggs, below is a conversion chart'}></ColorWorksText>
            <br></br>
            <ColorWorksText type={'header'} inputText={'Myers Briggs Conversion'}></ColorWorksText>
            
            {/*Conversion Images*/}
            <div style={{marginBottom: '18%'}}>
              <img src={GoldMyersBriggs} class="rounded-image"></img>
              <img src={OrangeMyersBriggs} class="rounded-image"></img>
              <img src={GreenMyersBriggs} class="rounded-image"></img>
              <img src={BlueMyersBriggs} class="rounded-image"></img>
            </div>
            
            <BottomHeader/>
        </div>
            
      </>
            
    );
  };

export default ChangeYourColorsPage;