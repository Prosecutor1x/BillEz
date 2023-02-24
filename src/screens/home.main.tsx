import {Text, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';




function Home() {

  return (
    <View className='flex justify-center items-center'>
      <Text className=' text-red-600 text-4xl' >Hello from Home</Text>
      <Animatable.View animation={'zoomIn'}  delay={500}>
  
        </Animatable.View>
    </View>
  );
}
export default Home;
