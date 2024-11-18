
import React, {useState} from 'react';
import './ChangeYourColorsPageTwo.css';
import strings from '../../navigationStrings.json';
import ButtonNavigate from '../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import BackButtonNavigate from '../../components/Navigation/Buttons/BackButton/backButtonNavigate';

import Extrovert_puzzle from '../../Images/ChangeYourColor/Extrovert_puzzle.png';
import Extrovert_puzzle_selected from '../../Images/ChangeYourColor/Extrovert_puzzle_selected.png';
import Introvert_puzzle from '../../Images/ChangeYourColor/Introvert_puzzle.png';
import Introvert_puzzle_selected from '../../Images/ChangeYourColor/Introvert_puzzle_selected.png';
import xImage from '../../Images/ChangeYourColor/x.svg';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';


//New images for stupid proof page
import Green_Orange from '../../Images/ChangeYourColor/Green_Orange.png';
import Green_Gold from '../../Images/ChangeYourColor/Green_Gold.png';
import Blue_Gold from '../../Images/ChangeYourColor/Blue_Gold.png';
import Blue_Orange from '../../Images/ChangeYourColor/Blue_Orange.png';
import Orange_Green from '../../Images/ChangeYourColor/Orange_Green.png';
import Orange_Blue from '../../Images/ChangeYourColor/Orange_Blue.png';
import Gold_Green from '../../Images/ChangeYourColor/Gold_Green.png';
import Gold_Blue from '../../Images/ChangeYourColor/Gold_Blue.png';

import useAsyncStorage from '../../components/AsyncStorage/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateMappingId } from '../../colorMapping';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';


const ConfirmPopup = ({visible, onCancel, onConfirm, selectedColor, firstHalf, secondHalf, selectedInteractionStyle}) => {
    if (!visible) return null;
    let colorImageSrc;
    switch (selectedColor) {
        case 'Green_Orange':
            colorImageSrc = Green_Orange;
            break;
        case 'Green_Gold':
            colorImageSrc = Green_Gold;
            break;
        case 'Blue_Gold':
            colorImageSrc = Blue_Gold;
            break;
        case 'Blue_Orange':
            colorImageSrc = Blue_Orange;
            break;
        case 'Orange_Green':
            colorImageSrc = Orange_Green;
            break;
        case 'Orange_Blue':
            colorImageSrc = Orange_Blue;
            break;
        case 'Gold_Green':
            colorImageSrc = Gold_Green;
            break;
        default:
            colorImageSrc = Gold_Blue; // Set a default or handle this case as needed
    }
    let interactionStyleText;
    if (selectedInteractionStyle === 'Extrovert_puzzle') {
        interactionStyleText = 'Extrovert';
    } else if (selectedInteractionStyle === 'Introvert_puzzle') {
        interactionStyleText = 'Introvert';
    }


    return (
        <div className="confirm-popup-overlay">
            <div className="confirm-popup">

            <div className="cancel-button" onClick={onCancel} >
                <img src={xImage} alt="exit" className='cancel-buttonp' />
            </div>
                <p className="colorworks-instruction-text">Do you agree with your new color assignment?</p>
                <div className="interaction-choice-container">
                    <img src={selectedInteractionStyle === 'Extrovert_puzzle' ? Extrovert_puzzle_selected : Introvert_puzzle_selected} alt="interaction style" />
                </div>
                <div className="color-choice-container">
                    <img src={colorImageSrc} alt="logo"></img>
                </div>
                <div className="confirm-popup-information-text">
                    Interaction style: {interactionStyleText}
                </div>
                <div className="confirm-popup-information-text">
                    Primary Color: {firstHalf}
                </div>
                <div className="confirm-popup-information-text">
                    Secondary Color: {secondHalf}
                </div>
                <div className="confirm-pop-button-container">
                    <ButtonNavigate buttonText="Confirm" to ={strings.changeYourColorsPage} onClick={onConfirm} disabled={false}></ButtonNavigate>
                </div>
            </div>
        </div>
    )
}

const ChangeYourColorsPageTwo = () => {   
    const navigation = useNavigation(); // Get the navigation object

    const [showPopup, setShowPopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);   //state to track selected color
    const [selectedInteractionStyle, setselectedInteractionStyle] = useState(null);
    const [firstHalf, setFirstHalf] = useState(null);
    const [secondHalf, setSecondHalf] = useState(null);
    const [email] = useAsyncStorage('email');
    const [error, setErrorMessage] = useState('');

    const resetState = () => {
        window.scrollTo(0, 0);
    };
    
    useFocusEffect(
        React.useCallback(() => {
            resetState();
            return () => {};
        }, [])
    );

    const handleColorSelect = (color) => {
        setSelectedColor(color); // Update the selected color
        switch (color) {
            case 'Green_Orange':
                setFirstHalf('Green');
                setSecondHalf('Orange');
                break;
            case 'Green_Gold':
                setFirstHalf('Green');
                setSecondHalf('Gold');
                break;
            case 'Blue_Gold':
                setFirstHalf('Blue');
                setSecondHalf('Gold');
                break;
            case 'Blue_Orange':
                setFirstHalf('Blue');
                setSecondHalf('Orange');
                break;
            case 'Orange_Green':
                setFirstHalf('Orange');
                setSecondHalf('Green');
                break;
            case 'Orange_Blue':
                setFirstHalf('Orange');
                setSecondHalf('Blue');
                break;
            case 'Gold_Green':
                setFirstHalf('Gold');
                setSecondHalf('Green');
                break;
            case 'Gold_Blue':
                setFirstHalf('Gold');
                setSecondHalf('Blue');
                break;
            default:
                setFirstHalf(null); // Reset firstHalf
                setSecondHalf(null); // Reset secondHalf
                break;
        }
    };

    const handleInteractionSelect = (interaction) => {
        setselectedInteractionStyle(interaction); // Update the selected interaction style
    };

    const handleBothSelected = () => {
        if(selectedColor && selectedInteractionStyle){
            setShowPopup(true);
        }
        else{
            setShowPopup(false);
        }
    }

    const updateAllAccountsInLocalStorage = async (mappingId) => {
        try {
            const response = await fetch('http://165.227.112.131:8080/api/allAccounts', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }), //sends email and passwordto backend
                });
      
            if (response.ok) {
              const userData = await response.json();
              
              await AsyncStorage.setItem('mappingId', mappingId);
              // Store userData in local storage
              await AsyncStorage.setItem('userData', JSON.stringify(userData));
              
              console.log('User-specific data retrieved and stored successfully');
            } else {
              console.error('Failed to fetch user-specific data from /api/loginAccounts');
            }

            //TODO: ADD NOTIFICATION OF SUCCESSFUL COLOR CHANGE
      
          } catch (error) {
            console.error('Error during login:', error);
          }
    }

    const handleConfirm = async () => {
        if(selectedColor && selectedInteractionStyle){
            let interactionStyle 
            if (selectedInteractionStyle === 'Extrovert_puzzle') {
                interactionStyle = 'Extrovert';
            } else if (selectedInteractionStyle === 'Introvert_puzzle') {
                interactionStyle = 'Introvert';
            }
            const mappingId = generateMappingId(firstHalf, secondHalf, interactionStyle);
            setShowPopup(false); //Close pop-up after confirming
            try {
                const response = await fetch('http://165.227.112.131:8080/api/changeColors', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: email,
                    mappingId: mappingId
                    }),
                });
      
                const data = await response.json();
                if (response.status === 200){  // to get working responses, set the following: username->cb email->cb@iastate.edu password->pass pin->1234
                    updateAllAccountsInLocalStorage(data.mappingId);
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
        {showPopup && <div className="overlay"></div>}
            <div className= {`CYCP-two-whole-page-container ${showPopup ? 'blur' : ''}`}>
                {/*Back arrow + intro paragraph*/}
                <div className="CYCP-two-page-back-button-container">
                    <BackButtonNavigate to={strings.changeYourColorsPage}/>
                </div>
                <ColorWorksText type={'instruction'} inputText={'You will need to select your first color, second color, and interaction style then confirm the changes'}></ColorWorksText>

                {/*Circled instructions*/}
                <div className="CYCP-text-frame-container" >
                    <div className="colorworks-instruction-text">
                        Select your new color pairing
                    </div>
                </div>

                {/*List of color changing option images*/}     
                <div className='CYCP-grid-container-colors'>
                    <div className={`CYCP-grid-item ${selectedColor === 'Green_Orange' ? 'selected' : ''}`} onClick={() => handleColorSelect('Green_Orange')}><img src={Green_Orange} alt="logo"></img></div>
                    <div className={`CYCP-grid-item ${selectedColor === 'Green_Gold' ? 'selected' : ''}`} onClick={() => handleColorSelect('Green_Gold')}><img src={Green_Gold} alt="logo"></img></div>
                    <div className={`CYCP-grid-item ${selectedColor === 'Blue_Gold' ? 'selected' : ''}`} onClick={() => handleColorSelect('Blue_Gold')}><img src={Blue_Gold} alt="logo"></img></div>
                    <div className={`CYCP-grid-item ${selectedColor === 'Blue_Orange' ? 'selected' : ''}`} onClick={() => handleColorSelect('Blue_Orange')}><img src={Blue_Orange} alt="logo"></img></div>
                    <div className={`CYCP-grid-item ${selectedColor === 'Orange_Green' ? 'selected' : ''}`} onClick={() => handleColorSelect('Orange_Green')}><img src={Orange_Green} alt="logo"></img></div>
                    <div className={`CYCP-grid-item ${selectedColor === 'Orange_Blue' ? 'selected' : ''}`} onClick={() => handleColorSelect('Orange_Blue')}><img src={Orange_Blue} alt="logo"></img></div>
                    <div className={`CYCP-grid-item ${selectedColor === 'Gold_Green' ? 'selected' : ''}`} onClick={() => handleColorSelect('Gold_Green')}><img src={Gold_Green} alt="logo"></img></div>
                    <div className={`CYCP-grid-item ${selectedColor === 'Gold_Blue' ? 'selected' : ''}`} onClick={() => handleColorSelect('Gold_Blue')}><img src={Gold_Blue} alt="logo"></img></div>
                </div>
                <br></br>

                {/*Interaction style + their table*/}
                <div className="CYCP-text-frame-container" >
                    <div className="colorworks-instruction-text">
                        Select your interaction style
                    </div>
                </div>
                <br></br>
                
                {/*grid for interaction styles*/}
                <div class="reuse-grid-container-two">
                    <div class={`grid-item-other ${selectedInteractionStyle === 'Extrovert_puzzle' ? 'grid-item-other-selected' : ''}`} onClick={() => handleInteractionSelect('Extrovert_puzzle')} style={{padding:'5%'}}><img src={Extrovert_puzzle} alt="logo" /></div>
                    <div class={`grid-item-other ${selectedInteractionStyle === 'Introvert_puzzle' ? 'grid-item-other-selected' : ''}`} onClick={() => handleInteractionSelect('Introvert_puzzle')} style={{padding:'9%'}}><img src={Introvert_puzzle} alt="logo" /></div>
                    <div class="grid-item-other" style={{padding: '0%', marginLeft:'30px'}}><div className='colorworks-information-text'>Extrovert</div></div>
                    <div class="grid-item-other" style={{padding: '0%', marginLeft:'22px'}}><div className='colorworks-information-text'>Introvert</div></div>
                </div>

                <div className="CYCP-confirm-button-container">
                    <ButtonNavigate buttonText="Confirm" onClick={() => handleBothSelected()}></ButtonNavigate>
                </div>
                
            </div>
                       
            <ConfirmPopup visible={showPopup} onCancel={() => setShowPopup(false)} onConfirm={handleConfirm} selectedColor={selectedColor} selectedInteractionStyle={selectedInteractionStyle} firstHalf={firstHalf} secondHalf={secondHalf}/>

      </>
            
    );
  };

export default ChangeYourColorsPageTwo;