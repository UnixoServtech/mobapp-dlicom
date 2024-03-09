/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    headerStyle: {
      height: theme.normalize(64),
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      height: theme.sizes.image.xl5,
      width: theme.sizes.image.xl5,
      borderRadius: theme.sizes.image.xl5 / 2,
    },
  });
