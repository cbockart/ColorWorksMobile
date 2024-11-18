import React from 'react';
import './ActivitiesAndGames.css';

import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import greyDiceImage from '../../Images/ActivitiesAndGames/Grey_dice.png';

const Activities = () => {
    return (
        <>
        <div className='games-whole-container'>
          <TopHeader />

          {/* Screen Header */}
          <div className="games-header-container">
            <div className="games-header">Games and Activities</div>
            <div style={{marginBottom: '100%'}}>
              <img src={greyDiceImage} alt="greygame" className='icon-button' />
            </div>
          </div>
          
          <BottomHeader currentScreen="games"/>
          </div>
        </>
  
      );
    };
    export default Activities;
