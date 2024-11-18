import React, { useState } from 'react';
import './PlanManagement.css'; 
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import SilverPlanPopUp from '../../components/PopUps/PlanManagementPopUp/SilverPlanPopUp';
import GoldPlanPopUp from '../../components/PopUps/PlanManagementPopUp/GoldPlanPopUp';
import strings from '../../navigationStrings.json';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage';
import BronzePlanPopUp from '../../components/PopUps/PlanManagementPopUp/BronzePlanPopUp';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';

import { useFocusEffect } from '@react-navigation/native';
import { DisclaimerSection, InstructionsSection, SubHeaderSection } from '../../stringHandler';

  const PlanManagement = () => {

    const [membershipPlan] = useAsyncStorage('membershipPlan');

    //Bronze Pop Up
    const [showBronzePopUp, setShowBronzePopUp] = useState(false);

    const handleBronze = () => {
      setShowBronzePopUp(true);
    };

    const handleCloseBronzePopUp = () => {
      setShowBronzePopUp(false);
    };

    //Silver Pop Up
    const [showSilverPopUp, setShowSilverPopUp] = useState(false);

    const handleSilver = () => {
      setShowSilverPopUp(true);
    };

    const handleCloseSilverPopUp = () => {
      setShowSilverPopUp(false);
    };
        
    //Gold Pop Up
    const [showGoldPopUp, setShowGoldPopUp] = useState(false);

    const handleGold = () => {
      setShowGoldPopUp(true);
    };

    const handleCloseGoldPopUp = () => {
      setShowGoldPopUp(false);
    };

    const bronzePlanDescription = "The Bronze Plan introduces users to their personalized color information. Each user is limited to one profile per account. Users can access the 'Personalized Information', 'Relaxation', and 'Careers' libraries of information based on their assigned colors and interaction style."
    const silverPlanDescription = "The Silver Plan allows users to add one other profile to their account. This introduces users to our unique situationally-based approach to learning to compare different personality types. This plan will open access to more libraries of information."
    const goldPlanDescription = "The Gold Plan allows users to add an unlimited number of profiles to one account, which is best suited for families and teams. This plan allows access to all libraries of information and provides access to Games & Activities, as well as direct in-app messaging with ColorWorks."

    const resetState = () => {
      window.scrollTo(0, 0);
      handleCloseBronzePopUp();
      handleCloseSilverPopUp();
      handleCloseGoldPopUp();

  };
      
  useFocusEffect(
  React.useCallback(() => {
          resetState();
          return () => {};
  }, [])
  );

    return (
      <>
      <TopHeader />
      <div className='plan-management-whole-container'>
        <div className={`plan-managment-background ${showBronzePopUp || showSilverPopUp || showGoldPopUp ? 'blur' : ''}`}>
              <HomePageTopSection headerText={"Plan Management"} hasDropdown={false}/>
              <InstructionsSection instructionText={"Click on each plan to learn more"} style={{marginBottom: '1%'}}/>

              {/*bronze plan */}
              <div className="bronze-container-plan">
                  <div className="bronze-container-header-container">
                      <div className="bronze-header-plan">Bronze Plan</div>
                      <div className="bronze-subheader">Free</div>
                      <div className="description-plan">{bronzePlanDescription}</div>
                      
                      {/*need to figure out how to link popup*/}
                      
                  </div>

                  <ButtonNavigate buttonText={membershipPlan === 'Bronze' ? "Your Plan" : "Learn More"} backgroundColor={"#CD7F32"} customClass="noOutline" onClick={handleBronze} ></ButtonNavigate>

              </div>

              {/*silver plan */}
              <div className="silver-container-plan">
                  <div className="silver-container-header-container">
                      <div className="silver-header-plan">Silver Plan</div>
                      <div className="silver-subheader">$9.99</div>
                      <div className="description-plan">{silverPlanDescription}</div>
                      
                      {/*need to figure out how to link popup*/}
                  </div>
                    <ButtonNavigate buttonText={membershipPlan === 'Silver' ? "Your Plan" : "Learn More"} backgroundColor={"#C0C0C0"} onClick={handleSilver} ></ButtonNavigate>
              </div>

              {/*gold plan */}
              <div className="gold-container-plan">
                  <div className="gold-container-header-container">
                      <div className="gold-header-plan">Gold Plan</div>
                      <div className="gold-subheader">$11.99</div>
                      <div className="description-plan">{goldPlanDescription}</div>
                      
                      {/*need to figure out how to link popup*/}
                  </div>
                   <ButtonNavigate buttonText={membershipPlan === 'Gold' ? "Your Plan" : "Learn More"} backgroundColor={"#D4AF37"} onClick={handleGold}></ButtonNavigate>
              </div>
              
              <DisclaimerSection disclaimerText={"After upgrading your plan to silver or gold, you and your sub-profiles will share one account."} style={{marginTop: '5%', fontSize: '14px'}}/>
              <DisclaimerSection disclaimerText={"Your account owner is the only one who can purchase an upgrade, which will apply to all sub-profiles under the account."} style={{marginTop: '2%', fontSize: '14px', marginBottom: '18%'}}/>
          </div>

          {showBronzePopUp &&
              <div className="pop-up-container">
                  <BronzePlanPopUp toBackAScreen={strings.planManagement} onClose={handleCloseBronzePopUp}></BronzePlanPopUp>
              </div>
          } 

          {showSilverPopUp &&
              <div className="pop-up-container">
                  <SilverPlanPopUp toBackAScreen={strings.planManagement} toForwardAScreen={strings.homePage} onClose={handleCloseSilverPopUp}></SilverPlanPopUp>
              </div>

          }   
          
          {showGoldPopUp &&
              <div className="pop-up-container">
                  <GoldPlanPopUp toBackAScreen={strings.planManagement} toForwardAScreen={strings.homePage} onClose={handleCloseGoldPopUp}></GoldPlanPopUp>
              </div>
          } 
      </div>
      <BottomHeader />
      </>
    );

    };

export default PlanManagement;  