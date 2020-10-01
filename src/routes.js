// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import MusicSearchResult from './pages/MusicSearchResult';
import MusicInfo from './pages/MusicInfo';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
          headerShown: false, 
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MusicSearchResult" component={MusicSearchResult} />
        <Stack.Screen name="MusicInfo" component={MusicInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;