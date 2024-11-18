import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = (key) => {
  const [value, setValue] = useState(null);

  // Function to retrieve data from AsyncStorage
  const getData = async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      setValue(storedValue);
    } catch (error) {
      console.error('Error getting data from AsyncStorage:', error);
    }
  };

  // Call getData function when the component mounts
  useEffect(() => {
    getData();
  }, [key]); // Re-run useEffect whenever the key changes

  // Function to set data in AsyncStorage
  const setData = async (newValue) => {
    try {
      await AsyncStorage.setItem(key, newValue);
      setValue(newValue);
    } catch (error) {
      console.error('Error setting data in AsyncStorage:', error);
    }
  };

  return [value, setData];
};

export default useAsyncStorage;
