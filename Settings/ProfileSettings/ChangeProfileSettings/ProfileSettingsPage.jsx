import React, { useState } from 'react';
import './ProfileSettingsPage.css';
import BottomHeader from '../../../../components/Navigation/HeaderNavigation/bottomHeader';
import TopHeader from '../../../../components/Navigation/HeaderNavigation/topHeader';
import InputField from '../../../../components/InputField/InputField';
import ButtonNavigate from '../../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';

import { useRoute } from '@react-navigation/native';

import LoadingPage from '../../../../components/LoadingPage/LoadingPage';
import ErrorBox from '../../../../components/ErrorBox/ErrorBox';

  const ProfileSettingsPage = () => {
    const route = useRoute();
    const emailInput = route.params.email;
    const nameInput = route.params.name;

    const [name, setName] = useState(nameInput);
    const [email, setEmail] = useState(emailInput);

    const [error, setErrorMessage] = useState('');


    if (!email || !name) {
        return <LoadingPage/>
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value); //Take the value in the password input field
      }

    const handleNameChange = (event) => {
        setName(event.target.value); //Take the value in the password input field
      }

    const handleConfirm =  async () => {
        try {
            let requestBody = {
                currentEmail: emailInput,
              };
          
              if (email !== emailInput) {
                requestBody.newEmail = email;
              }
          
              if (name !== nameInput) {
                requestBody.newName = name;
              }

            const response = await fetch('http://165.227.112.131:8080/api/updateInfo', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
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
    };
    return (
      <>
        <TopHeader />
        <div className="background">
            <div className='header-container'>
                <div className="header">
                    <text>Profile Settings</text>
                </div>
            </div>

            <div className='body-container'>
                <div className='header-two-container-account-settings'>
                    <div className="header-two-account-settings">
                        Change Profile Settings
                    </div>
                </div>

                <div className="text-container">
                        New Name
                </div>
                <InputField placeholder="Your New Name" type="text" value={name} onChange={handleNameChange} />

                <div className="text-container">
                        New Email
                </div>
                <InputField placeholder="Your New Email" type="text" value={email} onChange={handleEmailChange}/>

                {/* i cannot get the button to go in a div to save my life. sorry! */}
                <br></br>
                <br></br>

                <ButtonNavigate  buttonText="Confirm"></ButtonNavigate>

                {error && <ErrorBox text={error}/>}
            </div> 
        </div>
        <BottomHeader />
      </>

    );
  };
  export default ProfileSettingsPage;
