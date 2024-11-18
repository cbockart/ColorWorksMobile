import React from 'react';
import './GoldPlanPopUp.css';
import xImage from '../../../Images/PlanManagement/x.svg';
import { useNavigation } from '@react-navigation/native';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import ParentingImage from '../../../Images/PlanManagement/parenting.png';
import AskBeDoImage from '../../../Images/PlanManagement/AskBeDo.png';
import BuildingBlocksImage from '../../../Images/PlanManagement/Blocks_icon.png';
import CALMImage from '../../../Images/PlanManagement/Calm_icon.png';

const GoldPlanPopUp = ({ toBackAScreen, toForwardAScreen, onClose }) => {
    const navigation = useNavigation();
    
    const handlePressBack = () => {
        navigation.navigate(toBackAScreen);
        onClose();
    };

    function redirectToExternalPaymentLink(){
      window.location.href = 'https://buy.stripe.com/test_6oEeUVdhu7X13a8aEE';
    }

    return (
      <>
        <div className="Gold-Plan-Pop-Up-container">

            <div className="exit-log-out-pop-up-container" onClick={handlePressBack} >
                <img src={xImage} alt="exit" className='exit-log-out-pop-up' />
            </div>

            <div className="Gold-Plan-Pop-Up-header-container">
                <div className="Gold-Plan-Pop-Up-header">Gold Plan</div>
                <div className="Gold-Plan-Pop-Up-price">$11.99</div>

            </div>

            <div className="Gold-Plan-Pop-Up-feature-container">
            <div className="Gold-Plan-Pop-Up-info-header">Access To:</div>
                <div className='Gold-Plan-Pop-Up-row'>
                  <img src={ParentingImage} alt="Icon" className="Gold-Plan-Pop-Up-icon"/>
                  <div className="Gold-Plan-Pop-Up-info">Parenting</div>
                </div>
                <div className='Gold-Plan-Pop-Up-row'>
                  <img src={AskBeDoImage} alt="Icon" className="Gold-Plan-Pop-Up-icon"/>
                  <div className="Gold-Plan-Pop-Up-info">Ask-Be-Do</div>
                </div>
                <div className='Gold-Plan-Pop-Up-row'>
                  <img src={BuildingBlocksImage} alt="Icon" className="Gold-Plan-Pop-Up-icon"/>
                  <div className="Gold-Plan-Pop-Up-info">Building Blocks of Change & Leadership</div>
                </div>
                <div className='Gold-Plan-Pop-Up-row'>
                  <img src={CALMImage} alt="Icon" className="Gold-Plan-Pop-Up-icon"/>
                  <div className="Gold-Plan-Pop-Up-info">CALM</div>
                </div>
            </div>

            <div className="Gold-Plan-Pop-Up-button-container" onClick={redirectToExternalPaymentLink}>
                <ButtonNavigate buttonText="Upgrade Me" backgroundColor={"#FFFFFF"} textColor={"#CD7F32"}></ButtonNavigate>
            </div>
        </div>

        
      </>
    );
};
export default GoldPlanPopUp;
