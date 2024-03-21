import types from './types';

export const loadingSet = () => ({type: types.API_LOADING_START});

export const loadingUnset = () => ({type: types.API_LOADING_STOP});

export const defaultWallet = data => ({
  type: types.DEFAULT_WALLET,
  payload: data,
});

export const selectNewWallet = data => ({
  type: types.SELECTED_WALLET,
  payload: data,
});

export const addWallets = data => ({
  type: types.WALLETS,
  payload: data,
});
