import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Routes from './src/routes';

function App () {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
      <Routes />
    </>
  );
};


export default App;
