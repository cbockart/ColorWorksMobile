//TopHeader
import React, { useState } from 'react';
import './topHeader.css';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import CWlonglogo from './images/CWlonglogo.png'
import sideMenu from './images/paragraph 1.png'
import settings from './images/setting 1.png'
import SideMenu from '../SideMenu/SideMenu';
import strings from '../../../navigationStrings.json';
import { useFocusEffect } from '@react-navigation/native';

import purpleSideMenu from './images/Purple_sideMenu.png'
import purpleSettings from './images/Purple_setting.png'

const TopHeader = ({currentScreen}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(sideMenu); // State to track which menu icon to display
  const [settingsIcon, setSettingsIcon] = useState(settings);
  const navigation = useNavigation();

    const resetState = () => {
      setIsMenuOpen(false); 
      setSettingsIcon(settings); // Reset settings icon to default when closing the menu
    };

    useFocusEffect(
        React.useCallback(() => {
            resetState();
            // Reset menu icon to default when navigating to a new screen
            setMenuIcon(sideMenu);
            setSettingsIcon(settings);
            return () => {};
        }, [])
      );

      const handleOptionClicked = (to) => {
          navigation.navigate(to);
      }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle between menu icons or settings icon when the menu is opened
    setMenuIcon(isMenuOpen ? sideMenu : purpleSideMenu);
    setSettingsIcon(isMenuOpen ? settings : purpleSettings);
    
  };

  const handleSideMenuClick = () => {
    toggleMenu();
  };
  
  return (
    <header className="app-header">
      <nav className="navbar">
        
        {/* Side menu Icon */}
        <img src={menuIcon} alt="side-menu" onClick={handleSideMenuClick} className="top-header-menu-icon" style={{ cursor: 'pointer' }} data-testid="side-menu-icon"/>

        {/* Logo and Title */}
        <div className="logo-container">
          <img src={CWlonglogo} alt="ColorWorks Logo" className='logo-container img' data-testid="logo"/>
        </div>

        {/* Settings icon */}
        <div onClick={() => {handleOptionClicked(strings.settings)}}>
            <img src={currentScreen === 'settings' ? purpleSettings : settings} alt="settings" className='top-header-menu-icon' data-testid="settings-icon" />
        </div>

      </nav>
      {isMenuOpen && <SideMenu isOpen={isMenuOpen} data-testid="side-menu"/>}
    </header>
  );
};

export default TopHeader;