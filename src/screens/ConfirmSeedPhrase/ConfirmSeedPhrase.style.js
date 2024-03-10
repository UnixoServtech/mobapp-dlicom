/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },

    listWrapperStyle: {
      paddingTop: 24,
      paddingBottom: 8,
    },
    columStyle: {
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingBottom: 16,
    },
    itemStyle: {
      backgroundColor: '#191A1D',
      minHeight: 34,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      flex: 0.45,
      padding: 5,
    },
    seedPhraseWrapper: {
      borderWidth: 1,
      borderColor: '#171717',
      borderRadius: 8,
      paddingHorizontal: 4,
    },
    wrapper: {
      marginHorizontal: theme.sizes.spacing.ph,
      borderRadius: 8,
      maxHeight: '72%',
    },
    infoWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.sizes.spacing.ph,
      width: '90%',
      alignSelf: 'center',
      marginVertical: 28,
    },
    buttonWrapper: {
      margin: theme.sizes.spacing.ph,
      position: 'absolute',
      // top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
