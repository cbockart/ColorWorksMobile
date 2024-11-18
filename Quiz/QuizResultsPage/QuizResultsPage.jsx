import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './QuizResultsPage.css'

import E_Blue_Gold from "../../../../src/Images/TriangleImages/E_Blue_Gold.png"
import E_Green_Orange from "../../../../src/Images/TriangleImages/E_Green_Orange.png"
import E_Blue_Orange from "../../../../src/Images/TriangleImages/E_Blue_Orange.png"
import E_Gold_Blue from "../../../../src/Images/TriangleImages/E_Gold_Blue.png"
import E_Gold_Green from "../../../../src/Images/TriangleImages/E_Gold_Green.png"
import E_Green_Gold from "../../../../src/Images/TriangleImages/E_Green_Gold.png"
import E_Orange_Blue from "../../../../src/Images/TriangleImages/E_Orange_Blue.png"
import E_Orange_Green from "../../../../src/Images/TriangleImages/E_Orange_Green.png"
import I_Blue_Gold from "../../../../src/Images/TriangleImages/I_Blue_Gold.png"
import I_Blue_Orange from "../../../../src/Images/TriangleImages/I_Blue_Orange.png"
import I_Gold_Blue from "../../../../src/Images/TriangleImages/I_Gold_Blue.png"
import I_Gold_Green from "../../../../src/Images/TriangleImages/I_Gold_Green.png"
import I_Green_Gold from "../../../../src/Images/TriangleImages/I_Green_Gold.png"
import I_Green_Orange from "../../../../src/Images/TriangleImages/I_Green_Orange.png"
import I_Orange_Blue from "../../../../src/Images/TriangleImages/I_Orange_Blue.png"
import I_Orange_Green from "../../../../src/Images/TriangleImages/I_Orange_Green.png"

import Extrovert from "../../../../src/Images/Extrovert_puzzle.png"
import Introvert from "../../../../src/Images/Introvert_puzzle.png"

import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import HyperlinkButtonNavigate from '../../../components/Navigation/Buttons/HyperlinkButton/HyperlinkButtonNavigate';
import strings from '../../../navigationStrings.json';
import { getInteractionStyle, getValueForMappingId } from '../../../colorMapping';
import { handleArray } from '../../../stringHandler';

const imageMapping = {
  141: E_Blue_Gold,
  131: E_Blue_Orange,
  140: I_Blue_Gold,
  130: I_Blue_Orange,
  241: E_Green_Gold,
  231: E_Green_Orange,
  240: I_Green_Gold,
  230: I_Green_Orange,
  310: I_Orange_Blue,
  320: I_Orange_Green,
  311: E_Orange_Blue,
  321: E_Orange_Green,
  411: E_Gold_Blue,
  421: E_Gold_Green,
  410: I_Gold_Blue,
  420: I_Gold_Green,
};

const resultExplanation = `
    At ColorWorks, we take your privacy and data protection seriously. We ensure that all personal information collected during the assessment process is handled securely and in accordance with relevant data protection laws.
    Your personal data will never be shared with third parties without your explicit consent. We are committed to maintaining the confidentiality of your information.
    Accuracy and Integrity

    The ColorWorks personality test is designed for personal development and entertainment purposes only. It should not be used as a substitute for professional advice or counseling.
    By using our application, you acknowledge that the results of the personality test are not absolute and may vary based on individual interpretation.
    User Conduct

    We encourage all users to engage with our application respectfully and responsibly. Any misuse, abuse, or disruptive behavior will not be tolerated and may result in the suspension or termination of your account.
    You are solely responsible for maintaining the confidentiality of your account credentials and ensuring that your account is not accessed by unauthorized individuals.
    Intellectual Property

    All content, including text, images, logos, and trademarks, displayed on the ColorsWork application, is the intellectual property of ColorsWork or its licensors. Unauthorized use or reproduction of this content is strictly prohibited.
    Updates and Modifications

    ColorWorks reserves the right to update, modify, or discontinue the application or any features thereof at any time without prior notice. We may also revise these terms and policies periodically to reflect changes in our practices or legal requirements.
    By continuing to use the ColorsWork application, you agree to abide by these terms and policies. If you have any questions or concerns regarding our terms and policies, please reach out to our team.
    Thank you for choosing ColorWorks. Let's explore the colorful world of personality together!
  `;

// Function to retrieve image based on inputs
const getImage = (mappingId) => {
  // Check if the combination exists in the data structure
  if (
    imageMapping[mappingId]
  ) {
    // Retrieve and return the corresponding image
    return imageMapping[mappingId];
  } else {
    // Return a default image or handle the case where the combination doesn't exist
    return 'default.png';
  }
};

const QuizResultsPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const mappingId = route.params.mappingId;
  const email = route.params.email;
  const summary = route.params.summary;
  const changingColors = route.params?.changingColors !== undefined  && route.params.changingColors === true ? true : false;
  const subUser = route.params.subUser !== undefined && route.params.subUser === true ? true : false;

  const image = getImage(mappingId);
  const resultText = getValueForMappingId(mappingId);
  
  let resultOutput;

  resultOutput = <img src={image} alt="Result Image" />;

  const resultSummary = handleArray(summary);

  const handleChangeYourColors = async () => {
    try {
      const response = await fetch('http://165.227.112.131:8080/api/changeColors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, mappingId }),
          });

      if (response.ok) {
        navigation.navigate(strings.loginPage);
      } else {
        console.error('Failed to fetch user-specific data from /api/changeColors');
      }

    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <>
      <div className="quiz-question-result-container">
        <div className="colorworks-header-text">Congratulations! You are an {resultText} </div>
      </div>

      <div className="quizResult-topInfo">
      This pyramid represents your personality as a whole. Starting with the top, is your interaction style which explains how you 
      recharge when stressed. Your first color, exemplifies your decision making and call to action. 
      This is how you primarily deal with problems and make your decisions. Finally your secondary color explains how you perceive 
      and take in the information.
      </div>

      <div className="image-triangle-container"> 
        <div className="image-triangle">{resultOutput}</div>
      </div>

      <div class="quizResult-puzzle-piece-container">
        {getInteractionStyle(mappingId) === "Extrovert" ? <img src={Extrovert} alt="logo"/> : <img src={Introvert} alt="logo"/>}
      </div>
      <div class="quizResult-puzzle-piece-description-container">
        {getInteractionStyle(mappingId) === "Extrovert" ?  <div className='colorworks-information-text' style={{marginBottom: '5%', marginLeft: '32px', marginTop: '2%'}}>Extrovert</div> : <div className='colorworks-information-text' style={{marginBottom: '5%', marginLeft: '32px', marginTop: '2%'}}>Introvert</div>}
      </div>
      <br></br>

      <div className="color-description-conatiner">
        <div className="colorworks-subheader-text">More about {resultText}s:</div>
      </div>

      <div className="color-description-conatiner">
        <div className="colorworks-information-text">{resultSummary}</div>
      </div>

      <br></br>

      <div className="color-button-conatiner">
        {changingColors ? 
          (<ButtonNavigate buttonText="Change Your Colors" onClick={handleChangeYourColors}/>) 
          : (<ButtonNavigate buttonText="Create an account to learn more" to={strings.createAccount} dataMap={{"email": email, "mappingId": mappingId, subUser}}/>)
        }
        <br></br> 
        <HyperlinkButtonNavigate buttonText="Return to launch page" to ={strings.launchPageString}></HyperlinkButtonNavigate>
        <br></br> 
      </div>
    </>
  );
};

export default QuizResultsPage;