// PopoverMenu.js
import React, { useState } from 'react';
import './SideMenu.css';
import strings from '../../../navigationStrings.json';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import chat from './images/purple_chat.png'
import home from './images/home.png'
import dollar from './images/purple_dollar.png'
import group from './images/purple_group.png'
import information from './images/purple_information.png'
import logout from './images/purple_logout.png'
import rainbow from './images/purple_rainbow.png'
import user from './images/purple_user.png'
import warning from './images/purple_warning.png'
import settings from './images/purple_settings.png'
import LogOutPopUp from '../../PopUps/LogOutPopUp/LogOutPopUp';

const SideMenu = ({ isOpen }) => {
  const navigation = useNavigation();
  
  const handleOptionClicked = (to) => {
    console.log("Navigating to:", to);
    navigation.navigate(to);
  }

  // Functionality for the logout popup
  const [showLogOutPopUp, setShowLogOutPopUp] = useState(false);

  const handleLogOut = () => {
    setShowLogOutPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowLogOutPopUp(false);
    console.log("Closed logout popup");
  };

  /**
   * Order of Side Nav:
   * Home
   * Profiles
   * All Colors
   * Interaction Styles
   * Change Your Color
   * Membership
   * About Us
   * How-To Guide
   * Settings
   * Logout
   * Disclaimer
   */

  return (
    <div className={`popover-menu ${isOpen ? 'open' : ''}`}>
      <ul className="menu-list">
        {/* Home Page*/}
        <li onClick={() => {handleOptionClicked(strings.homePage)}} className="menu-item">
        <img src={home} alt="home" className="menu-icon" data-testid="home-icon" />
          {strings.homePage}
        </li>

        {/*Account Profile*/}
        <li onClick={() => {handleOptionClicked(strings.accountProfilePage)}} className="menu-item">
        <img src={user} alt="user" className="menu-icon" data-testid="profile-icon" />
          {strings.accountProfilePage}
        </li>

        {/* All Colors Page*/}
        <li onClick={() => {handleOptionClicked(strings.allColorsPage)}} className="menu-item">
        <img src={rainbow} alt="rainbow" className="menu-icon" data-testid="colors-icon" />
          {strings.allColorsPage}
        </li>

        {/* Interaction Styles Page*/}
        <li onClick={() => {handleOptionClicked(strings.interactionStyles)}} className="menu-item">
        <img src={chat} alt="chat" className="menu-icon" data-testid="interaction-icon" />
          {strings.interactionStyles}
        </li>

        {/* Change Your Colors Page*/}
        <li onClick={() => {handleOptionClicked(strings.changeYourColorsPage)}} className="menu-item">
        <img src={warning} alt="warning" className="menu-icon" data-testid="change-colors-icon" />
          {strings.changeYourColorsPage}
        </li>

        {/* Membership */}
        <li onClick={() => {handleOptionClicked(strings.planManagement)}} className="menu-item">
        <img src={dollar} alt="dollar" className="menu-icon" data-testid="membership-icon" />
          {strings.planManagement}
        </li>

        {/* About Us */}
        <li onClick={() => {handleOptionClicked(strings.aboutUs)}} className="menu-item">
        <img src={group} alt="group" className="menu-icon" data-testid="about-us-icon" />
          {strings.aboutUs}
        </li> 

        {/* How-To Guide */}
        <li onClick={() => {handleOptionClicked(strings.howToGuidePage)}} className="menu-item">
        <img src={information} alt="information" className="menu-icon" data-testid="how-to-guide-icon" />
          {strings.howToGuidePage}
        </li>  

        {/* Settings */}
        <li onClick={() => {handleOptionClicked(strings.settings)}} className="menu-item">
        <img src={settings} alt="settings" className="menu-icon" data-testid="settings-icon" />
          {strings.settings}
        </li> 

        {/* Logout */}
        <li onClick={handleLogOut} className="menu-item">
        <img src={logout} alt="logout" className="menu-icon" data-testid="logout-icon" />
          {"Logout"}
        </li> 

        {/* Disclaimer */}
        <li className="menu-item-disclaimer">
          {"While this information is based on scientific research, individual preferences may differ. This information is for educational purposes only. These suggestions are based on generalizations that may differ from your own experience."}
        </li> 
      </ul>

      {showLogOutPopUp && <div className="blur-background" />}
      {showLogOutPopUp && (
        <div className="side-menu-pop-up-container">
        <LogOutPopUp  toForwardAScreen={strings.launchPageString} onClose={handleClosePopUp}></LogOutPopUp> 
      </div>
      )}
    </div>
  );
};

export default SideMenu;
