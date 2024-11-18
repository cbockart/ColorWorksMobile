import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './BeginQuizPage.css';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import InputField from '../../../components/InputField/InputField';
import strings from '../../../navigationStrings.json'
import BackButtonNavigate from '../../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import ErrorBox from '../../../components/ErrorBox/ErrorBox';


const BeginQuizPage = () => {
  const route = useRoute(); 
  const [email, setEmail] = useState('');
  const [error, setErrorMessage] = useState('');
  const navigation = useNavigation(); // Get the navigation object
  const subUser = route.params && route.params.subUser && route.params.subUser !== undefined && route.params.subUser === true ? true : false;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value); //Take the value in the email inputfield
  }

  const handleEmailCreate = async () => {
    if(email){
      if(!emailRegex.test(email)){
        setErrorMessage("Email format invalid");
        return;
      }
      if(error)
        setErrorMessage('');
      try {
        const response = await fetch('http://165.227.112.131:8080/api/emailInUse', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Specify content type as JSON
          },
          body: JSON.stringify({ email }), //sends email to backend
        });

        const data = await response.json();
        if (response.status === 200){  // to get working responses, set the following: username->cb email->cb@iastate.edu password->pass pin->1234
          navigation.navigate(strings.quizQuestionPage, {"subUser": subUser, email: email});
        } else if (response.status === 400 ) {
          setErrorMessage(data.message)
        } 
      } catch (error) {
        console.error('Error creating account:', error);
      }
    } else {
      setErrorMessage("Email cannot be empty");
    }
  };

    return (
      <>
      <div className="begin-quiz-page-whole-page-container">
        <div className="begin-quiz-page-back-button-container">
          <BackButtonNavigate to={strings.launchPageString}/>
        </div>

        <div className="texts-container">
            <div className="bold-individual-text-container">
                This questionnaire can take upwards of 10-15 minutes.
            </div>
            <div className="individual-text-container" >
                This quiz will provide you with a primary color, secondary color, and interaction style, all of which are the foundation for your individualized personality and mental-health coaching.
            </div>
        </div>
        
        <div className="begin-quiz-email-input-container">
            {/* <InputField placeholder="Enter Email" className=".begin-quiz-email-input-container" type="email" /> */}
            <InputField placeholder="Enter Email" className="begin-quiz-email-input" type="email" value={email} onChange={handleEmailChange} />
        </div>

        {error && <ErrorBox text={error}/>}
        
        <div className="begin-quiz-button-container">
          {/* <ButtonNavigate buttonText="Begin Quiz" to ={strings.quizQuestionPage}></ButtonNavigate> */}
          <ButtonNavigate buttonText="Begin Quiz" onClick={handleEmailCreate}></ButtonNavigate>
        </div>
        
      </div>
      </>
    );
};
export default BeginQuizPage;
