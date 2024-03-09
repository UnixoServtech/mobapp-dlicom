/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    wrapper: {
      padding: theme.sizes.spacing.ph,
    },
    textInput: {
      borderColor: colors.radio.disableBorderColor,
      borderRadius: theme.normalize(8),
      borderWidth: 1,
      color: colors.grayLight,
      padding: 15,
      lineHeight: theme.typography.lineHeights.xl2,
      fontSize: theme.typography.fontSizes.smm,
      maxHeight: theme.normalize(130),
      ...theme.typography.fontStyles.amikoBold,
    },
  });
