/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import * as Animatable from 'react-native-animatable';

import {
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Home from './src/screens/home.main';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

 
  


  return (
    <View className="flex-1 justify-center items-center">
      <Animatable.Text animation="slideInDown" iterationCount={50} direction="alternate" >Welcome to BillEz</Animatable.Text>
      <Text className="text-green-300" > ITS ME NUNUBHAB MALAKAR</Text>
      <Home/>
    </View>
  );
}
export default App;
