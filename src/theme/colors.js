import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const commonColor = {
  white: '#ffffff',
  black: '#080808',
  splashBgColor: '#090909',
  mainColorDark: '#003239',
  mainColorSelected: '#202F33',
  primaryMainColor: '#23CBCA',
  gray: '#3A3A3A',
  gray1: '#606060',
  grayLight: '#AAABAB',
  light: '#E6E6E6',
  red: '#FF5252',
  green: '#979C9E',
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
        bg: commonColor.light,
        activeBg: commonColor.primaryMainColor,
        text: commonColor.green,
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
      headerBg: commonColor.white,
      headerBorder: '#313131',
      radio: {
        borderColor: '#CDCFD0',
        disableBorderColor: '#E3E5E5',
        background: commonColor.primaryMainColor,
        disableBackground: '#E3E5E5',
        disableInnerBg: '#F2F4F5',
      },
      listItem: {
        date: '#9C9C9C',
        link: commonColor.gray1,
        bodyText: commonColor.green,
        tittleText: commonColor.black,
      },
      toast: {
        background: commonColor.black,
        text1: commonColor.white,
        text2: commonColor.green,
      },
      searchView: {
        backgroundColor: commonColor.light,
        placeHolderColor: commonColor.gray1,
        color: commonColor.black,
      },
      actionSheet: {
        textColor: commonColor.black,
        buttonColor: commonColor.green,
        borderColor: '#F2F4F5',
        backgroundColor: commonColor.white,
      },
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DefaultTheme.colors,
      ...commonColor,
      primaryBg: '#080808',
      text: commonColor.white,
      primaryMainColor: commonColor.primaryMainColor,
      headerActionText: '#9990FF',
      segment: {
        bg: '#161819',
        activeBg: commonColor.primaryMainColor,
        text: commonColor.green,
        activeText: commonColor.white,
      },
      caption: commonColor.green,
      btnBg: commonColor.primaryMainColor,
      button: {
        primaryBg: commonColor.primaryMainColor,
        secondaryBg: '#00B0AF',
        disableBg: commonColor.gray,
        textDisable: commonColor.gray1,
      },
      headerBg: commonColor.black,
      headerBorder: '#313131',
      radio: {
        borderColor: '#6C7072',
        disableBorderColor: '#303437',
        background: commonColor.primaryMainColor,
        disableBackground: '#202325',
        disableInnerBg: '#303437',
      },
      listItem: {
        date: '#9C9C9C',
        link: commonColor.gray1,
        bodyText: commonColor.green,
        tittleText: commonColor.white,
        amount: commonColor.primaryMainColor,
        border: '#393939',
      },
      toast: {
        background: commonColor.primaryMainColor,
        text1: commonColor.white,
        text2: commonColor.light,
      },
      searchView: {
        backgroundColor: '#1E1E1E',
        placeHolderColor: commonColor.green,
        color: commonColor.white,
      },
      actionSheet: {
        textColor: commonColor.primaryMainColor,
        buttonColor: '#6C7072',
        borderColor: '#303437',
        backgroundColor: '#141414',
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
