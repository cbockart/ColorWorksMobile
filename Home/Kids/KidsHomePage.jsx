import React from 'react';
import './KidsHomePage.css';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import Kids_Blue_IMG1 from '../../../Images/Home/Kids/kids_blue_img1.png';
import Kids_Blue_IMG2 from '../../../Images/Home/Kids/kids_blue_img2.png'; 
import Kids_Green_IMG1 from '../../../Images/Home/Kids/kids_green_img1.png';
import Kids_Green_IMG2 from '../../../Images/Home/Kids/kids_green_img2.png';
import Kids_Gold_IMG1 from '../../../Images/Home/Kids/kids_gold_img1.png';
import Kids_Gold_IMG2 from '../../../Images/Home/Kids/kids_gold_img2.png';
import Kids_Orange_IMG1 from '../../../Images/Home/Kids/kids_orange_img1.png';
import Kids_Orange_IMG2 from '../../../Images/Home/Kids/kids_orange_img2.png';
import threeWordsImage from '../../../Images/AllColors/general_allColors_t.png';
import { useFocusEffect } from '@react-navigation/native';
import PageInfoBottomSection from '../../../components/HomePageBottomSection/HomePageBottomSection';
import PageInfoTopSection from '../../../components/HomePageTopSection/HomePageTopSection';
import { useRoute } from '@react-navigation/native';
import { getColorFromId } from '../../../colorMapping';
import { useState, useEffect } from 'react';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import { DisclaimerSection, InstructionsSection, ParagraphSection, SubHeaderSection, splitParagraphBySentence } from '../../../stringHandler';
import { getKidsTextByColor, getInstructionsText, getKidsDisclaimerText } from './KidsHomePageText';

const KidsHome = () => {
    const route = useRoute();
    const colorName = route.params; 
    const colorId = 1; // Get the ID corresponding to the color name
    const pageNum = 8;
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
                needs: dataResponse.needs,
                values: dataResponse.strengths,
                description: dataResponse.description,
                guidanceTool: dataResponse.guidanceTool
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
    
    const { needs, values, description, guidanceTool } = pageInformation;

    return (
      <>
        <div className='home-pages-whole-container'>
            <TopHeader />
            <PageInfoTopSection headerText={"Kids"} hasDropdown={false}/>

            <br/>
            <DisclaimerSection disclaimerText={getKidsDisclaimerText()} style={{fontSize: '15px', marginBottom: '5%'}}/>

            <SubHeaderSection subHeaderText={getInstructionsText()} style={{marginBottom: '5%'}}/>
            <div className='kids-page-resize-image-container'>
                <img src={threeWordsImage}  className='kids-page-colorworks-image' alt="logo"></img>
            </div>
            
            {/*Images*/}
            <img src={Kids_Blue_IMG1} alt="logo"></img>
            <img src={Kids_Blue_IMG2} className="kids-page-info-images2" alt="logo"></img>
            <div className='kids-page-white-blue-textbox'>

                <SubHeaderSection subHeaderText={"Needs:"} style={{width: '100%', color: "#0000ff"}}/>
                <ParagraphSection lastSection={true} text={"Connections"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Values:"} style={{width: '100%', color: "#0000ff"}}/>
                <ParagraphSection lastSection={true} text={"Communication"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Guidance Tool:"} style={{width: '100%', color: "#0000ff"}}/>
                <ParagraphSection lastSection={true} text={"Understanding"} style={{color: "#000000", marginLeft: '7%'}}/>

                <div className='kids-page-black-text' style={{marginTop:'3%'}}/>

                <ParagraphSection lastSection={true} text={splitParagraphBySentence(getKidsTextByColor("Blue"))} style={{color: "#000000", marginLeft: '7%'}}/>
            </div>

            <img src={Kids_Green_IMG1} alt="logo"></img>
            <img src={Kids_Green_IMG2} className="kids-page-info-images2" alt="logo"></img>
            <div className='kids-page-white-green-textbox'>
                <SubHeaderSection subHeaderText={"Needs:"} style={{width: '100%', color: "#177D15"}}/>
                <ParagraphSection lastSection={true} text={"Information"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Values:"} style={{width: '100%', color: "#177D15"}}/>
                <ParagraphSection lastSection={true} text={"Logic"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Guidance Tool:"} style={{width: '100%', color: "#177D15"}}/>
                <ParagraphSection lastSection={true} text={"Experiences"} style={{color: "#000000", marginLeft: '7%'}}/>

                <ParagraphSection lastSection={true} text={splitParagraphBySentence(getKidsTextByColor("Green"))} style={{color: "#000000", marginLeft: '7%'}}/>
            </div>

            <img src={Kids_Gold_IMG1} alt="logo"></img>
            <img src={Kids_Gold_IMG2} className="kids-page-info-images2" alt="logo"></img>
            <div className='kids-page-white-gold-textbox'>
                <SubHeaderSection subHeaderText={"Needs:"} style={{width: '100%', color: "#FFCC00"}}/>
                <ParagraphSection lastSection={true} text={"Structure"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Values:"} style={{width: '100%', color: "#FFCC00"}}/>
                <ParagraphSection lastSection={true} text={"Consistency"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Guidance Tool:"} style={{width: '100%', color: "#FFCC00"}}/>
                <ParagraphSection lastSection={true} text={"Expectations"} style={{color: "#000000", marginLeft: '7%'}}/>

                <ParagraphSection lastSection={true} text={splitParagraphBySentence(getKidsTextByColor("Gold"))} style={{color: "#000000", marginLeft: '7%'}}/>
            </div>

            <img src={Kids_Orange_IMG1} alt="logo"></img>
            <img src={Kids_Orange_IMG2} className="kids-page-info-images2" alt="logo"></img>
            <div className='kids-page-white-orange-textbox'>
                <SubHeaderSection subHeaderText={"Needs:"} style={{width: '100%', color: "#FF6600"}}/>
                <ParagraphSection lastSection={true} text={"Freedom"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Values:"} style={{width: '100%', color: "#FF6600"}}/>
                <ParagraphSection lastSection={true} text={"Rewards"} style={{color: "#000000", marginLeft: '7%'}}/>

                <SubHeaderSection subHeaderText={"Guidance Tool:"} style={{width: '100%', color: "#FF6600"}}/>
                <ParagraphSection lastSection={true} text={"Boundaries"} style={{color: "#000000", marginLeft: '7%'}}/>

                <ParagraphSection lastSection={true} text={splitParagraphBySentence(getKidsTextByColor("Orange"))} style={{color: "#000000", marginLeft: '7%'}}/>
            </div>

            <PageInfoBottomSection data-testid="page-info-bottom-section"/>
            <BottomHeader />
        </div>      
      </>
            
    );
  };

export default KidsHome;