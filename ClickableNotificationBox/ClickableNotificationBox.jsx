import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import './ClickableNotificationBox.css';

import arrowRight from '../../Icons/Settings/right-arrow.png';


const ClickableNotificationBox = ({ imagePath, text, to, arrowDecision }) => {
  const navigation = useNavigation();
  const [showSwitch, setShowSwitch] = useState(arrowDecision === "no");

  const handlePress = () => {
    if (to) {
      navigation.navigate(to);
    }
  };

  const toggleSwitch = () => {
    setShowSwitch(!showSwitch);
  };

  return (
    <div className="container-clickablecomponent" onClick={handlePress}>
      <div className="container-clickablecomponent-left-information">
        <div className="icon-container-clickablecomponent">
          <img src={imagePath} alt="Icon" className="responsive-image" />
        </div>

        <div className="header-clickablecomponent">{text}</div>
      </div>

      {arrowDecision === "yes" && (        
        <div className="arrow-container-clickablecomponent">
          <img src={arrowRight} alt="Icon" className="arrow-image" />
        </div>
      )}

      {arrowDecision === "no" && (        
        <div className={`toggle-switch-component ${showSwitch ? 'active' : ''}`} onClick={toggleSwitch}>
          <label>
            <input type="checkbox" checked={showSwitch} onChange={() => {}} className="checkbox-switch"/>
          </label>
        </div>
      )}
    </div>
  );
};

export default ClickableNotificationBox;
