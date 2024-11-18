import React, {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import './RelaxationHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import useFetchPageInfo from '../../../fetchEndpoints/fetchPageInfo';
import HomePageBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import HomePageTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import ColorWorksText from '../../../components/ColorWorksText/ColorWorksText';

import { useFocusEffect } from '@react-navigation/native';
import { splitParagraphBySentence, HeaderSection, ParagraphSection } from '../../../stringHandler';


const RelaxationHome = () => {
    const route = useRoute(); 
    const [mappingId, setMappingId] = useState(parseInt(route.params.mappingId)); // Initialize mappingId state
    const hasDropdown = route.params?.hasDropdown || false;
    const [pageNum, setPageNum] = useState(2); // Initialize pageNum state
    const pageResponse = useFetchPageInfo(mappingId, pageNum); // Call useFetchPageInfo with mappingId and pageNum

     // Function to handle profile change and update mappingId
     const handleProfileChange = (newMappingId) => {
        setMappingId(newMappingId); // Update mappingId state
    };

    const resetState = () => {
        window.scrollTo(0, 0);
      };

      const ParagraphSection = ({ text, ...props }) => (
        <div {...props}>
          {text}
        </div>
      );
    
      useFocusEffect(
        React.useCallback(() => {
            resetState();
            return () => {};
        }, [])
      );

    if (!pageResponse) {
        return <LoadingPage/>;
    }

    const {summary, mindfulness, creativeEndeavors, selfCare, physicalActivities, socialTime} = pageResponse;
    const formattedSummary = splitParagraphBySentence(summary);
    const formattedMindfulness = splitParagraphBySentence(mindfulness);
    const formattedCreativeEndeavors = splitParagraphBySentence(creativeEndeavors);
    const formattedSelfCare = splitParagraphBySentence(selfCare);
    const formattedPhysicalActivities = splitParagraphBySentence(physicalActivities);
    const formattedSocialTime = splitParagraphBySentence(socialTime);

    return pageResponse && (
      <>
        <div className='home-pages-whole-container' data-testid="whole-container">
            <TopHeader />
            <HomePageTopSection mappingId={mappingId} headerText={"Relaxation"} hasDropdown={hasDropdown} handleProfileChange={handleProfileChange} data-testid="page-info-top-section"/>

            {/*Relaxation*/}
            <HeaderSection headerText={'Relaxation'}/>
            <ParagraphSection data-testid="summary-text" text={formattedSummary}/>

            {/*Mindfulness*/}
            <HeaderSection headerText={'Mindfulness'}/>
            <ParagraphSection data-testid="mindfulness-text" text={formattedMindfulness}/>

            {/*Creative*/}
            <HeaderSection headerText={'Creative Endeavors'}/>
            <ParagraphSection data-testid="creative-text" text={formattedCreativeEndeavors}/>

            {/*Self Care*/}
            <HeaderSection headerText={'Self Care'}/>
            <ParagraphSection data-testid="self-care-text" text={formattedSelfCare}/>

            {/*Physical*/}
            <HeaderSection headerText={'Physical Activities'}/>
            <ParagraphSection data-testid="physical-text" text={formattedPhysicalActivities}/>

            {/*Social Time*/}
            <HeaderSection headerText={'Social Time'}/>
            <ParagraphSection data-testid="social-time-text" text={formattedSocialTime} lastSection={true}/>

            <HomePageBottomSection data-testid="page-info-bottom-section"/>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default RelaxationHome;