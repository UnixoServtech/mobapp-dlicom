/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    text: {
      color: colors.text,
      marginVertical: 2,
      fontSize: 14,
    },
    wrapper: {
      height: theme.normalize(35),
      backgroundColor: colors?.searchView?.backgroundColor,
      borderRadius: theme.normalize(8),
      paddingHorizontal: theme.normalize(8),
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputText: {
      fontSize: theme.typography.fontSizes.md,
      color: colors?.text,
      lineHeight: theme.typography.lineHeights.sm,
      flex: 1,
      includeFontPadding: false,
      padding: 0,
      margin: 0,
      paddingHorizontal: theme.normalize(8),
      ...theme.typography.fontStyles.interRegular,
    },
  });
