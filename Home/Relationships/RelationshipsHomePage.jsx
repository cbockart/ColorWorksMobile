import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import './RelationshipsHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import useFetchPageInfo from '../../../fetchEndpoints/fetchPageInfo';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence, HeaderSection, ParagraphSection } from '../../../stringHandler';



const RelationshipsHome = () => {
    const route = useRoute();
    const [mappingId, setMappingId] = useState(route.params.mappingId); // Initialize mappingId state
    const hasDropdown = route.params?.hasDropdown || false;
    const [pageNum, setPageNum] = useState(5); // Initialize pageNum state
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
        setPageNum(5); // Reset pageNum to 1 when profile changes
    };

    if (!pageResponse) {
        return <LoadingPage/>
    }
    
    const {section_BUILD_TRUST, section_COMMUNICATION_STYLE, section_PROCESSING, section_RECHARGE, section_LOVE_LOOK, section_PERKS, section_PITFALLS, section_STRESS} = pageResponse;

    /*Line should turn into this "return pageResponse && (*/
    return (
      <>
        <div className='home-pages-whole-container' data-testid="whole-container">
            <TopHeader />
            {/*Title Bubble*/}
            <HomePageTopSection mappingId={mappingId} headerText={"Relationships"} hasDropdown={hasDropdown} handleProfileChange={handleProfileChange} data-testid="page-info-top-section"/>

            {/*1 trust*/}
            <HeaderSection headerText={'How I Build Trust'} data-testid="header-trust"/>
            <ParagraphSection text={splitParagraphBySentence(section_BUILD_TRUST)} dataTestId="trust-text"/>

            {/*2 communication*/}
            <HeaderSection headerText={'My Communication Style'} data-testid="header-communication"/>
            <ParagraphSection text={splitParagraphBySentence(section_COMMUNICATION_STYLE)} dataTestId="communication-text"/>

            {/*3 process*/}
            <HeaderSection headerText={'Processing Information and Feelings'} data-testid="header-processing"/>
            <ParagraphSection text={splitParagraphBySentence(section_PROCESSING)} dataTestId="processing-text"/>

            {/*4 recharge*/}
            <HeaderSection headerText={'How I Recharge'}/>
            <ParagraphSection text={splitParagraphBySentence(section_RECHARGE)}  dataTestId="recharge-text"/>

            {/*5 lovelook*/}
            <HeaderSection headerText={'What Love Looks Like to Me'}/>
            <ParagraphSection text={splitParagraphBySentence(section_LOVE_LOOK)} dataTestId="love-look-text"/>

            {/*6 perks*/}
            <HeaderSection headerText={'My Perks'}/>
            <ParagraphSection text={splitParagraphBySentence(section_PERKS)}  dataTestId="perks-text"/>

            {/*7 pitfalls*/}
            <HeaderSection headerText={'My Pitfalls'}/>
            <ParagraphSection text={splitParagraphBySentence(section_PITFALLS)}  dataTestId="pitfalls-text"/>

            {/*8 Stress*/}
            <HeaderSection headerText={'Managing My Stress'}/>
            <ParagraphSection text={splitParagraphBySentence(section_STRESS)}  dataTestId="stress-text" lastSection={true}/>

            <HomePageBottomSection data-testid="page-info-bottom-section"/>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default RelationshipsHome;