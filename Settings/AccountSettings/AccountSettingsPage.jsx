import React, { useState } from 'react';
import './AccountSettingsPage.css';
import InputField from '../../../components/InputField/InputField';
import ButtonNavigate from'../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import TopHeader from '../../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../components/Navigation/HeaderNavigation/bottomHeader';
import useAsyncStorage from '../../../components/AsyncStorage/AsyncStorage';
import LoadingPage from '../../../components/LoadingPage/LoadingPage';
import ErrorBox from '../../../components/ErrorBox/ErrorBox';


  const AccountSettingsPage = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email] = useAsyncStorage('email');
    const [error, setErrorMessage] = useState('');


    if (!email) {
        return <LoadingPage/>
    }
  
    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value); //Take the value in the password input field
      }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); //Take the value in the password input field
      }
    
    const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value); //Take the value in the password input field
    }

    const handleConfirm =  async () => {
        if(password == confirmPassword && oldPassword != password ){
            try {
                const response = await fetch('http://165.227.112.131:8080/api/updatePassword', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: email,
                    oldPassword: oldPassword,
                    password: password,
                    confirmPassword: confirmPassword
                    }),
                });
      
                const data = await response.json();
                if (response.status === 200){  // to get working responses, set the following: username->cb email->cb@iastate.edu password->pass pin->1234
                    setErrorMessage(data.message);  // Response code 400 is given
                }
                else if (response.status === 400 ) {
                  setErrorMessage(data.message);  // Response code 400 is given
                } 
              } catch (error) {
                console.error('Error creating account:', error); // Handle other errors
              }
            }
    };
    return (
      <>
      <TopHeader />
      <div className={'background-account-settings'}>
            <div className='header-container-account-settings'>
                <div className="header-account-settings">
                    Account Settings
                </div>
            </div>

            <div className={'body-container-account-settings'}>
                <div className='header-two-container-account-settings'>
                    <div className="header-two-account-settings">
                        Change Password
                    </div>
                </div>

                    <div className="text-container-old">
                        Old Password
                    </div>
                <InputField placeholder="Your Old Password" type="password" onChange={handleOldPasswordChange}/>

                    <div className="text-container-new">
                        New Password
                    </div>

                <InputField placeholder="Your New Password" type="password" onChange={handlePasswordChange}/>

                    <div className="text-container-confirm">
                        Confirm Password
                    </div>

                <InputField placeholder="Confirm Password" type="password" onChange={handleConfirmPasswordChange}/>

                <div className="account-profile-button-confirm">
                  <ButtonNavigate  buttonText="Confirm" onClick={handleConfirm}></ButtonNavigate>
                </div>

                {error && <ErrorBox text={error}/>}
            </div>
        </div>
      <BottomHeader />
      </>

    );
  };
  export default AccountSettingsPage;
