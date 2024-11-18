import React from 'react';
import './CalmHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import ClearButton from '../../../components/FourColorPicker/OrangeButton';
import GoldButton from '../../../components/FourColorPicker/GoldButton';
import GreenButton from '../../../components/FourColorPicker/GreenButton';
import BlueButton from '../../../components/FourColorPicker/BlueButton';

/*Calm Images*/
import calmTitle from '../../../Images/Home/Calm/calm_title.png';
import calmC from '../../../Images/Home/Calm/calm_c.png';
import calmA from '../../../Images/Home/Calm/calm_a.png';
import calmL from '../../../Images/Home/Calm/calm_l.png';
import calmM from '../../../Images/Home/Calm/calm_m.png';

import { useFocusEffect } from '@react-navigation/native';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import ColorWorksText from '../../../components/ColorWorksText/ColorWorksText';

const CalmHome = () => {
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
            <HomePageTopSection headerText={"CALM"} hasDropdown={false}/>
            <br></br>

            <div className='colorworks-information-text'>
                C-A-L-M is a straightforward, four-step approach we developed to help you process stress and identify 
                anxious thought patterns. This program teaches you to identify, address, and manage stressful 
                situations by leveraging your individual strengths, allowing you to take control of your anxiety 
                and move ahead with a plan of action. Parents that become familiar with this technique can then 
                teach their children how to utilize these skills to recognize anxiety and mitigate stress behaviors.
            </div>

            <img src={calmTitle} className='home-pages-img-container' alt="logo"></img>
            <img src={calmC} className='home-pages-img-container' alt="logo"></img>
            <img src={calmA} className='home-pages-img-container' alt="logo"></img>
            <img src={calmL} className='home-pages-img-container' alt="logo"></img>
            <img src={calmM} className='home-pages-img-container' alt="logo"></img>

            {/*Instruction + new buttons*/}
            <ColorWorksText type={'instruction'} inputText={'Please select a color you would like to learn the steps of calm for'}></ColorWorksText>
            {/*4 Buttons*/}
            <div className='threeWords-new-buttons-grid-container'>
                <div><GoldButton buttonText="" to ={strings.calmGold}></GoldButton></div>  
                <div><ClearButton buttonText="" to ={strings.calmOrange}></ClearButton></div>    
                <div><GreenButton buttonText="" to ={strings.calmGreen}></GreenButton></div>
                <div><BlueButton buttonText="" to ={strings.calmBlue}></BlueButton></div> 
            </div>

            <HomePageBottomSection />
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default CalmHome;