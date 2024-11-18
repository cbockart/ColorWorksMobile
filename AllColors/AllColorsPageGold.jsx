//AllColorsPageGold
import React, { useState } from 'react';
import './AllColorsPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import BackButtonNavigate from '../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import GoldStats1 from '../../Images/AllColors/Golds_stat1.PNG';
import GoldStats2 from '../../Images/AllColors/Gold_stat2.png';
import selected_gold_background from '../../Images/AllColors/selected_gold_t.png';
import strings from '../../navigationStrings.json';
import GeneralParagraphsComponent from '../../components/GeneralParagraphsComponent/GeneralParagraphsComponent';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';

import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence } from '../../stringHandler';

const AllColorsPageGold = () => {
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
          <HomePageTopSection headerText={"All Colors: Gold"} hasDropdown={false}/>
        </div>

        {/*BackgroundImage*/}
        <div className="image-container">
            <img style={{marginTop: '5%'}} className='allcolors-colorworks-image' src={selected_gold_background} alt="logo"></img>
        </div> 
        
        <GeneralParagraphsComponent text1={"Golds Need Structure"} text2={splitParagraphBySentence("I am reliable, detail focused, hardworking, and loyal. I am service oriented and a prepared planner. I need stability, consistency, and security to feel calm. I think I am felxible but others say I am not. I am a natural leader and I bring order to complex situations. I get frusturated when others change plans on me or when they dissapoint me. I use the word should frequently as it communicates my expectations.")}></GeneralParagraphsComponent>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>
        
        <GeneralParagraphsComponent text1={"Gold Stressors"}></GeneralParagraphsComponent> 
        <div className="colorworks-information-text" style={{marginLeft: '7%'}}>         
            When things are confusing, chaotic, or out of order<br /><br />
            Inconsistency in rules, people, plans, or processes<br /><br />
            When people ignore their responsibilites or when they habitually run late<br />
        </div>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>
        
        <GeneralParagraphsComponent text1={"Gold Stress Behaviors"}></GeneralParagraphsComponent>
        <div className="colorworks-information-text" style={{marginLeft: '7%'}}>      
            Can appear controlling, demanding, or close-minded<br /><br />
            May become judgemental, pessimistic, worried, or blame<br /><br />
            Introverts become withdrawnn or passive-aggressive<br /><br />
            Extroverts become bossy, critical, or defensive           
        </div>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>

        {/*Stats*/}
        <GeneralParagraphsComponent text1={"Statistics"}></GeneralParagraphsComponent> 
      
        <div className="stats-image-container">
            <img src={GoldStats1} alt="logo"></img>
            <img src={GoldStats2} alt="logo"></img>
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
export default AllColorsPageGold;


