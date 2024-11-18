import React from 'react';
import './AskBeDoHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import BackButtonNavigate from '../../../components/Navigation/Buttons/BackButton/backButtonNavigate';

import threeW_only_Green from '../../../Images/Home/AskBeDo/threeW_only_Green.png';
import green_triangle_big_words from '../../../Images/Home/AskBeDo/green_triangle_big_words.png';
import threewords_green_T2 from '../../../Images/Home/AskBeDo/threewords_green_T2.png';

import { useFocusEffect } from '@react-navigation/native';


const AskBeDoGreen = () => {
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

            <div className='askbedo-paragraph-headers'>Green</div>
            <div className='askbedo-paragraph-text'>
                Are rational and competent 
                Encourage accountability and independent trial and error
                Parent with a direct, ‘lesson learned’ approach 
            </div>
            {/*3 words Image*/}
            <img src={threeW_only_Green} className='home-pages-img-container' alt="logo"></img>

            <img src={green_triangle_big_words} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Course Correction  in Action</div>
            <div className='askbedo-paragraph-text'>
                Since you choose to ___
                I’m going to ___
                I know next time you will ___ 
            </div>

            <img src={threewords_green_T2} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Purpose of Course Correction </div>
            <div className='askbedo-paragraph-text'>
                Used when the child disobeyed Coach Talk or for repeat behavioral issues
                <br></br><br></br>
                Communicates disapproval of a specific behavior, clearly states the consequence, and reminds the child of their ability to change in the future
                <br></br><br></br>
                Greens need to hear this talk to understand the difference between positive and negative learning experiences 
                <br></br><br></br>
                Oranges, Blues, and Golds need to hear need to hear this talk to learn when they have crossed the line with a behavior 
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

export default AskBeDoGreen;