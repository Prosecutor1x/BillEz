import {View, Text} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home.main';
import Onboarding from '../screens/onboarding.main';


const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <View>
       <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </View>
  );
};

export default Navigation;
