import React from 'react';
import './ProfileSettingsInfoPage.css';
import TopHeader from '../../../../components//Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../../../components/Navigation/HeaderNavigation/bottomHeader';
import ButtonNavigate from '../../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import strings from '../../../../navigationStrings.json';

import useAsyncStorage from '../../../../components/AsyncStorage/AsyncStorage';
import LoadingPage from '../../../../components/LoadingPage/LoadingPage';


  const ProfileSettingsInfoPage = () => {
    const [email] = useAsyncStorage('email');
    const [name] = useAsyncStorage('name');
    
    if (!email && !name) {
        return <LoadingPage/>
    }

    return (
      <>
        <TopHeader />
        <div className="background-profile-settings-info-page">
            <div className='header-container-profile-settings-info-page'>
                <div className="header-profile-settings-info-page">
                    <text>Profile Settings</text>
                </div>
            </div>   

        <div className='body-container-profile-settings-info-page'>
            <div className="text-conatiner-profile-settings-info-page">
                    <div className="text-header-info-profile-settings-info-page">
                        <text>Name</text>
                    </div>
                    <div className="text-info-profile-settings-info-page">
                        <text>{name}</text>
                    </div>
                    
                </div>

                <div className="text-conatiner-profile-settings-info-page">
                    <div className="text-header-info-profile-settings-info-page">
                        <text>Email</text>
                    </div>
                    <div className="text-info-profile-settings-info-page">
                        <text>{email}</text>
                    </div>
                </div>

                <div className="button-conatiner-profile-settings-info-page">
                    <ButtonNavigate  buttonText="Change Your Information" to={strings.profileSettingsPage} dataMap={{"email": email, "name": name}}></ButtonNavigate>
                </div>

                


        </div>   

 

        </div>

        <BottomHeader />
      </>

    );
  };
  export default ProfileSettingsInfoPage;
