/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    avatar: {
      height: theme.normalize(40),
      width: theme.normalize(40),
      borderRadius: theme.normalize(20),
    },
  });
