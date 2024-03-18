/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
  });
