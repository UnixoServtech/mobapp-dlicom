import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const commonColor = {
  white: '#ffffff',
  black: '#090909',
  splashBgColor: '#090909',
  mainColorDark: '#003239',
  mainColorSelected: '#202F33',
  primaryMainColor: '#23CBCA',
  gray: '#3A3A3A',
  gray1: '#606060',
};

export const colors = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...commonColor,
      primaryBg: '#FFF',
      text: commonColor.black,
      primaryMainColor: commonColor.primaryMainColor,
      headerActionText: commonColor.primaryMainColor,
      segment: {
        bg: '#E6E6E6',
        activeBg: commonColor.primaryMainColor,
        text: '#979C9E',
        activeText: commonColor.white,
      },
      caption: '#72777A',
      btnBg: commonColor.primaryMainColor,
      button: {
        primaryBg: commonColor.primaryMainColor,
        secondaryBg: '#00B0AF',
        disableBg: commonColor.gray,
        textDisable: commonColor.gray1,
      },
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DefaultTheme.colors,
      ...commonColor,
      primaryBg: '#0D0E0F',
      text: commonColor.white,
      primaryMainColor: commonColor.primaryMainColor,
      headerActionText: '#9990FF',
      segment: {
        bg: commonColor.gray,
        activeBg: commonColor.primaryMainColor,
        text: '#979C9E',
        activeText: commonColor.white,
      },
      caption: '#979C9E',
      btnBg: commonColor.primaryMainColor,
      button: {
        primaryBg: commonColor.primaryMainColor,
        secondaryBg: '#00B0AF',
        disableBg: commonColor.gray,
        textDisable: commonColor.gray1,
      },
    },
  },
};

export default colors;

// primary: '#212121',
// secondary: '#29434E',
// error: '#D32F2F',
// border: '#FFFFFF',
// activeTab: '#4FC3F7',
// inactiveTab: '#FFFFFF',
