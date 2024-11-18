//AllColorsPageBlue
import React, { useState } from 'react';
import './AllColorsPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import BackButtonNavigate from '../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import BlueStats1 from '../../Images/AllColors/Blue_stat1.png';
import BlueStats2 from '../../Images/AllColors/Blue_stat2.png';
import selected_blue_background from '../../Images/AllColors/selected_blue_t.png';
import strings from '../../navigationStrings.json'; 
import GeneralParagraphsComponent from '../../components/GeneralParagraphsComponent/GeneralParagraphsComponent';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';

import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence } from '../../stringHandler';

const AllColorsPageBlue = () => {
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
          <HomePageTopSection headerText={"All Colors: Blue"} hasDropdown={false}/>
        </div>

        
        <div className="image-container">
            <img style={{marginTop: '5%'}} className='allcolors-colorworks-image' src={selected_blue_background} alt="logo"></img>
        </div>
       
        <GeneralParagraphsComponent text1={"Blues Need Connections"} text2={splitParagraphBySentence("I am intuitive, communicative, and sensitive to others' needs and emotions. I usually know how other people are feeling before they tell me, and I nurture those around me. I enjoy nature, spirituality, friends, and family. Authenticity, a gentle approach, and understanding are important to me. I say and I feel often and I use touch to communicate my emotions.")}></GeneralParagraphsComponent>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>
   
        <GeneralParagraphsComponent text1={"Blue Stressors"}></GeneralParagraphsComponent>
        <div className='colorworks-information-text' style={{marginLeft: '7%'}}>         
            Disharmony, mean people, insincerity, and conflict <br /><br />
            When rules are more important than people <br /><br />
            When I don't know what someone is thinking or when they are lying to me <br />
        </div>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>

        <GeneralParagraphsComponent text1={"Blue Stress Behaviors"}></GeneralParagraphsComponent>
        <div className='colorworks-information-text' style={{marginLeft: '7%'}}>      
            Can appear overwhelmed and struggle to say no<br /><br />
            May seem wishy-washy, irrational, or overly emotional<br /><br />
            Introverts become withdrawn, tearful, and may oversleep<br /><br />
            Extroverts complain, and their communication is focused on people problems            
        </div>
        <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>
        
        {/*Stats*/}
        <GeneralParagraphsComponent text1={"Statistics"}></GeneralParagraphsComponent>

        <div className="stats-image-container">
            <img src={BlueStats1} alt="logo"></img>
            <img src={BlueStats2} alt="logo"></img>
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
export default AllColorsPageBlue;


