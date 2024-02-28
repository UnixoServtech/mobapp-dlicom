import React, {useState, useMemo} from 'react';
import {LogBox} from 'react-native';
import API, {DevelopmentMode} from './src/networking';
import RootNavigator from './src/navigation/RootNavigator';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/';
import {apiConfig} from './env';
import {NativeBaseProvider} from 'native-base';
API.getInstance().build(DevelopmentMode.PRODUCTION, apiConfig);
const store = configureStore();
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NativeBaseProvider>
  );
}
