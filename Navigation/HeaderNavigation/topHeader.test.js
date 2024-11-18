import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TopHeader from './topHeader'; 

// Mock dependencies
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('../../navigationStrings.json', () => ({
  settings: 'SettingsScreen',
}));
jest.mock('./images/CWlonglogo.png', () => 'mockedImage');
jest.mock('./images/paragraph 1.png', () => 'mockedImage');
jest.mock('./images/setting 1.png', () => 'mockedImage');

//test 1
describe('TopHeader', () => {
  it('renders logo, side menu, and settings icon', () => {
    const { getByTestId } = render(<TopHeader />);
    expect(getByTestId('logo')).toBeInTheDocument();
    expect(getByTestId('side-menu-icon')).toBeInTheDocument();
    expect(getByTestId('settings-icon')).toBeInTheDocument();
  });

  //test 2
  it('navigates to the settings page when the settings icon is clicked', async () => {
    const { getByTestId } = render(<TopHeader />);
    const settingsIcon = getByTestId('settings-icon');
    fireEvent.click(settingsIcon);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('SettingsScreen');
    });
  });
});

  //test 3
  //currently not working
  //determine to keep or delete
//   it('toggles side menu when the menu icon is clicked', async () => {
//     const { getByTestId, queryByTestId } = render(<TopHeader />);
//     const menuIcon = getByTestId('side-menu-icon');
//     fireEvent.click(menuIcon); 

//     await waitFor(() => {
//       expect(queryByTestId('side-menu')).toBeInTheDocument();
//     });
//   });