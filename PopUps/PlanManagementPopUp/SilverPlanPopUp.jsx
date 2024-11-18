import React from 'react';
import './SilverPlanPopUp.css';
import xImage from '../../../Images/PlanManagement/x.svg';
import { useNavigation } from '@react-navigation/native';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import RelationshipsImage from '../../../Images/PlanManagement/relationship.png'
import CommunicationImage from '../../../Images/PlanManagement/Communication_icon.png'
import ThreeWordsImage from '../../../Images/PlanManagement/3_choices_icon.png'
import KidsImage from '../../../Images/PlanManagement/Kids.png'
import TeensImage from '../../../Images/PlanManagement/Teen_icon.png'

const SilverPlanPopUp = ({ toBackAScreen, toForwardAScreen, onClose }) => {
    const navigation = useNavigation();
    
    const handlePressBack = () => {
        navigation.navigate(toBackAScreen);
        onClose();
    };

    function redirectToExternalPaymentLink(){
      window.location.href = 'https://buy.stripe.com/test_bIY9ABdhu6SXeSQbIJ';
    }

    return (
      <>
        <div className="Silver-Plan-Pop-Up-container">

            <div className="exit-log-out-pop-up-container" onClick={handlePressBack} >
                <img src={xImage} alt="exit" className='exit-log-out-pop-up' />
            </div>

            <div className="Silver-Plan-Pop-Up-header-container">
                <div className="Silver-Plan-Pop-Up-header">Silver Plan</div>
                <div className="Silver-Plan-Pop-Up-price">$9.99</div>

            </div>

            <div className="Silver-Plan-Pop-Up-feature-container">
                <div className="Silver-Plan-Pop-Up-info-header">Access To:</div>
                <div className='Silver-Plan-Pop-Up-row'>
                  <img src={RelationshipsImage} alt="Icon" className="Silver-Plan-Pop-Up-icon"/>
                  <div className="Silver-Plan-Pop-Up-info">Relationships</div>
                </div>
                <div className='Silver-Plan-Pop-Up-row'>
                  <img src={CommunicationImage} alt="Icon" className="Silver-Plan-Pop-Up-icon"/>
                  <div className="Silver-Plan-Pop-Up-info">Communication Styles</div>
                </div>
                <div className='Silver-Plan-Pop-Up-row'>
                  <img src={ThreeWordsImage} alt="Icon" className="Silver-Plan-Pop-Up-icon"/>
                  <div className="Silver-Plan-Pop-Up-info">3-Words & Stress</div>
                </div>
                <div className='Silver-Plan-Pop-Up-row'>
                  <img src={KidsImage} alt="Icon" className="Silver-Plan-Pop-Up-icon"/>
                  <div className="Silver-Plan-Pop-Up-info">Kids</div>
                </div>
                <div className='Silver-Plan-Pop-Up-row'>
                  <img src={TeensImage} alt="Icon" className="Silver-Plan-Pop-Up-icon"/>
                  <div className="Silver-Plan-Pop-Up-info">Teens</div>
                </div>
            </div>

            <div className="Silver-Plan-Pop-Up-button-container" onClick={redirectToExternalPaymentLink}>
                <ButtonNavigate buttonText="Upgrade Me" backgroundColor={"#FFFFFF"} textColor={"#C0C0C0"}></ButtonNavigate>
            </div>
        </div>

        
      </>
    );
};
export default SilverPlanPopUp;
