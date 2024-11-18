import React, { useState } from 'react';
import './bottomHeader.css';
import strings from '../../../navigationStrings.json';
import { useNavigation } from '@react-navigation/native';


//Images
import greyProfile from './images/Grey_profile.png'
import greyDice from './images/Grey_dice.png'
import greyHome from './images/Grey_home.png'
import greyEnvelope from './images/Grey_envelope.png'

import purpleProfile from './images/Purple_profile.png'
import purpleDice from './images/Purple_dice.png'
import purpleHome from './images/Purple_home.png'
import purpleEnvelope from './images/Purple_envelope.png'


const BottomHeader = ({currentScreen}) => {
    const [active, setActive] = useState('');

    const handleSetActive = (name) => {
        setActive(name);
    };

    const navigation = useNavigation();

    const handleOptionClicked = (to) => {
        navigation.navigate(to);
    }

    return (
        <div className="bottom-header">
         
            {/* Insert profile icon */}
            <div className="bottom-header-profile-container" onClick={() => {handleOptionClicked(strings.accountProfilePage)}}>
                <img src={currentScreen === 'profile' ? purpleProfile : greyProfile} alt="greyprofile" className='icon-button' data-testid="profile-icon" />
            </div>

            {/* Insert games icon */}
            <div className="bottom-header-game-container" onClick={() => {handleOptionClicked(strings.activitiesAndGames)}}>
                <img src={currentScreen === 'games' ? purpleDice : greyDice} alt="greygame" className='icon-button' data-testid="games-icon" />
            </div>

            {/* Insert home icon */}
            <div className="bottom-header-home-container" onClick={() => {handleOptionClicked(strings.homePage)}}>
                <img src={currentScreen === 'home' ? purpleHome : greyHome} alt="greyhome" className='icon-button' data-testid="home-icon" />
            </div>

            {/* Insert mail icon */}
            <div className="bottom-header-mail-container" onClick={() => {handleOptionClicked(strings.faqPage)}}>
                <img src={currentScreen === 'mail' ? purpleEnvelope : greyEnvelope} alt="greymail" className='icon-button' data-testid="mail-icon" />

            </div>

        </div>
    );
};

export default BottomHeader;