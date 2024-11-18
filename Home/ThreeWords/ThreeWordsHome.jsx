import React from 'react';
import './ThreeWordsHome.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
//Buttons + new image
import ClearButton from '../../../components/FourColorPicker/OrangeButton';
import BlueButton from '../../../components/FourColorPicker/BlueButton';
import GreenButton from '../../../components/FourColorPicker/GreenButton';
import GoldButton from '../../../components/FourColorPicker/GoldButton';
import threeWordsImage from '../../../Images/AllColors/general_allColors_t.png';
import { useFocusEffect } from '@react-navigation/native';
import PageInfoTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import PageInfoBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import { HeaderSection, ParagraphSection, SubHeaderSection, splitParagraphBySentence } from '../../../stringHandler';
import ColorWorksText from '../../../components/ColorWorksText/ColorWorksText';

const getSectionText = (num) => {
  switch(num) {
    case 1:
      return "These “3 WORDS” summarize essential information about each color’s temperament. When you understand their function, they act as a reliable, one word reminder in stressful situations to help you " +
                  "quickly pinpoint the root of your upset. They refer to each first color type’s Need, Value, and Self-Guidance "+
                  "Tool/Trust Tactic."
    case 2:
      return "The 1st Word in each group of three words is the color type’s overarching need. If our 1st Word is ignored, "+
        "directly assaulted, or if we experience a perceived threat to that word, we naturally react (either consciously "+
        "or unconsciously) with a stress response. This is true for children, family members, co-workers, and friends. "+
        "Understanding the needs of your 1st Word and the needs of other people’s 1st Word can help you stay calm "+
        "and effective when addressing stressful situations."
    case 3:
      return "The 2nd Word represents that color type’s value. This value is important to the individual and they want "+
        "communication efforts, assignments, or rules function in alignment with their 2nd Word the individual will "+
        "likely perform to the best of their ability with little resistance. When their 2nd Word is being assaulted or "+
        "ignored the person is likely to resist, rebel, become detached, or shut down."
    case 4:
      return "The 3rd Word represents that color’s Self-Guidance Tool or Trust Tactic. The 3rd Word aligns with two things: "+
        "first, it helps you understand what you need to build trust in a relationship, and second, it describes the "+
        "relationship-building approach you should take with another person. Understanding the 3rd Word is "+
        "especially important for parents; it is the key to helping your child unlock their potential and to guide them "+
        "towards wise, successful behaviors based on their natural temperament."
  }
}

const ThreeWordsHome = () => {
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
            <PageInfoTopSection headerText={"3 Words and Stress"} hasDropdown={false}/>

            {/*3 words Image*/}
            <img src={threeWordsImage} className='threeWords-colorworks-image' alt="logo"></img>

            {/*What is 3 words description*/}
            <HeaderSection headerText={"What are \"3 Words\"?"} />
            <ParagraphSection text={splitParagraphBySentence(getSectionText(1))}/>
            <br></br>

            <SubHeaderSection subHeaderText={"The First Word"} />
            <ParagraphSection text={splitParagraphBySentence(getSectionText(2))}/>
            <br></br>

            <SubHeaderSection subHeaderText={"The Second Word"} />
            <ParagraphSection text={splitParagraphBySentence(getSectionText(3))}/>
            <br></br>

            <SubHeaderSection subHeaderText={"The Third Word"} />
            <ParagraphSection text={splitParagraphBySentence(getSectionText(4))}/>
            <br></br>

            {/*Instruction + new buttons*/}
            <ColorWorksText type={'instruction'} inputText={'Please select a color you would like to learn the 3 words for'}></ColorWorksText>
            {/*4 Buttons*/}
            <div className='threeWords-new-buttons-grid-container'>
                <div><GoldButton buttonText="" to ={strings.threeWordsGold}></GoldButton></div>  
                <div><ClearButton buttonText="" to ={strings.threeWordsOrange}></ClearButton></div>    
                <div><GreenButton buttonText="" to ={strings.threeWordsGreen}></GreenButton></div>
                <div><BlueButton buttonText="" to ={strings.threeWordsBlue}></BlueButton></div> 
            </div>

            <PageInfoBottomSection />
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default ThreeWordsHome;