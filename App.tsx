/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';


import { Dimensions, useColorScheme, View} from 'react-native';

import Home from './src/screens/home.main';
import { StatusBar,Text } from 'react-native';
import { horizontalScale, moderateScale, verticalScale }  from './theme/theme.metrics'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/navigation';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
 


  return (
    <View className={`flex-1 justify-center items-center  h-${verticalScale(70) } w-${horizontalScale(150)} text-${moderateScale(24)} `}>
      <NavigationContainer>
        {/* <StatusBar />
        <Home /> */}
        <Navigation/>
      </NavigationContainer>
    </View>
  );
}
export default App;
