import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {LogBox} from 'react-native';
import {SplashScreen} from './src/screens';
import API, {DevelopmentMode} from './src/networking';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <View>
      <SplashScreen />
    </View>
  );
};

export default App;
