import React from 'react';
import {Text, View} from 'react-native';
import theme from '../../theme';

const SplashComponent = ({params}) => {
  let theme1 = {mode: 'dark'};
  let activeTheme = theme.colors[theme1.mode];
  return (
    <View>
      <Text style={{color: activeTheme.activeTab}}>Splash Screen</Text>
    </View>
  );
};

export default SplashComponent;
