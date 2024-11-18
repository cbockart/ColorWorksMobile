import React from 'react';
import './AccountProfileComponent.css'

import extrovertPuzzleImage from './extrovertPuzzle.png';
import introvertPuzzleImage from './introvertPuzzle.png';

import Green_Orange from './Green_Orange.png';
import Green_Gold from './Green_Gold.png';
import Blue_Gold from './Blue_Gold.png';
import Blue_Orange from './Blue_Orange.png';
import Orange_Green from './Orange_Green.png';
import Orange_Blue from './Orange_Blue.png';
import Gold_Green from './Gold_Green.png';
import Gold_Blue from './Gold_Blue.png';

const colorImageMapping = {
    Blue: {
        Gold: Blue_Gold,
        Orange: Blue_Orange,
    },
    Green: {
        Gold: Green_Gold,
        Orange: Green_Orange,
    },
    Orange: {
        Blue: Orange_Blue,
        Green: Orange_Green,
    },
    Gold: {
        Blue: Gold_Blue,
        Green: Gold_Green,
    }
  };

const getInteractionImage = (interactionStyle) => {
    if (
      interactionStyle === "Introvert"
    ) {
      return introvertPuzzleImage;
    } else {
      return extrovertPuzzleImage;
    }
  };

  const getColorImage = (primaryColor, secondaryColor) => {
     // Check if the combination exists in the data structure
  if (
    colorImageMapping[primaryColor] &&
    colorImageMapping[primaryColor][secondaryColor]
  ) {
    // Retrieve and return the corresponding image
    return colorImageMapping[primaryColor][secondaryColor];
  } else {
    // Return a default image or handle the case where the combination doesn't exist
    return 'default.png';
  }
  }

const AccountProfileComponent = ({name, primaryColor, secondaryColor, interactionStyle}) => {
    const interactionImage = getInteractionImage(interactionStyle);

    const colorImage = getColorImage(primaryColor, secondaryColor);

    return (
      <>
      <div className="account-profile-container">
        <div className="account-profile-name-image-decription-container">
            <div className="account-profile-name-image-container">
                <div className="account-profile-name">{name}</div>
                <img src={interactionImage} alt="interactionStyle" className='interaction-style-image' />
            </div>
            <div className="account-profile-decription-container">
                <div className="account-profile-description">{primaryColor} | {secondaryColor} | {interactionStyle}</div>
            </div>
        </div>

        <div className="account-profile-color-container">
          <img src={colorImage} alt="primary/secondary" className='color-image' />

        </div>


    
      </div>

     





      </>
    );
};
export default AccountProfileComponent;
