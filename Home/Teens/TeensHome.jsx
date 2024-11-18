import React from 'react';
import './TeensHome.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import { useFocusEffect } from '@react-navigation/native';
import PageInfoBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import PageInfoTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import { HeaderSection, ParagraphSection, SubHeaderSection } from '../../../stringHandler';
import { getTeensBeFriendBlue, getTeensBeFriendGold, getTeensBeFriendGreen, getTeensStressReactions, getTeensStressors, getTeensSummary, getTeensBeFriendOrange } from './TeensHomeText';
import { splitParagraphBySentence } from '../../../stringHandler';


const TeensHome = () => {
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
            <PageInfoTopSection headerText={"Teens"} hasDropdown={false}/>

            {/*Oranges*/}
            <HeaderSection headerText={"Oranges"} style={{color: "#FF6600"}}/>
            <SubHeaderSection subHeaderText={"I need my freedom and I like rewards"}/>
            <br/>
            <ParagraphSection text={splitParagraphBySentence(getTeensSummary("Orange"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>
            
            {/*Orange Stressors*/}
            <br/>
            <SubHeaderSection subHeaderText={"Biggest Stressors"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressors("Orange"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Orange Stress Reactions*/}
            <br/>
            <SubHeaderSection subHeaderText={"Stress Reactions"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressReactions("Orange"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Orange Building Friendships*/}
            <br/>
            <SubHeaderSection subHeaderText={"Building Friendships"}/>
            <br></br>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Blue"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendBlue("Orange"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Gold"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendGold("Orange"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Green"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendGreen("Orange"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'/>

            {/*Blues*/}
            <HeaderSection headerText={"Blues"} style={{color: "#0000ff"}}/>
            <SubHeaderSection subHeaderText={"I just need everyone to get along"}/>
            <br/>
            <ParagraphSection text={splitParagraphBySentence(getTeensSummary("Blue"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>
            
            {/*Blue Stressors*/}
            <br/>
            <SubHeaderSection subHeaderText={"Biggest Stressors"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressors("Blue"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Blue Stress Reactions*/}
            <br/>
            <SubHeaderSection subHeaderText={"Stress Reactions"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressReactions("Blue"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Blue Building Friendships*/}
            <br/>
            <SubHeaderSection subHeaderText={"Building Friendships"}/>
            <br></br>
            <SubHeaderSection subHeaderText={"How to be a Friend to an Orange"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendOrange("Blue"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Gold"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendGold("Blue"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Green"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendGreen("Blue"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'/>

            {/*Golds*/}
            <HeaderSection headerText={"Golds"} style={{color: "#FFCC00"}}/>
            <SubHeaderSection subHeaderText={"I need things I can depend on"}/>
            <br/>
            <ParagraphSection text={splitParagraphBySentence(getTeensSummary("Gold"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>
            
            {/*Golds Stressors*/}
            <br/>
            <SubHeaderSection subHeaderText={"Biggest Stressors"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressors("Gold"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Golds Stress Reactions*/}
            <br/>
            <SubHeaderSection subHeaderText={"Stress Reactions"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressReactions("Gold"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Golds Building Friendships*/}
            <br/>
            <SubHeaderSection subHeaderText={"Building Friendships"}/>
            <br></br>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Blue"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendBlue("Gold"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to an Orange"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendOrange("Gold"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Green"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendGreen("Gold"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'/>

            {/*Greens*/}
            <HeaderSection headerText={"Greens"} style={{color: "#177D15"}}/>
            <SubHeaderSection subHeaderText={"I need things I can depend on"}/>
            <br/>
            <ParagraphSection text={splitParagraphBySentence(getTeensSummary("Green"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>
            
            {/*Greens Stressors*/}
            <br/>
            <SubHeaderSection subHeaderText={"Biggest Stressors"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressors("Green"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Greens Stress Reactions*/}
            <br/>
            <SubHeaderSection subHeaderText={"Stress Reactions"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensStressReactions("Green"))} lastSection={true}/>
            <div className='colorworks-paragraph-splitter'style={{width: '30%'}}/>

            {/*Greens Building Friendships*/}
            <br/>
            <SubHeaderSection subHeaderText={"Building Friendships"}/>
            <br></br>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Blue"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendBlue("Green"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to an Orange"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendOrange("Green"))} lastSection={true}/>
            <SubHeaderSection subHeaderText={"How to be a Friend to a Gold"}/>
            <ParagraphSection text={splitParagraphBySentence(getTeensBeFriendGold("Green"))} lastSection={true}/>

            {/*Button*/}
            <PageInfoBottomSection />
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default TeensHome;