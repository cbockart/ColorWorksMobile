import React, { useState, useEffect } from 'react';
import './CommunicationStylesHome.css';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import strings from '../../../navigationStrings.json';
import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence, HeaderSection, ParagraphSection } from '../../../stringHandler';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import { getCommunicationGoalsByColor, getCommunicationStrengthsByColor, getCommunicationStyleByColor, getConflictByColor } from '../../../components/CommunicationStylesHome/CommunicationStyleText';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import { useRoute } from '@react-navigation/native';
import { getHeaderText } from '../../../components/CommunicationStylesHome/CommunicationStyleText';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import { getColorFromId } from '../../../colorMapping';

const CommunicationStyleColorHome = () => {
    const route = useRoute();
    const colorName = route.params; 
    const colorId = getColorFromId(colorName); // Get the ID corresponding to the color name
    const pageNum = 6;
    const [pageInformation, setPageInformation] = useState(null);

    const resetState = () => {
        window.scrollTo(0, 0);
      };
  
      useFocusEffect(
        React.useCallback(() => {
            resetState();
            return () => {};
        }, [])
      );

    useEffect(() => {
      const fetchPageInfo = async () => {
        try {
          const response = await fetch(`http://165.227.112.131:8080/api/pageFourColorInfo/${pageNum}/${colorId}`);
  
          if (response.ok) {
            const dataResponse = await response.json();
            setPageInformation({
              summary: dataResponse.summary,
              goals: dataResponse.goals,
              strengths: dataResponse.strengths,
              conflict: dataResponse.conflict,
              type: dataResponse.type
            });
          } else {
            console.error('Failed to fetch user-specific data from /api/changeColors');
          }
  
        } catch (error) {
          console.error('Error during login:', error);
        }
      };

      fetchPageInfo();

    }, [colorId, pageNum]);
    
    if (!pageInformation) {
      return <LoadingPage/>
    }
    
    const { goals, strengths, conflict, type, summary } = pageInformation;
    
    return (
      <>
        <div className='home-pages-whole-container'>
            <TopHeader />
            {/*Title Bubble*/}
            <HomePageTopSection headerText={"Communication Styles: " + colorName}/>

            {/*Comm Styles*/}
            <HeaderSection headerText={type}/>
            <ParagraphSection text={splitParagraphBySentence(summary)}/>

            {/*Comm Goal*/}
            <HeaderSection headerText={'Communication Goals'}/>
            <ParagraphSection text={splitParagraphBySentence(goals)}/>

            {/*strength*/}
            <HeaderSection headerText={'Communication Strengths'}/>
            <ParagraphSection text={splitParagraphBySentence(strengths)}/>

            {/*conflict*/}
            <HeaderSection headerText={'How They Approach Conflict'}/>
            <ParagraphSection text={splitParagraphBySentence(conflict)} lastSection={true}/>

            <br/>
            {/*Button*/}
            <ButtonNavigate buttonText={"Back to Communication Styles"} to={strings.communicationStylesHome}/>
            <HomePageBottomSection />
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default CommunicationStyleColorHome;
