import React from 'react';
import './MessagingPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../navigationStrings.json';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import MessagingInput from '../../components/MessagingInput/MessagingInput';

import { useFocusEffect } from '@react-navigation/native';


const MessagingPage = () => {
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
      <div className='Messaging-whole-page-container'>
      <TopHeader />
        {/* Screen Header */}
        <HomePageTopSection headerText={"Messaging"} hasDropdown={false}/>

        <ColorWorksText type={'subheader'} inputText={'Pre-Screening Questions'}></ColorWorksText>
        <ColorWorksText type={'info'} inputText={'Before you reach out, we would like to get to know you!'}></ColorWorksText>
        <br></br>

        <ColorWorksText type={'subheader'} inputText={'What are you primarily using the ColorWorks application for?'}></ColorWorksText>
        {/*radio buttons*/}
        <div className='Messaging-thin-button-text'>
            <input type="radio" id="relationship" name="why" value="RELATIONSHIP"></input>
                <label for="relationship">Building stronger relationships</label><br></br>
            <input type="radio" id="children" name="why" value="CHILDREN"></input>
                <label for="children">Working with my kids</label><br></br>
            <input type="radio" id="general" name="why" value="GENERAL"></input>
                <label for="general">Improving communication skills</label><br></br>
            <input type="radio" id="other" name="why" value="OTHER"></input>
                <label for="other">Other</label>
        </div>
        <div className='colorworks-paragraph-splitter'></div>
        
        <ColorWorksText type={'subheader'} inputText={'How old are you?'}></ColorWorksText>
        {/*radio buttons*/}
        <div className='Messaging-thin-button-text'>
            <input type="radio" id="old" name="age" value="OLD"></input>
                <label for="old">Above 40</label><br></br>
            <input type="radio" id="middle" name="age" value="MIDDLE"></input>
                <label for="middle">From 22 to 40</label><br></br>
            <input type="radio" id="young" name="age" value="YOUNG"></input>
                <label for="young">Under 22</label><br></br>
        </div>
        <div className='colorworks-paragraph-splitter'></div>

        <ColorWorksText type={'subheader'} inputText={'What is your gender?'}></ColorWorksText>
        {/*radio buttons*/}
        <div className='Messaging-thin-button-text'>
            <input type="radio" id="female" name="gender" value="FEMALE"></input>
                <label for="female">Female</label><br></br>
            <input type="radio" id="male" name="gender" value="MALE"></input>
                <label for="male">Male</label><br></br>
            <input type="radio" id="prefernottosay" name="gender" value="PREFERNOTTOSAY"></input>
                <label for="prefernottosay">Prefer not to say</label><br></br>
            <input type="radio" id="notlisted" name="gender" value="NOTLISTED"></input>
                <label for="notlisted">Not listed</label><br></br>
        </div>
        <div className='colorworks-paragraph-splitter'></div>

        {/*Input textbox*/}
        <ColorWorksText type={'subheader'} inputText={'Leave your message / question here:'}></ColorWorksText>
        <MessagingInput placeholder="Enter your message for ColorWorks here"></MessagingInput>

        
        <div className='messaging-button-container'>
        <ButtonNavigate buttonText="Submit Inquiry " to ={strings.homePage}></ButtonNavigate>
        </div>

        <div className='disclaimer-all-home-pages'>
        While this information is based on scientific research, individual preferences may differ. 
        This information is for educational purposes only. 
        These suggestions are based on generalizations that may differ from your own experience.
        </div>

        <BottomHeader currentScreen="mail"/>
      </div>
      
      </>
    );
};
export default MessagingPage;


