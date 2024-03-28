/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    icon: {
      width: theme.sizes.image.xl4,
      height: theme.sizes.image.xl4,
      borderRadius: theme.sizes.image.xl4 / 2,
    },
  });
