import {
  CommonActions,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const navigateAndSimpleReset = (name, index = 0) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name}],
    }),
  );
};

export const navigateAndSimpleResetWithParam = (name, index = 0, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name: name, params: params}],
    }),
  );
};

export const getParams = () => {
  return useRoute().params;
};

export const currentScreenName = () => {
  return navigationRef.current?.getCurrentRoute().name;
};

export const usePreviousRouteName = () => {
  return useNavigationState(state =>
    state.routes[state.index - 1]?.name
      ? state.routes[state.index - 1].name
      : 'None',
  );
};
