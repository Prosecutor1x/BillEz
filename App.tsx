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


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
 


  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar />
      <Home />
      <Text className='text-red-300 text-4xl'>Hii hello</Text>
    </View>
  );
}
export default App;
