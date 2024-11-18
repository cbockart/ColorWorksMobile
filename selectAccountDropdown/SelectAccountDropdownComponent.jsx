import React from 'react';
import './SelectAccountDropdownComponent.css';

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

const SelectAccountDropdownComponent = ({name, primaryColor, secondaryColor}) => {
    const colorImage = getColorImage(primaryColor, secondaryColor);
    
    return (
      <>
        <div className="select-account-dropdown-component">
            <div className="account-dropdown-component-name-container">
                <div className="account-dropdown-component-name">{name}</div>
            </div>

            <div className="account-dropdown-component-picture-conatiner">
                <img src={colorImage} alt="primary/secondary" className='color-image' />
            </div>

        </div>




      </>
    );
};
export default SelectAccountDropdownComponent;
