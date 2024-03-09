import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {createLogger} from 'redux-logger';

const configureStore = () => {
  const middleware = [thunk];
  if (__DEV__) {
    const logger = createLogger();
    middleware.push(logger);
  }
  return createStore(reducer, applyMiddleware(...middleware));
};

export {configureStore};
