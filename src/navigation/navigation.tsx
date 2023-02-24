import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home.main';
import Onboarding from '../screens/onboarding.main';
import {NavigationContainer} from '@react-navigation/native';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Onboarding" component={Onboarding}  />
      <Stack.Screen name="Home" component={Home}  />
    </Stack.Navigator>
  );
};

export default Navigation;
