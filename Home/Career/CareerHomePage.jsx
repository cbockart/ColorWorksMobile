import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import './CareerHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import { handleArray } from '../../../stringHandler';
import useFetchPageInfo from '../../../fetchEndpoints/fetchPageInfo';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import { useFocusEffect } from '@react-navigation/native';
import CareerOptions from '../../../components/CareerOptions';
import ColorWorksText from '../../../components/ColorWorksText/ColorWorksText';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import { splitParagraphBySentence, HeaderSection, ParagraphSection } from '../../../stringHandler';

const CareerHome = () => {
  const route = useRoute(); 
  const [mappingId, setMappingId] = useState(parseInt(route.params.mappingId)); // Initialize mappingId state
  const hasDropdown = route.params?.hasDropdown || false;
  const [pageNum, setPageNum] = useState(3); // Initialize pageNum state
  const pageResponse = useFetchPageInfo(mappingId, pageNum); // Call useFetchPageInfo with mappingId and pageNum
  const resetState = () => {
    window.scrollTo(0, 0);
  };

  useFocusEffect(
    React.useCallback(() => {
        resetState();
        return () => {};
    }, [])
  );

   // Function to handle profile change and update mappingId
   const handleProfileChange = (newMappingId) => {
      setMappingId(newMappingId); // Update mappingId state
  };

  if (!pageResponse) {
      return <LoadingPage/>;
  }

  const {summary, strengths, careers} = pageResponse;

  return pageResponse && (
    <>
      <div className='home-pages-whole-container'>
          <TopHeader />
          <HomePageTopSection mappingId={mappingId} headerText={"Career"} hasDropdown={hasDropdown} handleProfileChange={handleProfileChange}/>

          {/*Career Paths*/}
          <HeaderSection headerText={'Careers Paths'}/>
          <ParagraphSection text={splitParagraphBySentence(summary)}/>
          
          {/*Strengths*/}
          <HeaderSection headerText={'Strenghts'}/>
          <ParagraphSection text={handleArray(strengths)}/>

          <CareerOptions options={careers}/>
          
          <HomePageBottomSection/>
          <BottomHeader />
      </div>      
    </>
          
  );
};

export default CareerHome;
