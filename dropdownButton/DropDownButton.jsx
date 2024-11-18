import React, { useState } from 'react';
import './DropDownButton.css';

import ArrowDownLightPurple from './arrowDownLightPurple.png';
import ArrowUpLightPurple from './arrowUpLightPurple.png';
import ArrowDownPurple from './arrowDownPurple.png';
import ArrowUpPurple from './arrowUpPurple.png';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';

const DropdownButton = ({ interactionState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">

      {/* This is the main section that always shows for the dropdown containter */}
      {interactionState === 'introvert' ? (
        <div className="dropdown-header-container">
          <ColorWorksText type={'header'} inputText={'Introverts'}></ColorWorksText>
          <img src={isOpen ? ArrowUpLightPurple : ArrowDownLightPurple} alt="Arrow" onClick={toggleDropdown} className='up-down-arrow-image'/>
        </div>
      ) : (
        <div className="dropdown-header-container">
          <ColorWorksText type={'header'} inputText={'Extroverts'}></ColorWorksText>
          <img src={isOpen ? ArrowUpPurple : ArrowDownPurple} alt="Arrow" onClick={toggleDropdown} className='up-down-arrow-image'/>
        </div>
      )}

      {/* This is the body section that can show if the above container is selected */}
      <div className="dropdown-body-container" style={{ display: isOpen ? 'block' : 'none' }}>
        <ul className="sub-txt-info-list">
          <li className="colorworks-information-text">Process ideas/emotions {interactionState === 'introvert' ? 'internally' : 'out loud'}</li>
          <li className="colorworks-information-text">Recharge best in a {interactionState === 'introvert' ? 'quiet' : 'social'} setting</li>
          <li className="colorworks-information-text">Mental energy is focused {interactionState === 'introvert' ? 'inward' : 'outward'}</li>
          <li className="colorworks-information-text">Require {interactionState === 'introvert' ? 'ample' : 'limited'} personal space</li>
          <li className="colorworks-information-text">{interactionState === 'introvert' ? 'Often conceal' : 'What you see is what you get'}</li>
          <li className="colorworks-information-text">{interactionState === 'introvert' ? 'Can be intensely private' : 'Less guarded with personal info'}</li>
          <li className="colorworks-information-text">{interactionState === 'introvert' ? 'Are more cautious with resources' : 'Are inclined to share resources'}</li>
          <li className="colorworks-information-text">Traits {interactionState === 'introvert' ? 'judged' : 'rewarded'} in the U.S.</li>
          <li className="colorworks-information-text">Exists on a continuum</li>
          <li className="colorworks-information-text">Wondering, "What were they thinking?" {interactionState === 'introvert' ? 'Ask them, they\'ll tell you if they trust you' : 'Actively listen, they\'re already telling you'}</li>
        </ul>
      </div>

    </div>
  );
};

export default DropdownButton;
