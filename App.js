import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <View>
      <Text> App </Text>
    </View>
  );
};

export default App;
