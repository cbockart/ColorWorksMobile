//AllColorsPageGreen
import React, { useState } from 'react';
import './AllColorsPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import BackButtonNavigate from '../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import GreenStats1 from '../../Images/AllColors/Green_stat1.png';
import GreenStats2 from '../../Images/AllColors/Green_stat2.png';
import selected_green_background from '../../Images/AllColors/selected_green_t.png';
import strings from '../../navigationStrings.json';
import GeneralParagraphsComponent from '../../components/GeneralParagraphsComponent/GeneralParagraphsComponent';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';

import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence } from '../../stringHandler';

const AllColorsPageGreen = () => {
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
      <div>
      <TopHeader />
        <div className="all-colors-page-header-container">
          <HomePageTopSection headerText={"All Colors: Green"} hasDropdown={false}/>
        </div>

        {/*BackgroundImage*/}
        <div className="image-container">
            <img style={{marginTop: '5%'}} className='allcolors-colorworks-image' src={selected_green_background} alt="logo"></img>
        </div>    
       
        <GeneralParagraphsComponent text1={"Greens Need Information"} text2={splitParagraphBySentence("I am logical, practical, and I enjoy learning. I am an independent problem solver and I focus on the big picture. I have a difficult time relating to and sharing my emotions. I frequently ask why questions to gather information. I use phrases like I think, What were you thinking, and that does not make sense, explain. Emotions and emotional outbursts are hard for me to handle.")}></GeneralParagraphsComponent>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>

        {/*Green stressor + behavior*/}
        <GeneralParagraphsComponent text1={"Green Stressors"}></GeneralParagraphsComponent> 
        <div className="colorworks-information-text" style={{marginLeft: '7%'}}>         
            Stupid people and policies<br /><br />
            Other people questioning me or forcing me to make quick decisions<br /><br />
            When those around me are emotional, illogical, loud, or fighting<br />
        </div>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>
        <GeneralParagraphsComponent text1={"Green Stress Behaviors"}></GeneralParagraphsComponent> 
        <div className="colorworks-information-text" style={{marginLeft: '7%'}}>      
            Can appear arrogant and critical or defensive and aloof<br /><br />
            May become self-rightous, a know-it-all, or argue using logic<br /><br />
            Introverts check-out, detatch, or ignore other's feelings<br /><br />
            Extroverts become defensive, harsh, or demanding          
        </div>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>

        {/*Stats*/}
        <GeneralParagraphsComponent text1={"Statistics"}></GeneralParagraphsComponent> 
        <div className="stats-image-container">
            <img src={GreenStats1} alt="logo"></img>
            <img src={GreenStats2} alt="logo"></img>
        </div>  

        {/*Back Button*/}
        <div className="allColors-button-container">
          <ButtonNavigate buttonText="Go back to All Colors" to ={strings.allColorsPage}></ButtonNavigate>
        </div>

        <BottomHeader/>
      </div>     
      </>
    );
};
export default AllColorsPageGreen;


