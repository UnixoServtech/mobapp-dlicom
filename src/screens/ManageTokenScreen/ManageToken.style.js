/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    searchWrapper: {
      flexDirection: 'row',
      paddingHorizontal: theme.sizes.spacing.ph,
      alignItems: 'center',
    },
    searchStyle: {flex: 1, marginRight: theme.normalize(15)},
    avatar: {
      height: theme.sizes.image.xl4,
      width: theme.sizes.image.xl4,
      borderRadius: theme.sizes.image.xl4 / 2,
    },
    modal: {
      margin: 0,
      width: '100%',
    },
    viewWrapper: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    viewContainer: {
      width: '100%',
      backgroundColor: '#141414',
      borderRadius: 16,
    },
  });
