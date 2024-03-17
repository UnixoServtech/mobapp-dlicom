/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
      padding: theme.sizes.spacing.ph,
    },
    wrapper: {
      borderRadius: 23,
      backgroundColor: colors?.semiTransparentBg,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.07)',
      width: '100%',
    },
    swapWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
    },
    swapRightWrapper: {
      flex: 0.45,
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    swapWrapperBtn: {
      height: theme.normalize(48),
      width: theme.normalize(48),
      borderRadius: theme.normalize(24),
      backgroundColor: colors?.swapModal?.accentColor,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: theme.normalize(25),
      bottom: theme.normalize(-24),
    },
  });
