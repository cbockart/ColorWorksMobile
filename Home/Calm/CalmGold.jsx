import React from 'react';
import './CalmHomePage.css';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';

import selected_gold_background from '../../../Images/AllColors/selected_gold_t.png';
import calm_s1 from '../../../Images/Home/Calm/calm_s1.png';
import calm_s2 from '../../../Images/Home/Calm/calm_s2.png';
import calm_s3 from '../../../Images/Home/Calm/calm_s4.png';
import calm_s4 from '../../../Images/Home/Calm/calm_s4.png';

import BackButtonNavigate from '../../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import ColorWorksText from '../../../components/ColorWorksText/ColorWorksText';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';

import { useFocusEffect } from '@react-navigation/native';

const CalmGold = () => {
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
            <HomePageTopSection headerText={"CALM Gold"} hasDropdown={false}/>

            {/*Back arrow*/}
            <div className="AllColors-page-back-button-container">
                <BackButtonNavigate to={strings.calmHome}/>
            </div>
            
            {/*which selected color Image*/}
            <img src={selected_gold_background} className='home-pages-img-container' alt="logo"></img>

            {/*C*/}
            <img src={calm_s1} className='calm-img-container' alt="logo"></img>
            <ColorWorksText type={'subheader'} inputText={'I can see something is bothering you, do you want to vent? Try asking these clarifying questions'}></ColorWorksText>
            <div className='colorworks-information-text'>
                What’s going on that is making you feel stuck, trapped, or annoyed?
                <br></br><br></br>
                What do you want to do right now that you can’t or that I/your teacher won’t let you?
                <br></br><br></br>
                You can’t see any rewards or an up-side to this can you?
                <br></br><br></br>
                Who is stopping you from doing/being _______?
                <br></br><br></br>
            </div>

            <div className='calm-second-page-lefthand-bold-text'>Orange-Greens</div>
            <ColorWorksText type={'info'} inputText={'Does it seem stupid that you couldn’t do it/have it your way?'}></ColorWorksText>

            <div className='calm-second-page-lefthand-bold-text'>Orange-Blues</div>
            <ColorWorksText type={'info'} inputText={'Explain to me your feelings that everyone else gets to have fun except you?'}></ColorWorksText>

            {/*A*/}
            <img src={calm_s2} className='calm-img-container' alt="logo"></img>
            <ColorWorksText type={'subheader'} inputText={'Shift into logic mode, train them to combat negative thoughts while remembering:'}></ColorWorksText>
            <div className='colorworks-information-text'>
                The perception they are trapped physically, emotionally, or mentally feels real to them
                <br></br><br></br>
                If they can’t see the reward they start negotiating a way to avoid the activity
                <br></br><br></br>
                Adult efficiency and adolescent efficiency does not look the same, they lack big picture
                <br></br><br></br>
            </div>

            <div className='calm-second-page-lefthand-bold-text'>Orange-Greens</div>
            <ColorWorksText type={'info'} inputText={'You think algebra is stupid and your teacher is the worst, and she hates you because she grades hard and makes you correct your tests when you miss problems? And you think you are failing the class and now you will not get to swim in the big meet is that correct?'}></ColorWorksText>

            <div className='calm-second-page-lefthand-bold-text'>Orange-Blues</div>
            <ColorWorksText type={'info'} inputText={'So, no one wants to be your friend or date you because we are too strict, and we have lame rules. And all of your friends get to (fill in this blank with anything you’ve ever said no to), and we are ruining your life with our lameness is that correct?'}></ColorWorksText>
            
            <ColorWorksText type={'subheader'} inputText={'Things you might hear as an orange spirals downward:'}></ColorWorksText>
            <div className='colorworks-information-text'>
                I’m not going to ask them if I can join their group, no one in that group likes me.
                <br></br><br></br>
                It doesn’t matter how hard I work I can’t do it, it’s not worth it anyway that coach hates me.
                <br></br><br></br>
                I am so embarrassed, I will never live this down, this is who I am now… the clumsy girl.
                <br></br><br></br>
                You’re always telling me I do everything wrong.
                <br></br><br></br>
                This _______ is the stupidest thing/teacher/rule ever.
                <br></br><br></br>
                Welp, I tried my best… shrug or I don’t know why I did _____ … (nvbl) and I don’t care. ***
                <br></br><br></br>
            </div>

            {/*L*/}
            <img src={calm_s3} className='calm-img-container' alt="logo"></img>
            <div className='colorworks-information-text'>
                <br></br>
                They are always ready to get back to freedom/fun, negativity is a downer, use this 
                <br></br><br></br>
                They naturally process issues/emotions quickly, help them lean into that 
                 <br></br><br></br>
                They are highly resilient and naturally understand how to pivot around challenges
                 <br></br><br></br>
                They enjoy creating a chill vibe (E/I), help them reach that goal
                <br></br><br></br>
                Point out where freedom can be found even in the negative situation
                <br></br><br></br>
                Acknowledge how good they are at establishing boundaries with others
                <br></br><br></br>
                Acknowledge that they do not dwell or gold grudges, this is huge
                <br></br><br></br>
                Remind them as they seek solutions that Golds, Blues, and Greens often misinterpret
                their natural efforts as abrupt, harsh, or rude, when they feel trapped
                <br></br><br></br>
            </div>

            {/*M*/}
            <img src={calm_s4} className='calm-img-container' alt="logo"></img>
            <div className='colorworks-information-text'>
                <br></br>
                Honor their need to be efficient and to be an individual
                <br></br><br></br>
                Offer a flexibility within your schedule whenever possible
                <br></br><br></br>
                Ask them to define their perceived boundaries when they push limits
                <br></br><br></br>
                Help them find their freedom inside the limitations placed on them
                <br></br><br></br>
                Enjoy that they don’t hold grudges, they simply move on
                <br></br><br></br>
                Appreciate their unconventional ways and have fun with them 
                <br></br><br></br>
                Understand restrictions and indecisiveness will frustrate them
                <br></br><br></br>
            </div>

            {/*Button*/}
            <div className="calm-button-container">
                <ButtonNavigate buttonText="Back to Calm" to ={strings.calmHome}></ButtonNavigate>
            </div>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default CalmGold;