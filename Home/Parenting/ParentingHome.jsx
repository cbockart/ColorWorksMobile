import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import useFetchPageInfo from '../../../fetchEndpoints/fetchPageInfo';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import ColorWorksText from '../../../components/ColorWorksText/ColorWorksText';
import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence, HeaderSection, ParagraphSection } from '../../../stringHandler';

const ParentingHome = () => {
    const route = useRoute(); 
    const [mappingId, setMappingId] = useState(route.params.mappingId); // Initialize mappingId state
    const hasDropdown = route.params?.hasDropdown || false;
    const [pageNum, setPageNum] = useState(4); // Initialize pageNum state
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
        setPageNum(4); // Reset pageNum to 1 when profile changes
    };

    if (!pageResponse) {
        return <LoadingPage/>
    }

    const {general, parentingStyle, strengths, limitations, skillTalk, conflicts, stressors, tips} = pageResponse;

    return pageResponse && (
      <>
        <div className='home-pages-whole-container'>
            <TopHeader />
            {/*Title Bubble*/}
            <HomePageTopSection mappingId={mappingId} headerText={"Parenting"} hasDropdown={hasDropdown} handleProfileChange={handleProfileChange}/>

            {/*1 general*/}
            <HeaderSection headerText={'Parenting'}/>
            <ParagraphSection text={splitParagraphBySentence(general)}/>
            
            {/*2 style*/}
            <HeaderSection headerText={'My Parenting Style'}/>
            <ParagraphSection text={splitParagraphBySentence(parentingStyle)}/>

            {/*3 strengths*/}
            <HeaderSection headerText={'Strengths'}/>
            <ParagraphSection text={splitParagraphBySentence(strengths)}/>

            {/*4 limitations*/}
            <HeaderSection headerText={'My Limitations as a Parent'}/>
            <ParagraphSection text={splitParagraphBySentence(limitations)}/>

            {/*5 skill talk*/}
            <HeaderSection headerText={'My Natural Parenting Skill Talk'}/>
            <ParagraphSection text={splitParagraphBySentence(skillTalk)}/>

            {/*6 common conflicts*/}
            <HeaderSection headerText={'Common Parenting Conflicts'}/>
            <ParagraphSection text={splitParagraphBySentence(conflicts)}/>

            {/*7 stressor*/}
            <HeaderSection headerText={'Stressors'}/>
            <ParagraphSection text={splitParagraphBySentence(stressors)}/>
            
            {/*8 tips*/}
            <HeaderSection headerText={'Tips For Your Parenting Style'}/>
            <ParagraphSection text={splitParagraphBySentence(tips)} lastSection={true}/>
        
            <HomePageBottomSection/>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default ParentingHome;