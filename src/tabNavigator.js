import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Foundation';

import MusicInfo from './pages/MusicInfo';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Letra"
        activeColor="#f0edf6"
        inactiveColor='#4d5360'
        barStyle={{ backgroundColor: '#2a2d34' }}
    >
      <Tab.Screen options={{ 
          tabBarIcon: ({ color }) => (
            <Icon name="music" size={26} color={color} />
          ),
          tabBarLabel: 'Sobre a música'
       }} 
       name="Letra" 
       component={MusicInfo} 
    />
    </Tab.Navigator>
  );
}