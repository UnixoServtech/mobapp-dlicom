import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'; // AsyncStorage for React Native

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // AsyncStorage for React Native
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = () => {
  const middleware = [thunk];
  if (__DEV__) {
    const logger = createLogger();
    middleware.push(logger);
  }
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  return {store, persistor};
};

export {configureStore};
