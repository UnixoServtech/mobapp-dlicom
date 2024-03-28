/* eslint-disable no-undef */
import {Platform, StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    wrapper1: {
      borderWidth: 1,
      borderColor: colors?.borderColor,
      borderRadius: theme.normalize(10),
      flexDirection: 'row',
      flex: 1,
      padding: theme.normalize(12),
      alignItems: 'center',
    },
    icon: {
      width: theme.sizes.image.xl4,
      height: theme.sizes.image.xl4,
      borderRadius: theme.sizes.image.xl4 / 2,
    },
    wrapper2: {
      borderWidth: 1,
      borderColor: colors?.borderColor,
      borderRadius: theme.normalize(10),
      flex: 1,
      padding: theme.normalize(15),
    },
    gasWrapper: {
      flexDirection: 'row',
      flex: 0.5,
    },
    gasUnderLine: {
      paddingBottom: 1,
      borderBottomWidth: theme.normalize(2),
      borderColor: colors?.primaryMainColor,
    },
  });
