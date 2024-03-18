/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../../theme';

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
      height: theme.sizes.image.xl6,
      width: theme.sizes.image.xl6,
      borderRadius: theme.sizes.image.xl6 / 2,
    },
    statusStyle: isActive => ({
      height: theme.sizes.icons.lg,
      width: theme.sizes.icons.lg,
      borderRadius: theme.sizes.icons.lg / 2,
      backgroundColor: isActive ? 'yellow' : 'gray',
      borderWidth: 2,
      borderColor: 'white',
      position: 'absolute',
      right: 3,
      bottom: -4,
    }),
    textWrapper: isActive => ({
      height: theme.normalize(32),
      justifyContent: 'center',
      backgroundColor: isActive ? colors?.segment?.activeBg : '#ffffff00',
      borderRadius: theme.normalize(10),
      flex: 0.5,
      alignItems: 'center',
    }),
  });
