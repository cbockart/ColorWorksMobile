import React from 'react';
import './BronzePlanPopUp.css';
import xImage from '../../../Images/PlanManagement/x.svg';
import { useNavigation } from '@react-navigation/native';
import PersonalizedInfoImage from '../../../Images/PlanManagement/Personalized_Info_Page.png';
import CareersImage from '../../../Images/PlanManagement/Career.png';
import RelaxationImage from '../../../Images/PlanManagement/Relaxation.png';


const BronzePlanPopUp = ({ toBackAScreen, onClose }) => {
  const navigation = useNavigation();
    
    const handlePressBack = () => {
        navigation.navigate(toBackAScreen);
        onClose();
    };  
  
  return (
      <>
        <div className="Bronze-Plan-Pop-Up-container">

            <div className="exit-log-out-pop-up-container" onClick={handlePressBack} >
                <img src={xImage} alt="exit" className='exit-log-out-pop-up' />
            </div>

            <div className="Bronze-Plan-Pop-Up-header-container">
                <div className="Bronze-Plan-Pop-Up-header">Bronze Plan</div>
                <div className="Bronze-Plan-Pop-Up-price">Free</div>

            </div>

            <div className="Bronze-Plan-Pop-Up-feature-container">
                <div className="Bronze-Plan-Pop-Up-info-header">Access To:</div>
                <div className='Bronze-Plan-Pop-Up-row'>
                  <img src={PersonalizedInfoImage} alt="Icon" className="Bronze-Plan-Pop-Up-icon"/>
                  <div className="Bronze-Plan-Pop-Up-info">Personalized Information</div>
                </div>
                <div className='Bronze-Plan-Pop-Up-row'>
                  <img src={CareersImage} alt="Icon" className="Bronze-Plan-Pop-Up-icon"/>
                  <div className="Bronze-Plan-Pop-Up-info">Careers</div>
                </div>
                <div className='Bronze-Plan-Pop-Up-row'>
                  <img src={RelaxationImage} alt="Icon" className="Bronze-Plan-Pop-Up-icon"/>
                  <div className="Bronze-Plan-Pop-Up-info">Relaxation</div>
                </div>
            </div>

        </div>

        
      </>
    );
};
export default BronzePlanPopUp;
