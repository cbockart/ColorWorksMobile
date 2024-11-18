import React, { useState } from 'react';
import './SettingsPage.css';
import ClickableNotificationBox from '../../components/ClickableNotificationBox/ClickableNotificationBox';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';

import dollar2image from '../../Icons/Settings/dollar2.png';
import setting2image from '../../Icons/Settings/setting2.png';
import notification1image from '../../Icons/Settings/notification1.png';
import signoutalt1image from '../../Icons/Settings/signoutalt1.png';
import user3image from '../../Icons/Settings/user3.png';
import strings from '../../navigationStrings.json';

import LogOutPopUp from '../../components/PopUps/LogOutPopUp/LogOutPopUp';

  function Settings() {
    const [showLogOutPopUp, setShowLogOutPopUp] = useState(false);
    
    const handleLogOut = () => {
      setShowLogOutPopUp(true);
    };

    const handleClosePopUp = () => {
      setShowLogOutPopUp(false);
    };
  
  return (
    <>
    <div>
      
    </div>
     {/* Make the Background color purple */}
     <TopHeader currentScreen="settings"/>
     <div className={`settings-background ${showLogOutPopUp ? 'blur' : ''}`}>
        {/* Screen Header */}
        <div className="settings-header-container">
          <div className='settings-header'>Settings</div>
        </div>

        {/*icon container*/}

        <div className="links-container" style={{height: '100%'}}>
          <ClickableNotificationBox imagePath={user3image} text={"Profile"} to={strings.profileSettingsInfoPage} arrowDecision={"yes"}></ClickableNotificationBox>
          <ClickableNotificationBox imagePath={setting2image} text={"Account Settings"} to={strings.accountSettingsPage} arrowDecision={"yes"}></ClickableNotificationBox>
          <ClickableNotificationBox imagePath={dollar2image} text={"Plan Management"} to={strings.planManagement}arrowDecision={"yes"}></ClickableNotificationBox>
          <ClickableNotificationBox imagePath={notification1image} text={"Notifications"} arrowDecision={"no"}></ClickableNotificationBox>
          <div className='Test' onClick={handleLogOut} >
            <ClickableNotificationBox imagePath={signoutalt1image} text={"Logout"} arrowDecision={"yes"}  onClick={handleLogOut} ></ClickableNotificationBox>
          </div>
        </div>
      </div>
      <BottomHeader />
      
      {/* {showLogOutPopUp && (<LogOutPopUp toBackAScreen={strings.settings} toForwardAScreen={strings.launchPageString}/>)} */}
      {showLogOutPopUp && 
         <div className="settings-pop-up-container">
          <LogOutPopUp toForwardAScreen={strings.launchPageString} onClose={handleClosePopUp}></LogOutPopUp> 
        </div>
      }
    </>
  );
};
export default Settings;