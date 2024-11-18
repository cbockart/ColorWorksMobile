import React from 'react';
import './AskBeDoHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import BackButtonNavigate from '../../../components/Navigation/Buttons/BackButton/backButtonNavigate';

import threeW_only_Orange from '../../../Images/Home/AskBeDo/threeW_only_Orange.PNG';
import orange_triangle_big_words from '../../../Images/Home/AskBeDo/orange_triangle_big_words.png';
import threewords_orange_T2 from '../../../Images/Home/AskBeDo/threewords_orange_T2.png';

import { useFocusEffect } from '@react-navigation/native';

const AskBeDoOrange = () => {
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

            <div className='askbedo-paragraph-headers'>Oranges</div>
            <div className='askbedo-paragraph-text'>
                Are adaptable and flexible
                Encourage individuality 
                Live with a resilient mindset 
            </div>
            {/*3 words Image*/}
            <img src={threeW_only_Orange} className='home-pages-img-container' alt="logo"></img>

            <img src={orange_triangle_big_words} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Cheer Talk in Action</div>
            <div className='askbedo-paragraph-text'>
                I’m... 
                When you...
                Because now I can/You’re showing me... 
            </div>

            <img src={threewords_orange_T2} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Purpose of Cheer Talk</div>
            <div className='askbedo-paragraph-text'>
                Used in peaceful moments when no one is upset
                <br></br><br></br>
                Communicates gratitude and appreciation for positive behaviors 
                <br></br><br></br>
                Oranges need to hear this talk to learn boundaries, which in turn helps them choose positive behaviors in the future 
                <br></br><br></br>
                Gold, Blues, and Greens need to hear this talk to understand how they are impacting their family and friends in a positive way
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

export default AskBeDoOrange;