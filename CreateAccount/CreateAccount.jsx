
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './CreateAccount.css';
import InputField from '../../components/InputField/InputField.jsx';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate.jsx';
import HyperlinkButtonNavigate from '../../components/Navigation/Buttons/HyperlinkButton/HyperlinkButtonNavigate.jsx';
import strings from '../../navigationStrings.json';
import TermsAndPolicy from '../../components/TermsAndPolicies/TermsAndPolicy.jsx'
import ErrorBox from '../../components/ErrorBox/ErrorBox.jsx';
import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage.jsx';

const CreateAccount = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Get the navigation object
  const emailInput = route.params.email;
  const mappingId = route.params.mappingId;
  const subUser = route.params.subUser !== undefined && route.params.subUser === true ? true : false;
  const masterEmail = useAsyncStorage('email');

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [email, setEmail] = useState(emailInput);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setErrorMessage] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);

  const passwordRegex = /^(?=.*[!@#$%^&*_-])(?=.*[A-Z]).{8,}$/;

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); //Take the value in the email inputfield
    setErrorMessage('');
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); //Take the value in the username input field
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); //Take the value in the password input field
    setErrorMessage('');
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value); //Take the value in the password input field
    setErrorMessage('');
  }

  const toggleShowPopUp = () => {
    setShowPopUp(!showPopUp)
  }

  const handleCreateAccount = async () => {
    if(!isCheckboxChecked) {
      setErrorMessage('Please accept the terms and conditions');
      return;
    }
    if(error)
      setErrorMessage('');

    if (isCheckboxChecked && (username && email && password && confirmPassword)) {
      if(!passwordRegex.test(password)){
        setErrorMessage("Password does not meet requirements: Minimum length of 8 characters, one special character, and one capitalized character");
        return;
      }
        try {
          const requestBody =  {["mappingId"]: mappingId, 
          email, 
          username, 
          password, 
          confirmPassword, 
          ["accountType"]: (subUser ? "sub" : "master") }; //sends email, username, password and pin to backend

          if(subUser){
            requestBody.masterEmail = masterEmail[0];
          }

          const response = await fetch('http://165.227.112.131:8080/api/createAccount', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });

          const data = await response.json();
          if (response.status === 200){  // to get working responses, set the following: username->cb email->cb@iastate.edu password->pass pin->1234
            navigation.navigate(strings.loginPage);
          }
          else if (response.status === 400 ) {
            setErrorMessage(data.message);  // Response code 400 is given
          } 
        } catch (error) {
          console.error('Error creating account:', error); // Handle other errors
        }
      }
    else if(!(username && email && password && confirmPassword)){
      setErrorMessage("Please fill out all input fields")
    }
  };

  return (
    <>
    <div className="create-account-container">
      <div className={`plan-managment-background ${showPopUp ? 'blur' : ''}`}>
      <div className="create-account-header-container">
          Create An Account
      </div>

      <div className="info-input-container">
        <div className="infoHeaders">Name</div>
        <InputField placeholder="Your Name" type="text" value={username} onChange={handleUsernameChange} />

        <div className="infoHeaders">Email</div>
        <InputField placeholder="Your Email" type="text" value={email} onChange={handleEmailChange} readOnly={true}/>

        <div className="infoHeaders">Password</div>
        <InputField placeholder="Password" type="password" value={password} onChange={handlePasswordChange}/>

        <div className="infoHeaders">Confirm Password</div>
        <InputField placeholder="Confirm Password" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
      </div>

      {error && (
        <div className="error-box-container">
          <ErrorBox text={error}/>
        </div>
      )}

      <div className="terms-service-container">
        <div className="ButtonNavigate-container">
          <HyperlinkButtonNavigate buttonText={"Read terms and privacy policy"} onClick={toggleShowPopUp}></HyperlinkButtonNavigate>
        </div>
        <label>
          <input type="checkbox" name="myCheckbox" onChange={handleCheckboxChange}/>
          I accept the terms and privacy policy
        </label>
      </div>

        <ButtonNavigate buttonText="Create Account" onClick={handleCreateAccount} ></ButtonNavigate>

      <div className="already-have-an-account-container">
        <HyperlinkButtonNavigate buttonText="Return to Launch Page" to = {strings.launchPageString}></HyperlinkButtonNavigate>
      </div>
      </div>

      {showPopUp &&
        <div className="pop-up-container">
          <TermsAndPolicy onClose={toggleShowPopUp}></TermsAndPolicy>
        </div>
      }
    </div>
  {/* </div> */}
    </>
  );
};
export default CreateAccount;