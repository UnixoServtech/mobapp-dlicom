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
      height: theme.normalize(40),
      backgroundColor: colors?.searchView?.backgroundColor,
      borderRadius: theme.normalize(8),
      paddingHorizontal: theme.normalize(8),
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputText: {
      fontSize: theme.typography.fontSizes.md,
      color: 'white',
      lineHeight: theme.typography.lineHeights.sm,
      paddingHorizontal: theme.normalize(8),
      flex: 1,
      ...theme.typography.fontStyles.interRegular,
    },
  });
