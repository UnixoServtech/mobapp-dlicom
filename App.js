import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {apiConfig} from './env';
import {Toast, toastConfig} from './src/components/Toast';
import RootNavigator from './src/navigation/RootNavigator';
import API, {DevelopmentMode} from './src/networking';
import {configureStore} from './src/redux/';
API.getInstance().build(DevelopmentMode.PRODUCTION, apiConfig);
const store = configureStore();
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
      <Toast config={toastConfig} position="bottom" />
    </NativeBaseProvider>
  );
}
