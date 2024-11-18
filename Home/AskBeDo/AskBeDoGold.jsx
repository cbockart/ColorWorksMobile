import React from 'react';
import './AskBeDoHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import BackButtonNavigate from '../../../components/Navigation/Buttons/BackButton/backButtonNavigate';

import threeW_only_Gold from '../../../Images/Home/AskBeDo/threeW_only_Gold.png';
import gold_triangle_big_words from '../../../Images/Home/AskBeDo/gold_triangle_big_words.png';
import threewords_gold_T2 from '../../../Images/Home/AskBeDo/threewords_gold_T2.png';

const AskBeDoGold = () => {
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

            <div className='askbedo-paragraph-headers'>Gold</div>
            <div className='askbedo-paragraph-text'>
                Are assertive but fair 
                Encourage responsibility
                Parent in a predictable style and expectations 
            </div>
            {/*3 words Image*/}
            <img src={threeW_only_Gold} className='home-pages-img-container' alt="logo"></img>

            <img src={gold_triangle_big_words} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Coach Talk in Action</div>
            <div className='askbedo-paragraph-text'>
                I’m___
                When you___
                I expect___ 
                Will you/What’s your choice___? 
            </div>

            <img src={threewords_gold_T2} className='home-pages-img-container' alt="logo"></img>
            <div className='askbedo-paragraph-headers'>Purpose of Coach Talk</div>
            <div className='askbedo-paragraph-text'>
                Used when you are upset
                <br></br><br></br>
                Communicates clear expectations, possible consequences, and *invites compliance*
                <br></br><br></br>
                Golds need to hear this talk to feel secure
                <br></br><br></br>
                Oranges, Blues, and Greens need to hear this talk to know when and how to change their behavior
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

export default AskBeDoGold;