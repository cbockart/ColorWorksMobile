import React from 'react';
import './InteractionStyles.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import DropdownButton from '../../components/dropdownButton/DropDownButton';
import Introvert_puzzle from '../../Images/Introvert_puzzle.png'
import Extrovert_puzzle from '../../Images/Extrovert_puzzle.png'
import strings from '../../navigationStrings.json';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';
import { useFocusEffect } from '@react-navigation/native';

const InteractionStyles = () => {
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
      <div className='InteractionStyles-whole-page-container'>
        <TopHeader/>
        <div className='interaction-style-header-container'>
          <HomePageTopSection headerText={"Interaction Styles"} hasDropdown={false}/>
        </div>
        
        <div className="interaction-style-description-container">
          <ColorWorksText type={'instruction'} inputText={'A person’s interaction style defines how they communicate and interact with those around them'}></ColorWorksText>
        </div>

        {/*Flex Contant for interaction styles*/}
        
          <div class="interaction-style-puzzle-piece-container">
            <img src={Extrovert_puzzle} alt="logo" style={{marginRight: '50px'}}/>
            <img src={Introvert_puzzle} alt="logo"/>
          </div>
          <div class="interaction-style-puzzle-piece-description-container">
            <div className='colorworks-information-text'>Extrovert</div>
            <div className='colorworks-information-text'>Introvert</div>
          </div>
          <br></br>

        {/* introvert dropdown container */}
        <div class="interaction-style-dropdown-containers">
            <DropdownButton interactionState={"introvert"}></DropdownButton>
            <DropdownButton interactionState={"extrovert"}></DropdownButton>
        </div>

        
        {/* Button that takes to Change Colors page */}
        <div className="interaction-style-description-container">
          <ColorWorksText type={'instruction'} inputText={'If you disagree with the interaction type you were assigned, proceed to this page to change it'}></ColorWorksText>
        </div>

        {/*margin bottom for button fixes scrolling issue*/}
        <div className="interaction-style-button-container" style={{marginBottom: '30%'}}>
          <ButtonNavigate buttonText={"Change Colors"} to={strings.changeYourColorsPage}></ButtonNavigate>
        </div>
        
        <BottomHeader/>
      </div>

    </>
  );
};

export default InteractionStyles;
