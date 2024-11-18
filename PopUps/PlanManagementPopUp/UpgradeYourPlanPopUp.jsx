import React, { useState, useEffect, useRef, forwardRef }  from 'react';
import { useNavigation } from '@react-navigation/native';
import './UpgradeYourPlanPopUp.css';
import strings from '../../../navigationStrings.json';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import xImage from '../../../Images/PlanManagement/x.svg';

const UpgradeYourPlanPopUp = forwardRef(({ toForwardAScreen, onClose, locationName, membershipPlan }, ref) => {
  const navigation = useNavigation();

  const handlePressBack = () => {
    onClose();
  };

  const handlePressForward = () => {
    navigation.navigate(toForwardAScreen);
  };

  return (
    <div ref={ref} className="upgrade-your-plan-pop-up">
        <div className="exit-upgrade-your-plan-pop-up-container" onClick={handlePressBack} >
            <img src={xImage} stroke="black" alt="exit" className='exit-log-out-pop-up' />
        </div>

        <div className="container-upgrade-your-plan-pop-up">
            <div className="header-upgrade-your-plan-pop-up-container" >
                <div className="header-upgrade-your-plan-pop-up" >Upgrade you plan!</div>
            </div>

            <div className="description-upgrade-your-plan-pop-up-container" >
                <div className="description-upgrade-your-plan-pop-up" >The '{locationName}' screen is unavailable because you have the {membershipPlan} plan. This feature is not available on your plan.</div>
                <br/>
                <div className="description-upgrade-your-plan-pop-up" >Click on the “Upgrade My Plan” button to view our plans and upgrade for more features!</div>
            </div>

            <div className="Gold-Plan-Pop-Up-button-container">
                <ButtonNavigate buttonText="Upgrade Me" to={strings.planManagement}></ButtonNavigate>
            </div>
        </div>
    </div>
  );
});

export default UpgradeYourPlanPopUp;
