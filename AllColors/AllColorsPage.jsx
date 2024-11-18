//AllColorsPage
import React from 'react';
import './AllColorsPage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import ClearButton from '../../components/FourColorPicker/OrangeButton';
import GoldButton from '../../components/FourColorPicker/GoldButton';
import GreenButton from '../../components/FourColorPicker/GreenButton';
import BlueButton from '../../components/FourColorPicker/BlueButton';
import strings from '../../navigationStrings.json';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import threeWordsImage from '../../Images/AllColors/general_allColors_t.png';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';
import { useFocusEffect } from '@react-navigation/native';
import { getPrimaryColorFromMappingId } from '../../colorMapping';
import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage';
import LoadingPage from '../../components/LoadingPage/LoadingPage';

const AllColorsPage = () => {
  const resetState = () => {
    window.scrollTo(0, 0);
  };

  useFocusEffect(
    React.useCallback(() => {
        resetState();
        return () => {};
    }, [])
  );

  const [mappingId] = useAsyncStorage('mappingId');
  const primaryColor = getPrimaryColorFromMappingId(mappingId);

  let nextLocation;
  switch(primaryColor) {
    case "Blue":
      nextLocation = strings.allColorsPageBlue;
      break;
    case "Gold":
      nextLocation = strings.allColorsPageGold;
      break;
    case "Green":
      nextLocation = strings.allColorsPageGreen;
      break;
    case "Orange":
      nextLocation = strings.allColorsPageOrange;
      break;
  };

    return (
      <>
      <div className='AllColors-whole-page-container'>
      <TopHeader />
        {/*Need to make divs have classname not just class */}
        {/* Screen Header */}
        <div className="all-colors-page-header-container">
        <HomePageTopSection headerText={"All Colors"} hasDropdown={false}/>
        </div>
        
        <div className='allColors-container'>
          {/*BackgroundImage*/}
          <img src={threeWordsImage} className='allcolors-colorworks-image' alt="logo"></img>
        </div>

        <ColorWorksText type={'instruction'} inputText={'Select the color you want to learn more about'}></ColorWorksText>

        <div className='allcolors-new-buttons-grid-container'>
          <div><GoldButton buttonText="" to ={strings.allColorsPageGold}></GoldButton></div>  
          <div><ClearButton buttonText="" to ={strings.allColorsPageOrange}></ClearButton></div>    
          <div><GreenButton buttonText="" to ={strings.allColorsPageGreen}></GreenButton></div>
          <div><BlueButton buttonText="" to ={strings.allColorsPageBlue}></BlueButton></div> 
        </div>

        <ColorWorksText type={'instruction'} inputText={'Skip straight to your color’s personalized information'}></ColorWorksText>
        
        {/*Button*/}
        <div className="allColors-button-container">
          <ButtonNavigate buttonText="Your Primary Color" to ={nextLocation}></ButtonNavigate>
        </div>
        <BottomHeader />
      </div>
      
      </>
    );
};
export default AllColorsPage;


