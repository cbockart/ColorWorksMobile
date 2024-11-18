//HomePage
import React, { useState, useEffect, useRef } from 'react';
import LibraryClickingDestination from '../../components/Navigation/LibraryClickingDest/libraryClickingDestHomeScreen'
import './HomePage.css';

import strings from '../../navigationStrings.json';

import PersonalizedInfoPageImage from '../../Images/Home/Personalized_Info_Page.png';
import AskBeDoImage from '../../Images/Home/AskBeDo.png';
import CareerImage from '../../Images/Home/Career.png';
import RelaxationImage from '../../Images/Home/Relaxation.png';
import ParentingImage from '../../Images/Home/parenting.png';
import KidsImage from '../../Images/Home/Kids.png';

import RelationshipsImage from '../../Images/Home/relationships.png';
import ThreeWordsImage from '../../Images/Home/3_choices_icon.png';

import BuildingBlocksofChangeImage from '../../Images/Home/Blocks_icon.png';
import CalmImage from '../../Images/Home/Calm_icon.png';
import CommunicationImage from '../../Images/Home/Communication_icon.png';
import TeenImage from '../../Images/Home/Teen_icon.png';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage';
import UpgradeYourPlanPopUp from '../../components/PopUps/PlanManagementPopUp/UpgradeYourPlanPopUp';

import { useFocusEffect } from '@react-navigation/native';
import { InstructionsSection } from '../../stringHandler';



const HomeScreen = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [membershipPlan] = useAsyncStorage('membershipPlan');
    const [mappingId] = useAsyncStorage('mappingId');
    const [hasAccess, setHasAccess] = useState(true);
    const [locationName, setLocationName] = useState('');

    const resetState = () => {
        window.scrollTo(0, 0);
        setHasAccess(true);
      };

    useFocusEffect(
        React.useCallback(() => {
            resetState();
            return () => {};
        }, [])
      );


    const toggleAccess = () => {
        setHasAccess(!hasAccess);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767); // Set breakpoint as needed
        };
    
        // Initial check
        handleResize();
    
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const hasDropdown = membershipPlan === "Silver" || membershipPlan === "Gold";

    return (
        <>
        <div className={`home-page-whole-container ${!hasAccess ? 'disable-scrolling' : ''}`} data-testid="whole-container">
            {isMobile ? (
                <div className="container-smallscreen" data-testid="small-screen-container">
                    <TopHeader />
                    <div className='home-page-spacer-top'></div>
                    <div className={`${!hasAccess ? 'blurred-background' : ''}`}>
                        {/* TODO: Move the background color to the INSIDE of LibraryClickingDestination */}
                        {/* DATABASE */}
                        <InstructionsSection instructionText={"Please select any of the purple buttons to learn more about each specific topic."} style={{paddingTop: '0%', paddingBottom: '0%'}}/>
                        <LibraryClickingDestination 
                                header={"Personalized Information"} 
                                description={"Discover the unique dimensions of your personality type"} 
                                imagePath={PersonalizedInfoPageImage} 
                                backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                                to={strings.personalizedInfoHome} 
                                onNoAccess={() => {
                                    setLocationName("Personalized Information");
                                    toggleAccess();
                                }}
                                mappingId={mappingId}
                                membershipPlan={membershipPlan}
                                hasDropdown={hasDropdown}
                                data-testid="personalized-information-destination" >
                        </LibraryClickingDestination>

                        {/* DATABASE */}
                        <LibraryClickingDestination 
                            header={"Relaxation"} 
                            description={"Relaxation techniques and mindfulness practices specific to your personality type"} 
                            imagePath={RelaxationImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to={strings.relaxationHome} 
                            onNoAccess={() => {
                                setLocationName("Relaxation");
                                toggleAccess();
                            }}                            
                            mappingId={mappingId}
                            membershipPlan={membershipPlan}
                            hasDropdown={hasDropdown}
                            data-testid="relaxation-destination" >
                        </LibraryClickingDestination>

                        {/* DATABASE */}
                        <LibraryClickingDestination 
                            header={"Career"} 
                            description={"Career paths and roles that align with your personality strengths"} 
                            imagePath={CareerImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.careerHome} 
                            onNoAccess={() => {
                                setLocationName("Career");
                                toggleAccess();
                            }}   
                            mappingId={mappingId}
                            membershipPlan={membershipPlan}
                            hasDropdown={hasDropdown}
                            data-testid="career-destination">
                        </LibraryClickingDestination>
                        
                        {/* DATABASE */}
                        <LibraryClickingDestination 
                            header={"Relationships"} 
                            description={"How you build trust, manage stress, process emotions, and recharge within a romantic relationship based on your personality type"} 
                            imagePath={RelationshipsImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.relationshipsHome} 
                            onNoAccess={() => {
                                setLocationName("Relationships");
                                toggleAccess();
                            }}   
                            mappingId={mappingId}
                            membershipPlan={membershipPlan}
                            hasDropdown={hasDropdown}
                            data-testid="relationships-destination">
                        </LibraryClickingDestination>

                        {/* NO DATABASE */}
                        <LibraryClickingDestination 
                            header={"Communication Styles"} 
                            description={"Your communication comfort zones and the motivation behind your words and the patterns of your communication style"} 
                            imagePath={CommunicationImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.communicationStylesHome} 
                            onNoAccess={() => {
                                setLocationName("Communication Style");
                                toggleAccess();
                            }}   
                            membershipPlan={membershipPlan}
                            data-testid="communication-destination">
                        </LibraryClickingDestination>

                        {/* NO DATABASE */}
                        <LibraryClickingDestination 
                            header={"3 Words and Stress"} 
                            description={"A tool that provides a snapshot of each color’s overarching need, secondary value, and a parenting guidance tool or relationship trust tactic"} 
                            imagePath={ThreeWordsImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.threeWordsHome} 
                            onNoAccess={() => {
                                setLocationName("3 Words and Stress");
                                toggleAccess();
                            }}  
                            membershipPlan={membershipPlan}>
                        </LibraryClickingDestination>

                        {/* NO DATABASE */}
                        <LibraryClickingDestination 
                            header={"Kids"} 
                            description={"Discover the traits, stressors, and stress behaviors of each of the four first color types as they appear in children"} 
                            imagePath={KidsImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.kidsHome} 
                            onNoAccess={() => {
                                setLocationName("Kids");
                                toggleAccess();
                            }}    
                            membershipPlan={membershipPlan}>
                        </LibraryClickingDestination>

                        {/* NO DATABASE */}
                        <LibraryClickingDestination 
                            header={"Teens"} 
                            description={"Learn the traits, stressors, stress behaviors, and friendship-building skills of each of the four first color types as they appear in teens and adolescents."} 
                            imagePath={TeenImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.teensHome} 
                            onNoAccess={() => {
                                setLocationName("Teens");
                                toggleAccess();
                            }}   
                            membershipPlan={membershipPlan}>
                        </LibraryClickingDestination>

                        {/* DATABASE */}
                        <LibraryClickingDestination 
                            header={"Parenting"} 
                            description={"Gain insight into the unique traits, skills, motivators, stressors, and stress behaviors each personality type displays as they approach parenting"} 
                            imagePath={ParentingImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.parentingHome} 
                            onNoAccess={() => {
                                setLocationName("Parenting");
                                toggleAccess();
                            }}   
                            mappingId={mappingId}
                            membershipPlan={membershipPlan}
                            hasDropdown={hasDropdown}>
                        </LibraryClickingDestination>
                        
                        {/* NO DATABASE */}
                        <LibraryClickingDestination 
                            header={"Ask Be Do"} 
                            description={"A skill-based communication tool used to help parents address complicated parenting issues efficiently and effectively."} 
                            imagePath={AskBeDoImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"}  
                            to ={strings.askBeDoHome}
                            onNoAccess={() => {
                                setLocationName("Ask Be Do");
                                toggleAccess();
                            }}    
                            membershipPlan={membershipPlan}>
                        </LibraryClickingDestination>
                        
                        {/* NO DATABASE */}
                            <LibraryClickingDestination 
                            header={"Leadership"} 
                            description={"Discover your strengths and approach to leadership and learn how you can support others with your natural communication skills and talents"} 
                            imagePath={BuildingBlocksofChangeImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.leadershipHome} 
                            onNoAccess={() => {
                                setLocationName("Leadership");
                                toggleAccess();
                            }}
                            membershipPlan={membershipPlan}>
                        </LibraryClickingDestination>

                        {/* NO DATABASE */}
                        <LibraryClickingDestination 
                            header={"Calm"} 
                            description={"A skill-based communication process, which helps parents successfully guide themselves and their children through moments of stress and anxiety"} 
                            imagePath={CalmImage} 
                            backgroundColor={"rgba(125, 0, 150, 0.60)"} 
                            to ={strings.calmHome} 
                            onNoAccess={() => {
                                setLocationName("Calm");
                                toggleAccess();
                            }}
                            membershipPlan={membershipPlan}>
                        </LibraryClickingDestination>
                    </div>
                    <div className='home-page-spacer-bottom'></div>
                    <BottomHeader currentScreen="home"/>
                </div>
            ) : (
                <div className="container-largescreen" data-testid="large-screen-container">
                    <div className='column-1-container' >
                        <LibraryClickingDestination header={"Personalized Information"} description={"Learn more about yourself"} imagePath={PersonalizedInfoPageImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={strings.allColorsPage} ></LibraryClickingDestination>
                        <LibraryClickingDestination header={"Career"} description={"Common fields for your color type and why"} imagePath={CareerImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                        <LibraryClickingDestination header={"Communication Styles"} description={"Increase the strength of any relationship"} imagePath={CommunicationImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                        <LibraryClickingDestination header={"Kids"} description={"How colors might appear in children"} imagePath={KidsImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                        <LibraryClickingDestination header={"Parenting"} description={"Your strengths in parenting and how to best work with your childrenf"} imagePath={ParentingImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                        <LibraryClickingDestination header={"Leadership"} description={"TO DO"} imagePath={BuildingBlocksofChangeImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                    </div>
                    <div className='column-2-container' >
                    <LibraryClickingDestination header={"Relaxation"} description={"Your best methods of relaxation, how to decompress, and hobbies"} imagePath={RelaxationImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                    <LibraryClickingDestination header={"Relationships"} description={"Learn how you work, live, and communicate with others"} imagePath={RelationshipsImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                    <LibraryClickingDestination header={"3 Words and Stress"} description={"IDK what this is"} imagePath={ThreeWordsImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                    <LibraryClickingDestination header={"Teens"} description={"How you can best approach conflict"} imagePath={TeenImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                    <LibraryClickingDestination header={"Ask Be Do"} description={"TBD"} imagePath={AskBeDoImage} backgroundColor={"rgba(125, 0, 150, 0.60)"}  to ={HomeScreen}></LibraryClickingDestination>
                    <LibraryClickingDestination header={"Calm"} description={"TO DO"} imagePath={CalmImage} backgroundColor={"rgba(125, 0, 150, 0.60)"} to ={HomeScreen}></LibraryClickingDestination>
                    </div>
                </div>    
            )}
        </div>

        {!hasAccess && <div className='pop-up-container-home' data-testid="upgrade-popup-container"><UpgradeYourPlanPopUp id="upgrade-popup" onClose={toggleAccess} locationName={locationName} membershipPlan={membershipPlan} /></div>}

        </>
    );
};

export default HomeScreen;




