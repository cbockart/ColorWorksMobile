import React from 'react';
import './LeadershipHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import { useFocusEffect } from '@react-navigation/native';
import PageInfoTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import PageInfoBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';

const LeadershipHome = () => {
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
            <PageInfoTopSection hasDropdown={false} headerText={"Leadership"}/>

            {/*Main trustworthy Header*/}
            <div className='leadership-paragraph-headers'>5 Qualities of Trust</div>
            <div className='leadership-sub-headers'>
                Act trustworthy to build trust. To build trust both sides must:
            </div>
            <div className='leadership-paragraph-text'>
                Avoid criticizing and assume the best about each other
                <br></br><br></br>
                I will be slow to judge, instead of jumping to conclusions I will think of your 3 WORDS 
                <br></br><br></br>
                I will assume there is a reason for your action/reaction, even if it upsets me
                <br></br><br></br>
            </div>

            {/**/}
            <div className='leadership-sub-headers'>Stick to their commitments and promises</div>
            <div className='leadership-paragraph-text'>
                If I know I won’t be able to keep a commitment I will not make one 
                <br></br><br></br>
                If I let you down, I will be honest about it – no excuses 
                <br></br><br></br>
                I will courageously hold myself accountable for my choices and actions
                <br></br><br></br>
            </div>

            <div className='leadership-sub-headers'>Keep appropriate secrets and are a safe person </div>
            <div className='leadership-paragraph-text'>
                I will not invest my heart in someone or something else, I will keep my focus on our relationship
                <br></br><br></br>
                You are safe to share your dreams, hopes, fears, and feelings with me
                <br></br><br></br>
                *This does not include seeking professional help *  
                <br></br><br></br>   
            </div>

            <div className='leadership-sub-headers'>Act in ways that prove they have the other person’s best interest at heart</div>
            <div className='leadership-paragraph-text'>
                I will strive to love you unselfishly and make your needs a priority, the Golden Rule applies here
                <br></br><br></br>
                I will monitor my sarcasm and playful banter as it might inadvertently lead to hurt feelings
                <br></br><br></br>
            </div>

            <div className='leadership-sub-headers'>Refuse to take advantage of the other person or take them for granted</div>
            <div className='leadership-paragraph-text'>
                We have different roles/responsibilities, but we hold equal status in this relationship
                <br></br><br></br>
                I will not manipulate you, antagonize you, or purposefully overwhelm you 
                <br></br><br></br>
                When I fall short in this area, I will sincerely apologize to cultivate emotional security
                <br></br><br></br>
            </div>

            {/*All the 7 steps to anxiety*/}
            <div className='leadership-paragraph-headers'>7 Negative Paths To Anxiety</div>
            <div className='leadership-sub-headers'>
                1. Woe Is Me: Life is unfair
            </div>
            <div className='leadership-paragraph-text'>
                Functions with a score keeping mindset, oversimplification of how complicated 
                situations are, believes in an idealistic system of justice and equality  
            </div>

            <div className='leadership-sub-headers'>
                2. The Blame Game: No thanks responsibility
            </div>
            <div className='leadership-paragraph-text'>
                Wastes time stuck in resentment (It’s all your fault) or guilt (It’s all my fault) 
                either way this mindset becomes entrenched in negativity, lacks resiliency or the 
                ability to move into solution mode
            </div>

            <div className='leadership-sub-headers'>
                3. Telepathy: Mind reading, predictions, and other unhelpful party tricks
            </div>
            <div className='leadership-paragraph-text'>
                They jump to conclusions about another’s motives with no evidence to support their negative assumption 
                based on their own gloomy outlook, this leads to avoidance and isolation  
            </div>

            <div className='leadership-sub-headers'>
                4. Going Nuclear: I am the worst, and everything is my fault
            </div>
            <div className='leadership-paragraph-text'>
                Perfectionism will lead to feeling like a failure when the perfect result is not achieved, 
                if perfection is the goal failure often is the inevitable outcome 
            </div>

            <div className='leadership-sub-headers'>
                5. The Pendulum of Extremes: Overly Rigid or Overly Relaxed
            </div>
            <div className='leadership-paragraph-text'>
                Having too high of expectations for self and others leads to disappointment because life is 
                chaotic and complex; having no expectation of self and others leads to … the meh life 
            </div>

            <div className='leadership-sub-headers'>
                6. Catastrophizing: Spiraling thoughts and worst-case scenarios
            </div>
            <div className='leadership-paragraph-text'>
                Engages the fight or flight system of the brain after anticipating disaster, can lead to 
                physical symptoms like dizziness, nausea, vomiting, racing heart, racing thoughts, and exhaustion  
            </div>

            <div className='leadership-sub-headers'>
                7. The Distortion Dilemma: Misrepresentation of an experience
            </div>
            <div className='leadership-paragraph-text'>
                Perseverates on a single negative moment then distort memories surrounding that moment  
            </div>

            {/*back to home pages button*/}
            <PageInfoBottomSection/>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default LeadershipHome;