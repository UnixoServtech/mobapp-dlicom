import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast,
  ToastPosition,
  ToastProps,
} from 'react-native-toast-message';
import theme from '../theme';
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
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast,
  Toast,
  ToastPosition,
  ToastProps,
  toastConfig,
};
