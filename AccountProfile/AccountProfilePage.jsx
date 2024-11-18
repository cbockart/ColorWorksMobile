//AcountProfilePage
import React, { useState, useEffect } from 'react';
import './AccountProfilePage.css';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import strings from '../../navigationStrings.json';
import AccountProfileComponent from '../../components/AccountProfileComponent/AccountProfileComponent';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage';
import { individualColorMapping, InteractionStyleMapping } from '../../colorMapping';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';

import { useFocusEffect } from '@react-navigation/native';
import { DisclaimerSection } from '../../stringHandler';


const AccountProfilePage = () => {
  const [email] = useAsyncStorage('email');
  const [membershipPlan] = useAsyncStorage('membershipPlan');
  const [status] = useAsyncStorage('status');
  const [userData, setUserData] = useState(null);
  const [ownerProfile, setOwnerProfile] = useState(null);
  const [userProfiles, setUserProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [canAddProfiles, setCanAddProfiles] = useState(false);

  const resetState = () => {
    window.scrollTo(0, 0);
  };

  useFocusEffect(
    React.useCallback(() => {
        resetState();
        return () => {};
    }, [])
  );


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataFromStorage = await localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataFromStorage);
        setUserData(parsedUserData);

        const { master_account, sub_accounts } = parsedUserData;

        const masterUser = master_account.master_user_info;
        const masterMappingId = masterUser.mappingId.toString().split('');
        const masterPrimaryColor = individualColorMapping[masterMappingId[0]];
        const masterSecondaryColor = individualColorMapping[masterMappingId[1]];
        const masterInteractionStyle = InteractionStyleMapping[masterMappingId[2]];
        
        setOwnerProfile({
          id: masterUser.master_user_id,
          name: masterUser.name,
          email: masterUser.email,
          primaryColor: masterPrimaryColor,
          secondaryColor: masterSecondaryColor,
          interactionStyle: masterInteractionStyle
        });

        if (sub_accounts && sub_accounts.length > 0) {
          const profiles = sub_accounts.map(subAccount => {
            const mappingId = subAccount.mappingId.toString().split('');
            const primaryColor = individualColorMapping[mappingId[0]];
            const secondaryColor = individualColorMapping[mappingId[1]];
            const interactionStyle = InteractionStyleMapping[mappingId[2]];
            return {
              id: subAccount.sub_user_id,
              name: subAccount.name,
              email: subAccount.email,
              primaryColor,
              secondaryColor,
              interactionStyle
            };
          });
          setUserProfiles(profiles);
        } else {
          setUserProfiles([]);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [email, membershipPlan]); // Include email and membershipPlan as dependencies

  useEffect(() => {
    const setAddProfiles = async () => {
    //If a user is Gold Plan, they can add unlimited profiles
    //If a user is Bronze plan, they cannot add any additional profiles
    if(membershipPlan === "Bronze") {
      setCanAddProfiles(false);
      return;
    } else if(membershipPlan == "Gold") {
      setCanAddProfiles(true);
      return;
    }

    //If a user is Silver plan, they can not have more than two profiles
    if(userProfiles.length < 1){
      setCanAddProfiles(true);
    } else {
      setCanAddProfiles(false);
    }
    };
    
    setAddProfiles();
  }, [membershipPlan]);

  return (
    <>
    <div className="idk-try">
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <><TopHeader />
        <div className='accountProfile-whole-container'>
          <div className="account-profiles-header-container">
            <HomePageTopSection headerText={"Account Profiles"} hasDropdown={false} />
          </div>

          <div className="account-profiles-owner-container">
            <div className="account-profiles-owner-header">Account Owner</div>
            {ownerProfile && (
              <AccountProfileComponent
                name={ownerProfile.name} primaryColor={ownerProfile.primaryColor} secondaryColor={ownerProfile.secondaryColor} interactionStyle={ownerProfile.interactionStyle} />
            )}
          </div>

          <>
            <div className="account-profiles-list-of-profiles-container">
              <div className="account-profiles-list-of-profiles-header">{userProfiles.length > 0 ? "Sub Account Profiles" : ""}</div>
              {userProfiles.map(profile => (
                <AccountProfileComponent
                  key={profile.id}
                  name={profile.name}
                  primaryColor={profile.primaryColor}
                  secondaryColor={profile.secondaryColor}
                  interactionStyle={profile.interactionStyle} />
              ))}
            </div>
            {canAddProfiles && (
              <div className="account-profiles-button-container">
                <ButtonNavigate buttonText={"Add New Profile to Account"} to={strings.beginQuizPage} dataMap={{ "subUser": true }}></ButtonNavigate>
              </div>
            )}
          </>
          {!canAddProfiles && (
            <>
              <br />
              <div className="upgrade-plan-text">Upgrade your plan to add more profiles</div>
              {(membershipPlan === "Bronze" || (membershipPlan === "Silver" && userProfiles.length === 1)) && (
                <DisclaimerSection disclaimerText={membershipPlan === "Bronze" ?
                "As a bronze plan user, you must upgrade your plan to add more profiles to your account." :
                "As a silver plan user, you must upgrade your plan to add more than one other profile to your account."} style={{ fontSize: '14px', textAlign: 'center', width: '90%', marginTop: '2%', marginLeft: '5%' }} />
              )}
              <div className="account-profiles-button-container">
                <ButtonNavigate buttonText={"Upgrade Your Plan"} to={strings.planManagement}></ButtonNavigate>
              </div>
            </>
          )}

        {userProfiles.length > 0 && (
        <div className="account-profiles-button-container" style={{marginBottom: (membershipPlan === "Gold" ? '20%' : '5%')}}>
          <ButtonNavigate buttonText={"Login as a Different Account"} to={strings.loginPage}></ButtonNavigate>
        </div>
        )}  
      
        </div><BottomHeader currentScreen="profile" /></>
      )}
      </div>
    </>
  );
};

export default AccountProfilePage;
