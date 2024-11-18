import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideMenu from './SideMenu';
import '@testing-library/jest-dom';

// Mock the navigation and strings object
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('../../navigationStrings.json', () => ({
  homePage: 'Home',
  accountProfilePage: 'Profile',
  allColorsPage: 'All Colors',
  interactionStyles: 'Interaction Styles',
  changeYourColorsPage: 'Change Your Colors',
  planManagement: 'Membership',
  aboutUs: 'About Us',
  howToGuidePage: 'How-To Guide',
  settings: 'Settings',
  // Add other keys as necessary for your tests
}));

describe('SideMenu', () => {
  //test 1
  it('renders all menu items when the menu is open', () => {
    const { getByTestId } = render(<SideMenu isOpen={true} />);

    expect(getByTestId('home-icon')).toBeInTheDocument();
    expect(getByTestId('profile-icon')).toBeInTheDocument();
    expect(getByTestId('colors-icon')).toBeInTheDocument();
    expect(getByTestId('interaction-icon')).toBeInTheDocument();
    expect(getByTestId('change-colors-icon')).toBeInTheDocument();
    expect(getByTestId('membership-icon')).toBeInTheDocument();
    expect(getByTestId('about-us-icon')).toBeInTheDocument();
    expect(getByTestId('how-to-guide-icon')).toBeInTheDocument();
    expect(getByTestId('settings-icon')).toBeInTheDocument();
    expect(getByTestId('logout-icon')).toBeInTheDocument();
  });

  //test 2
  it('navigates to the correct page when a menu item is clicked', () => {
    const { getByTestId } = render(<SideMenu isOpen={true} />);

    fireEvent.click(getByTestId('home-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('Home');

    fireEvent.click(getByTestId('profile-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('Profile');
    
    // Add tests for other menu items as necessary
    fireEvent.click(getByTestId('colors-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('All Colors');

    fireEvent.click(getByTestId('interaction-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('Interaction Styles');

    fireEvent.click(getByTestId('change-colors-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('Change Your Colors');

    fireEvent.click(getByTestId('membership-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('Membership');

    fireEvent.click(getByTestId('about-us-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('About Us');

    fireEvent.click(getByTestId('how-to-guide-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('How-To Guide');

    fireEvent.click(getByTestId('settings-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('Settings');
  });

  //test
  //need to figure out how to implement tests for pop ups
//   it('shows the logout popup when the logout button is clicked', () => {
//     const { getByTestId, queryByTestId } = render(<SideMenu isOpen={true} />);

//     fireEvent.click(getByTestId('logout-icon'));
//     // Check if the logout popup is visible
//     expect(queryByTestId('logout-popup')).toBeInTheDocument();
//   });

  // Additional tests for the functionality of the logout popup can be added here
});