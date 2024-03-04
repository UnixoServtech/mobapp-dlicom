import React from 'react';
import Toast, {
  ToastProps,
  BaseToast,
  SuccessToast,
  ErrorToast,
  InfoToast,
  BaseToastProps,
  ToastPosition,
} from 'react-native-toast-message';
import {Platform, Dimensions} from 'react-native';
import theme from '../theme';
import {useTheme} from '@react-navigation/native';
const {colors} = useTheme();

const width = Dimensions.get('window').width;
/* istanbul ignore next */
const baseStyles = {
  borderRadius: 8,
  backgroundColor: theme.colors.dark.colors?.toast.background,
  borderWidth: 0,
  borderLeftWidth: 0,
};

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={baseStyles}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={[
        theme.typography.fontStyles.interRegular,
        {
          fontSize: theme.typography.fontSizes.md,
          color: theme.colors.dark.colors?.toast?.text1,
        },
      ]}
      text2Style={[
        theme.typography.fontStyles.interRegular,
        {
          fontSize: theme.typography.fontSizes.sm,
          color: theme.colors.dark.colors?.toast?.text2,
        },
      ]}
    />
  ),
};

export {
  Toast,
  toastConfig,
  BaseToast,
  SuccessToast,
  ErrorToast,
  InfoToast,
  ToastProps,
  BaseToastProps,
  ToastPosition,
};
