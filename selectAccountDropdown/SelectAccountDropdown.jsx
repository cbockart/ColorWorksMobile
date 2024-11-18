import React, { useState, useEffect } from 'react';
import './SelectAccountDropdown.css';
import SelectAccountDropdownComponent from './SelectAccountDropdownComponent';
import angleSmallDownImage from './angleSmallDown.png'
import angleSmallUpImage from './angleSmallUp.png'
import { individualColorMapping, InteractionStyleMapping } from '../../colorMapping';
import useAsyncStorage from '../AsyncStorage/AsyncStorage';
import LoadingPage from '../LoadingPage/LoadingPage';
import ErrorBox from '../ErrorBox/ErrorBox';


const CustomDropdownOption = ({ profile, onSelect }) => {
    const handleClick = () => {
        onSelect(profile);
    };

    return (
        <>
        <div className="custom-dropdown-option" onClick={handleClick}>
            <SelectAccountDropdownComponent
                name={profile.name}
                primaryColor={profile.primaryColor}
                secondaryColor={profile.secondaryColor}
            />
        </div>
        </>
    );
};

const SelectAccountDropdown = ({handleProfileChange}) => {    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [userProfiles, setUserProfiles] = useState([]);
    const [email] = useAsyncStorage('email');

    useEffect(() => {
        const fetchUserProfiles = async () => {
          try {
            const userDataFromStorage = await localStorage.getItem('userData');
            const parsedUserData = JSON.parse(userDataFromStorage);
    
            const { master_account, sub_accounts } = parsedUserData;
    
            const masterUser = master_account.master_user_info;
                const masterMappingId = masterUser.mappingId.toString().split('');
                const masterPrimaryColor = individualColorMapping[masterMappingId[0]];
                const masterSecondaryColor = individualColorMapping[masterMappingId[1]];
                const masterInteractionStyle = InteractionStyleMapping[masterMappingId[2]];

                const masterProfile = {
                    id: masterUser.master_user_id,
                    name: masterUser.name,
                    email: masterUser.email,
                    mappingId: masterUser.mappingId,
                    primaryColor: masterPrimaryColor,
                    secondaryColor: masterSecondaryColor,
                    interactionStyle: masterInteractionStyle
                };

                let profiles = [];
                if (sub_accounts && sub_accounts.length > 0 && sub_accounts[0].name != null) {
                    profiles = sub_accounts.map(subAccount => {
                        const mappingId = subAccount.mappingId.toString().split('');
                        const primaryColor = individualColorMapping[mappingId[0]];
                        const secondaryColor = individualColorMapping[mappingId[1]];
                        const interactionStyle = InteractionStyleMapping[mappingId[2]];
                        return {
                            id: subAccount.sub_user_id,
                            name: subAccount.name,
                            email: subAccount.email,
                            mappingId: subAccount.mappingId,
                            primaryColor,
                            secondaryColor,
                            interactionStyle
                        };
                    });
                }

                const allProfiles = [masterProfile, ...profiles];
                const selected = allProfiles.find(profile => profile.email === email);

                setUserProfiles(allProfiles);
                setSelectedProfile(selected);
            } catch (error) {
                console.error('Error fetching user profiles:', error);
            }
        };
        fetchUserProfiles();
      }, [email]);

    if (!email) {
        return <LoadingPage/>
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (profile) => {
        setSelectedProfile(profile);
        setIsOpen(false);
        handleProfileChange(profile.mappingId);
    };

    return (
        <div className="custom-dropdown">
            <div className="custom-dropdown-header" onClick={handleToggle}>
                {selectedProfile ? (
                    <SelectAccountDropdownComponent
                        name={selectedProfile.name}
                        primaryColor={selectedProfile.primaryColor}
                        secondaryColor={selectedProfile.secondaryColor}
                    />
                ) : ""}
                <img
                    src={isOpen ? angleSmallUpImage : angleSmallDownImage}
                    alt={isOpen ? 'up-arrow' : 'down-arrow'}
                    className="dropdown-arrow"
                />
            </div>
            {isOpen && (
                <div className="custom-dropdown-options">
                    {userProfiles
                        .filter(profile => profile.name !== email) // Exclude current user's profile
                        .map((profile) => (
                            <CustomDropdownOption
                                key={profile.id}
                                profile={profile}
                                onSelect={handleSelect}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default SelectAccountDropdown;