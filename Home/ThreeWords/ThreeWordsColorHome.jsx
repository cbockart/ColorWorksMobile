import React from 'react';
import './ThreeWordsHome.css';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import BackButtonNavigate from '../../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import ColorWorksText from '../../../components/ColorWorksText/ColorWorksText';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';

import selected_blue_background from '../../../Images/AllColors/selected_blue_t.png';

import { useFocusEffect } from '@react-navigation/native';


const ThreeWordsColorHome = () => {
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
            <div className="threewords-purple-title-bubble">
                <HomePageTopSection headerText={"3 Words"} hasDropdown={false}/>
            </div>

            {/*Back arrow*/}
            <div className="AllColors-page-back-button-container">
                <BackButtonNavigate to={strings.threeWordsHome}/>
            </div>

            <div className='threewords-paragraph-text'>
                These “3 WORDS” summarize essential information about each color’s temperament. When you
                understand their function, they act as a reliable, one word reminder in stressful situations to help you
                quickly pinpoint the root of your upset. They refer to each first color type’s Need, Value, and Self-Guidance
                Tool/Trust Tactic.
            </div>
            <br></br>
            <div className='threewords-paragraph-text'>
                The 1st Word in each group of three words is the color type’s overarching need. If our 1st Word is ignored,
                directly assaulted, or if we experience a perceived threat to that word, we naturally react (either consciously
                or unconsciously) with a stress response. This is true for children, family members, co-workers, and friends.
                Understanding the needs of your 1st Word and the needs of other people’s 1st Word can help you stay calm
                and effective when addressing stressful situations.
            </div>
            <br></br>
            <div className='threewords-paragraph-text'>
                The 2nd Word represents that color type’s value. This value is important to the individual and they want
                others to respect it, as well. Personal motivation is found in the 2nd Word. When people, processes,
                communication efforts, assignments, or rules function in alignment with their 2nd Word the individual will
                likely perform to the best of their ability with little resistance. When their 2nd Word is being assaulted or
                ignored the person is likely to resist, rebel, become detached, or shut down.
            </div>
            <br></br>
            <div className='threewords-paragraph-text'>
                The 3rd Word represents that color’s Self-Guidance Tool or Trust Tactic. The 3rd Word aligns with two things:
                first, it helps you understand what you need to build trust in a relationship, and second, it describes the
                relationship-building approach you should take with another person. Understanding the 3rd Word is
                especially important for parents; it is the key to helping your child unlock their potential and to guide them
                towards wise, successful behaviors based on their natural temperament.
            </div>
            <br></br>

            {/*Color header + their words*/}
            <div className='threewords-paragraph-headers'>Blues</div>
            <div className='threewords-lessbold-lg-text'>
                Connections, Communication, Understanding
            </div>

            {/*3 words Image*/}
            <img src={selected_blue_background} className='threeWords-colorworks-image' alt="logo"></img>

            <div className='threewords-paragraph-subheaders'>Connections</div>
            <div className='threewords-paragraph-text'>
                Freedom to an Orange is impowering, it gives them options, and it lowers their stress. When boundaries are
                provided to balance their freedom needs Oranges are even-tempered, focused, efficient multi-taskers who
                are easy to get along with.
                <br></br> <br></br>

                Oranges need freedom the way the rest of us need air. Autonomy, flexible timelines, and efficiency all
                equal freedom to an Orange. Without freedom they will push boundaries to create it.
                <br></br> <br></br>

                Oranges are present moment focused. They are decisive and practical; their decisiveness offers them
                more freedom as they quickly and efficiently cross boring, tedious tasks off their list to get back to
                having fun or relaxing.
                <br></br> <br></br>

                When looking for the root of their upset Oranges are the simplest color type to understand. When they
                are upset it’s because they want more freedom. If your Orange is sneaky, they are experiencing a
                freedom threat. If your toddler is throwing a tantrum, it’s a freedom thing; they want what they want,
                right now … but it’s their freedom they really want. Are you an Orange who is a world class negotiator?
                You negotiate to keep your options open and to maintain your freedom.
                <br></br> <br></br>

                When an Orange suffers a real or perceived freedom threat, they will negotiate, become stubborn,
                unreasonable, sneaky, or demanding to regain their lost freedom.
                <br></br> <br></br> 
            </div>

            <div className='threewords-paragraph-subheaders'>Communication</div>
            <div className='threewords-paragraph-text'>
                Oranges are motivated by rewards, whether we like it or not. Offering appropriate rewards after an Orange
                makes a wise choice will guide the Orange towards better choices and behaviors in the future. As they are
                present moment focused, they are actively looking for the intrinsic and extrinsic reward in everything they
                do. If there is not a reward linked to the activity, they will likely resist doing it. They will even steal their own
                future freedom by procrastinating against a lack of rewards connected to a present moment task.
                <br></br> <br></br>

                Oranges use rewards as motivation in all stages of their lives. What motivates an Orange adult to go to
                work every day? The reward of a paycheck which gives them the freedom to do the things they like to
                do. What motivates an Orange entrepreneur to take the risk? The promise of considerable monetary
                gains and the reward of being their own boss. If your 5-year-old Orange steals a toy from their sibling
                guess what’s motivating the Orange child’s behavior? The reward of obtaining the toy even
                momentarily. That momentary reward outweighs any possible future consequence. For an Orange teen,
                the reward of ditching school is well worth the price of a possible detention if caught … Oranges know
                they are clever and charming when they are caught, they often negotiate their way out of trouble.
                <br></br> <br></br>

                Orange adults are adept at finding rewards in unrewarding situations.
                <br></br> <br></br>

                Rewards for young Oranges are often physical and concrete, but mature Oranges enjoy social rewards,
                intrinsic rewards, and non-monetary rewards. Rewards for an adult Orange might look like: adventure
                vacations, food, the attention of a loved one, or even time alone to do as they please.
                <br></br> <br></br>

                As an Orange choose to give yourself and other first color Oranges appropriate rewards. When you do
                this you are supporting positive behavior changes and the formation of effective, strong habits.
                <br></br> <br></br> 
            </div>

            <div className='threewords-paragraph-subheaders'>Understanding</div>
            <div className='threewords-paragraph-text'>
                Oranges function best with clear boundaries. When possible, these boundaries should be explained before
                the Orange is expected to operate withing them.
                <br></br> <br></br>

                For Oranges young and old, boundaries are rules they can see. A fence, a timer, a budget, the gas
                gauge, a speed limit sign, a clock, a checklist, a sales goal, or the snarky reaction of a co-worker. These
                are all concrete boundaries to an Orange. The more concrete the boundary, the better.
                <br></br> <br></br> 

                Boundaries continually tell Oranges what is expected of them. As an Orange, if you’re not sure how far
                <br></br> <br></br> 

                you can go, you need to ask. Be concrete and detailed in your request, learn what is appropriate for the
                situation and then enjoy the freedom within the established boundary. Oranges should be cautious of
                assuming they know the true extent of an unspoken boundary.
                <br></br> <br></br> 

                Understanding the boundaries at work or in a relationship will protect the Orange’s future freedom.
                When they understand what actions will break specific boundaries they can make better informed
                decisions in the moment.  
                <br></br> <br></br> 

                Trust is fostered with an Orange when you protect or help fight for their freedom. They build trust with
                people who respect their need for autonomy and understand they are motivated by rewards. After a
                conflict, trust is quickly reestablished when everyone involved behaves in a resilient manner and moves
                on, Oranges do not dwell on the past. If they cross a boundary with you, they respond best to direct,
                concise communication that clearly explains what they did wrong and how they need to change their
                behavior in the future.
                <br></br> <br></br> 

                Do not lecture or dredge up the past, this type of communication is ineffective with an Orange.
                <br></br> <br></br> 

                Oranges think they are being trustworthy when they respect other people’s boundaries, when they give
                rewards and when they allow other people the autonomy to be themselves.
                <br></br> <br></br> 
            </div>

            {/*Maybe take out*/}
            <div className="home-pages-button-container">
                <ButtonNavigate buttonText="Back to 3 Words" to ={strings.threeWordsHome}></ButtonNavigate>
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

export default ThreeWordsColorHome;