// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import './LoginPage.css';
import InputField from '../../components/InputField/InputField';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import HyperlinkButtonNavigate from '../../components/Navigation/Buttons/HyperlinkButton/HyperlinkButtonNavigate';
import strings from '../../navigationStrings.json';
import LoginTooltip from '../../components/Tooltip/LoginTooltip';

import BackButtonNavigate from '../../components/Navigation/Buttons/BackButton/backButtonNavigate';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrorMessage] = useState('');

  const navigation = useNavigation(); // Get the navigation object

  const handleEmailChange = (event) => {
    setEmail(event.target.value); //Take the value in the email inputfield
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); //Take the value in the password input field
  }

  const onSuccess = async (data) => {
    const email = data.email;
    const membershipPlan = data.membership_plan;
    const name = data.name;
    const mappingId = data.mappingId;
    const status = data.status;
    try {
      AsyncStorage.setItem('email', email);
      AsyncStorage.setItem('membershipPlan', membershipPlan);
      AsyncStorage.setItem('name', name);
      AsyncStorage.setItem('mappingId', mappingId);
      AsyncStorage.setItem('status', status);
      console.log('Data stored successfully');
    
      const response = await fetch('http://165.227.112.131:8080/api/allAccounts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }), //sends email and passwordto backend
          });

      if (response.ok) {
        const userData = await response.json();
        
        // Store userData in local storage
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        
        console.log('User-specific data retrieved and stored successfully');
      } else {
        console.error('Failed to fetch user-specific data from /api/loginAccounts');
      }

      // Navigate to home page or perform any other action as needed
      navigation.navigate(strings.homePage);

    } catch (error) {
      console.error('Error during login:', error);
    }
    navigation.navigate(strings.homePage);
  }

  const handleLoginPage = async () => {
    if (!email && !password){
      setErrorMessage("Please fill out all input boxes.");
    }
    else {
      if(error){
        setErrorMessage('');
      }
      try {
        const response = await fetch('http://165.227.112.131:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }), //sends email and passwordto backend
        });

        const data = await response.json();
        if (response.status === 200){  // to get working responses, set the following: email->ok.com password->pass
          onSuccess(data);
        } else {
          setErrorMessage(data.message); // Didn't get response code 200 or 400
        }
      } catch (error) {
        console.error('Error creating account:', error);      }
    }
  };

  return (
    <>
    <div className="login-page-back-button-container">
      <BackButtonNavigate to={strings.launchPageString}/>
    </div>

    <div className="login-page-header-container">
      <div className="loginHeader">Login</div>
    </div>

    <div className="login-page-input-container">
        <InputField placeholder="Enter your email" type="text" value={email} onChange={handleEmailChange} />
        <InputField placeholder="Enter your password" type="password" value={password} onChange={handlePasswordChange}/>
    </div>

    {error && (
        <ErrorBox text={error}/>
    )}

    <div className="login-page-button-container">
      <ButtonNavigate buttonText="Login" onClick={handleLoginPage}/>

    </div>
    
    <div className="create-an-account-container">
    <div className="prompt">
        <span>Don't have an account? </span>
        <div className="hyperlink">
          <HyperlinkButtonNavigate className="hyperlink" buttonText="Start here" to={strings.beginQuizPage} />
        </div>
        <br></br>
        <LoginTooltip tooltipText={"New users must take the quiz before creating an account"} />
    </div>
    </div>

    </>
  );
};

export default LoginPage;
