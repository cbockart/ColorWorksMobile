//AllColorsPageOrange
import React, { useState } from 'react';
import './AllColorsPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import BackButtonNavigate from '../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import OrangeStats1 from '../../Images/AllColors/Orange_stat1.png';
import OrangeStats2 from '../../Images/AllColors/Orange_stat2.png';
import selected_orange_background from '../../Images/AllColors/selected_orange_t.png';
import strings from '../../navigationStrings.json';
import GeneralParagraphsComponent from '../../components/GeneralParagraphsComponent/GeneralParagraphsComponent';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';

import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence } from '../../stringHandler';

const AllColorsPageOrange = () => {
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
            <HomePageTopSection headerText={"All Colors: Orange"} hasDropdown={false}/>
            </div>

            {/*BackgroundImage*/}
            <div className="image-container">
                <img style={{marginTop: '5%'}} className='allcolors-colorworks-image' src={selected_orange_background} alt="logo"></img>
            </div>

            <GeneralParagraphsComponent text1={"Oranges Need Freedom"} text2={splitParagraphBySentence("I am the chameleon of color types and I can see myself in the descriptions of the other three colors. I am action oriented and I need to get things done my way. I can move fast when I want to or I may chose to procrastinate. I need rewards to keep me motivated. I can get distracted but I can also be decisive, efficient, and practical. I am askilled negotiator and I use a lot of verbs when I talk.")}></GeneralParagraphsComponent>
            <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>

            {/*Orange stressor + behavior*/}
            <GeneralParagraphsComponent text1={"Orange Stressors"}></GeneralParagraphsComponent> 
            <div className="colorworks-information-text" style={{marginLeft: '7%'}}>         
                Uneccsary rules or routines that lack flexibility<br /><br />
                Waiting with nothing to do or feeling restricted<br /><br />
                When I can't have or do things my way, immediatley<br />
            </div>
            <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>
            <GeneralParagraphsComponent text1={"Orange Stress Behaviors"}></GeneralParagraphsComponent> 
            <div className="colorworks-information-text" style={{marginLeft: '7%'}}>      
                Can appear defiant, careless, rebellious, or irresponsible<br /><br />
                May act self-centered or purposefully break the rules<br /><br />
                Introverts check-out, sleep, or procrastinate<br /><br />
                Extroverts become blunt, rude, or confrontational            
            </div>
            <div className='colorworks-paragraph-splitter' style={{marginLeft: '4%'}}></div>

            {/*Stats*/}
            <GeneralParagraphsComponent text1={"Statistics"}></GeneralParagraphsComponent> 
            <div className="stats-image-container">
                <img src={OrangeStats1} alt="logo"></img>
                <img src={OrangeStats2} alt="logo"></img>
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
export default AllColorsPageOrange;


