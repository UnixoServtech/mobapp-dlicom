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
      flex: 1,
      padding: theme.sizes.spacing.ph,
    },
    textInput: {
      borderColor: colors.radio.disableBorderColor,
      borderRadius: theme.normalize(8),
      borderWidth: 1,
      color: colors.grayLight,
      lineHeight: theme.typography.lineHeights.xl2,
      fontSize: theme.typography.fontSizes.smm,
      maxHeight: theme.normalize(130),
      minHeight: theme.normalize(95),
      textAlignVertical: 'top',
      paddingTop: 15,
      paddingBottom: 15,
      paddingHorizontal: 15,
      ...theme.typography.fontStyles.amikoBold,
    },
  });
