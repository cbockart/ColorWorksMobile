import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import './PersonalizedInfoHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import useFetchPageInfo from '../../../fetchEndpoints/fetchPageInfo';
import { handleArray } from '../../../stringHandler';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence, HeaderSection, ParagraphSection } from '../../../stringHandler';


const PersonalizedInfoHome = () => {
    const route = useRoute(); 
    const [mappingId, setMappingId] = useState(parseInt(route.params.mappingId)); // Initialize mappingId state
    const hasDropdown = route.params?.hasDropdown || false;
    const pageResponse = useFetchPageInfo(mappingId, 1);

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
        return <LoadingPage/>
    }

    const {am, need, dislike} = pageResponse;

    return pageResponse && (
      <>
        <div className='home-pages-whole-container'>
            <TopHeader />
            {/*Title Bubble*/}
            <HomePageTopSection mappingId={mappingId} headerText={"Personalized Information"} hasDropdown={hasDropdown} handleProfileChange={handleProfileChange}/>
            
            {/*mark space for puzzle image*/}

            

            {/*I Am*/}
            <HeaderSection headerText={'I Am ...'}/>
            <ParagraphSection text={handleArray(am)}/>

            {/*I Need and Value*/}
            <HeaderSection headerText={'I Need and Value ...'}/>
            <ParagraphSection text={handleArray(need)}/>

            {/*I Dislike*/}
            <HeaderSection headerText={'I Dislike ...'}/>
            <ParagraphSection text={handleArray(dislike)} lastSection={true}/>

            <HomePageBottomSection/>
            <BottomHeader />
        </div>      
      </>
            
    );
};

export default PersonalizedInfoHome;
