import types from './types';

export const loadingSet = () => ({type: types.API_LOADING_START});

export const loadingUnset = () => ({type: types.API_LOADING_STOP});

export const noInternetConnected = isConnected => ({
  type: types.IS_INTERNET_CONNECTED,
  payload: isConnected,
});

export const updateShowNetworkModal = showModal => ({
  type: types.UPDATE_SHOW_NET_WORK_MODAL,
  payload: showModal,
});

const onError = data => ({type: types.ON_ERROR_RECEIVED, payload: data});

export const userDetail = userData => ({
  type: types.USER_DETAIL,
  payload: userData,
});

export const userProfile = userData => ({
  type: types.USER_PROFILE,
  payload: userData,
});

export const changeColorTheme = value => ({
  type: types.CHANGE_COLOR_THEME,
  payload: value,
});
