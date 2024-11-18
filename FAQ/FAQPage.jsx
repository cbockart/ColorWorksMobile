import React from 'react';
import './FAQPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import strings from '../../navigationStrings.json';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import HyperlinkButtonNavigate from '../../components/Navigation/Buttons/HyperlinkButton/HyperlinkButtonNavigate';
import WhiteTextBubble from '../../components/WhiteTextBubble/WhiteTextBubble';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage';
import { useFocusEffect } from '@react-navigation/native';


const FAQPage = () => {
  const [membershipPlan] = useAsyncStorage('membershipPlan');

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
      <div className='FAQ-whole-page-container'>
      <TopHeader />
        {/* Screen Header */}
        <div className="FAQ-page-header-container">
          <HomePageTopSection headerText={"FAQ"} hasDropdown={false}/>
        </div>

        <div className='FAQ-thin-purple-text'>
          Click on each to learn more about the most frequently asked questions about ColorWorks
        </div>

        {/*Inquiry boxes*/}
        <WhiteTextBubble text1={"Why can’t I be a Green/Blue or a Gold/Orange?"} text2={"Because those colors are two different dimensions of your personality type. Gold/Orange tells you what to do in the moment, and Blue/Green helps you make your long term decisions. This is why you need one color from each of those dimensions."}></WhiteTextBubble>
        <WhiteTextBubble text1={"How early can I see the colors of my children?"} text2={"Golds/Oranges early as 3 years old. Blues/Greens are closer to 5-7 years old"}></WhiteTextBubble>
        <WhiteTextBubble text1={"Can I be an ambivert?"} text2={"Yes you can process your information one way and then recharge your batteries another way. However in the scope of this app you can only be an introvert or extrovert."}></WhiteTextBubble>
        <WhiteTextBubble text1={"Does my color change throughout my lifetime?"} text2={"100% of the research says you stay the same color your whole life. However, as you grow or add coping mechanisms for stress or trauma this may result in outward “changes” to your personality. This does not mean your colors have changed but just how you address others or mask around certain people."}></WhiteTextBubble>
        <WhiteTextBubble text1={"How do I change my account information?"} text2={"The easiest way to change any account information is through the settings page which can be accessed from the side menu or the gear icon at the top of your screen. From there click on profile and re-enter the new or updated information in the provided textboxes. "} buttonText={"Profile Settings"} to = {strings.profileSettingsPage}></WhiteTextBubble>

        <WhiteTextBubble text1={"I don’t lean introvert or extrovert but think I’m an ambivert. Will this change the advice I receive from the app?"} text2={"The app does not have an option for ambiverts however it is up to the user’s discretion to resort themselves as needed in our “Change Your Color” page. Click on this link to go there now."} buttonText={"Change Your Color Page"} to = {strings.changeYourColorsPage}></WhiteTextBubble>       
        <WhiteTextBubble text1={"Why should I upgrade my payment plan?"} text2={"If you wish to access unlimited quiz retakes, increase the amount of profiles your account may have, or want to expand the knowledge provided by color works. Please click on the link below to learn more about the different membership plans available."} buttonText={"Plan Managemnet"} to = {strings.planManagement}></WhiteTextBubble>
        <WhiteTextBubble text1={"How can I add another profile to my account?"} text2={"Navigate to the profile page from the bottom navigation bar or through the side menu navigation by clicking on the icon that looks like a person. At the bottom of that page will be an “Add a new profile” button. Select that and fill out the following information required for a new profile. If you are not able to add a new profile you may need to upgrade your plan."} buttonText={" Add a New Profile"} to = {strings.accountProfilePage}></WhiteTextBubble> 
        <WhiteTextBubble text1={"Why are some of the buttons grayed out and not working on my app?"} text2={"Only certain functions of the app are available depending on what membership level you maintain. See a more detailed explanation of this on our How To Guide Page with the following link."} buttonText={"How To Guide"} to = {strings.howToGuidePage} ></WhiteTextBubble>
        <WhiteTextBubble text1={"I have taken a Myers Briggs quiz before, does the information translate somehow?"} text2={"Yes, if you remember the 4 letters assigned to you after the Myers Briggs quiz you can find their correlation guide on the following page."} buttonText={"Change Your Color Page"} to = {strings.changeYourColorsPage} ></WhiteTextBubble>
        
        {membershipPlan === "Gold" && (
          <>
            <div className="FAQ-thin-purple-text">
              Still have unanswered questions?
            </div>
            <br></br>
            <div className="FAQ-thin-purple-text">
              Please reach out directly to ColorWorks with any non-technical related 
              questions with the link below.
            </div>
            <div style={{marginLeft:'32%', marginBottom: '25%', marginTop: '3%'}}>
              <HyperlinkButtonNavigate buttonText="Message Colorworks" to = {strings.messagingPage}></HyperlinkButtonNavigate>
            </div>
          </>
        )}
        {membershipPlan !== "Gold" && (
          <>
            <div className="FAQ-thin-purple-text">
              Still have unanswered questions?
            </div>
            <div className="FAQ-thin-purple-text">
              Upgrade your plan to access direct messaging to the ColorWorks team.
            </div>
            <div style={{marginLeft:'35%', marginBottom: '25%', marginTop: '3%'}}>
              <HyperlinkButtonNavigate buttonText="Upgrade Your Plan" to = {strings.planManagement}></HyperlinkButtonNavigate>
            </div>
          </>
        )}
        
        <BottomHeader currentScreen="mail" />
      </div>
      
      </>
    );
};
export default FAQPage;


