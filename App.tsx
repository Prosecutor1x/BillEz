/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import { useColorScheme} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/navigation';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
 


  return (
   
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
   
  );
}
export default App;
