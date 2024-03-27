import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {apiConfig} from './env';
import {Toast, toastConfig} from './src/components/Toast';
import RootNavigator from './src/navigation/RootNavigator';
import API, {DevelopmentMode} from './src/networking';
import {configureStore} from './src/redux/';
import {PersistGate} from 'redux-persist/integration/react';
import RNScreenshotPrevent from 'react-native-screenshot-prevent';

API.getInstance().build(DevelopmentMode.PRODUCTION, apiConfig);
const store = configureStore().store;
const persistor = configureStore().persistor;
LogBox.ignoreAllLogs(true);

RNScreenshotPrevent.enabled(true);

if (!__DEV__) {
  RNScreenshotPrevent.enableSecureView();
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} position="bottom" />
    </NativeBaseProvider>
  );
}
