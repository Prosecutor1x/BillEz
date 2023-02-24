/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Dimensions, useColorScheme, View} from 'react-native';

import Home from './src/screens/home.main';
import {StatusBar, Text} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './theme/theme.metrics';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      
        <Navigation />
   
    </NavigationContainer>
  );
}
export default App;
