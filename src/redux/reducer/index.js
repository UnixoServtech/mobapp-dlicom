import {combineReducers} from 'redux';
import global from './global';
import userWallets from './userWallets';

const rootReducer = combineReducers({
  global,
  userWallets,
});

export default rootReducer;
