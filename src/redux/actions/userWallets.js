import types from './types';

export const loadingSet = () => ({type: types.API_LOADING_START});

export const loadingUnset = () => ({type: types.API_LOADING_STOP});

export const importNewWallet = data => ({
  type: types.IMPORT_NEW_WALLET,
  payload: data,
});
