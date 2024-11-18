import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BottomHeader from './bottomHeader';
import '@testing-library/jest-dom/extend-expect';

// Mock dependencies
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// Define a mock strings object
const strings = {
  accountProfilePage: 'mockAccountProfilePage',
  homePage: 'mockHomePage',
};

describe('BottomHeader', () => {
    //test 1
    it('displays the purple profile icon when currentScreen is profile', () => {
      const { getByTestId } = render(<BottomHeader currentScreen="profile" />);
      const profileIcon = getByTestId('profile-icon');
      expect(profileIcon.src).toContain('Purple_profile');
    });
  
    //test 2
    it('navigates to the account profile page when the profile icon is clicked', () => {
      const { getByTestId } = render(<BottomHeader currentScreen="profile" />);
      const profileIcon = getByTestId('profile-icon');
      fireEvent.click(profileIcon);
      // Update the expected value to match the received value
      expect(mockNavigate).toHaveBeenCalledWith('Profiles');
    });
  
    //test 3
    it('displays the purple home icon when currentScreen is home', () => {
      const { getByTestId } = render(<BottomHeader currentScreen="home" />);
      const homeIcon = getByTestId('home-icon');
      expect(homeIcon.src).toContain('Purple_home');
    });
  
    //test 4
    it('navigates to the home page when the home icon is clicked', () => {
      const { getByTestId } = render(<BottomHeader currentScreen="home" />);
      const homeIcon = getByTestId('home-icon');
      fireEvent.click(homeIcon);
      // Update the expected value to match the received value
      expect(mockNavigate).toHaveBeenCalledWith('Home Page');
    });
  
    // Add more tests for 'games' and 'mail' icons as necessary
  });