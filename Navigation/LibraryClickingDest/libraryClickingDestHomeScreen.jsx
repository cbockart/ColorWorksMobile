// LibraryClickingDest.jsx
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './libraryClickingDestHomeScreen.css';
import strings from '../../../navigationStrings.json';

// THIS IS HOW YOU CALL THE PAGE
// <libraryClickingDest
//   header="Your Header"
//   description="Your Description"
//   icon="path/to/your/icon.png"
//   backgroundColor="blue"
//   to="QuizQuestionPage"
// />

const LibraryClickingDest = ({ header, description, imagePath, backgroundColor, to, membershipPlan, onNoAccess, mappingId, hasDropdown }) => {
  const navigation = useNavigation(); // Get the navigation object

  const bronzeDestinations = [strings.relaxationHome, strings.careerHome, strings.personalizedInfoHome];
  const silverDestinations = [...bronzeDestinations, strings.relationshipsHome, strings.communicationStylesHome, strings.kidsHome, strings.teensHome, strings.threeWordsHome];
  const goldDestinations = [...silverDestinations, strings.parentingHome, strings.askBeDoHome, strings.leadershipHome, strings.calmHome];

  const containerStyle = {
    //TODO: USE verifyAccess() to check 
    backgroundColor: backgroundColor // Set the background color dynamically
  };

  const verifyAccess = () => {
    return membershipPlan === "Bronze" && bronzeDestinations.includes(to) ||
      membershipPlan === "Silver" && silverDestinations.includes(to) ||
      membershipPlan === "Gold" && goldDestinations.includes(to);
  }

  const handlePress = () => {
    if(verifyAccess(membershipPlan)) 
    {
      // Navigate to the specified screen & send mappingId if page needs it
      (mappingId ? navigation.navigate(to, {"mappingId": mappingId, "hasDropdown": hasDropdown}) : navigation.navigate(to)) 
    } else {
      onNoAccess();
    }
  };

  return (
    <div className="container-library-clicking-dest-home" style={containerStyle} onClick={handlePress}>
      <div className='text-container-library-clicking-dest-home' >
        <div className="header-library-clicking-dest-home" >
              <br></br>
              <text>{header}</text>
        </div>
        <div className="description-library-clicking-dest-home" >
              <text>{description}</text>
        </div>
      </div>
      <div className="icon-container">
        <img src={imagePath} alt="Icon" className="icon-library-clicking-dest"/>
      </div>
    </div>
  );
};

export default LibraryClickingDest;



