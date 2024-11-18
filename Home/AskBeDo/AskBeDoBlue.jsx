import React from 'react';
import './AskBeDoHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import BackButtonNavigate from '../../../components/Navigation/Buttons/BackButton/backButtonNavigate';

import threeW_only_Blue from '../../../Images/Home/AskBeDo/threeW_only_Blue.png';
import blue_triangle_big_words from '../../../Images/Home/AskBeDo/blue_triangle_big_words.png';
import threewords_blue_T2 from '../../../Images/Home/AskBeDo/threewords_blue_T2.png';

import { useFocusEffect } from '@react-navigation/native';

const AskBeDoBlue = () => {
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
            <div className="askbedo-purple-title-bubble">
                <div className='askbedo-purple-title-bubble-text'>
                    Ask Be Do 
                </div>
            </div>

            {/*Back arrow*/}
            <div className="AllColors-page-back-button-container">
                <BackButtonNavigate to={strings.askBeDoHome}/>
            </div>

            <div className='askbedo-paragraph-headers'>Blue</div>
            <div className='askbedo-paragraph-text'>
                Are sensitive and nurturing 
                Encourage open, honest communication 
                Parent with compassion and understanding
            </div>
            {/*3 words Image*/}
            <img src={threeW_only_Blue} className='home-pages-img-container' alt="logo"></img>

            <img src={blue_triangle_big_words} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Councilor Talk in Action</div>
            <div className='askbedo-paragraph-text'>
                I’m... 
                When you...
                Because now I can/You’re showing me... 
            </div>

            <img src={threewords_blue_T2} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Purpose of Councilor Talk</div>
            <div className='askbedo-paragraph-text'>
                Used when they’re upset
                <br></br><br></br>
                Communicates compassion and allows the parent to get to the root of behavioral issues or upset 
                <br></br><br></br>
                Blues need to hear this talk to feel understood and to regain their inner harmony or calm 
                <br></br><br></br>
                Oranges, Golds, and Greens need to hear this talk to learn how to name their emotions and to avoid simply reacting to emotions
                <br></br><br></br>
            </div>

            <div className='disclaimer-all-home-pages'>
                While this information is based on scientific research, individual preferences may differ. 
                This information is for educational purposes only. 
                These suggestions are based on generalizations that may differ from your own experience.
            </div>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default AskBeDoBlue;