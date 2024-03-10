import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    wrapper: {
      paddingHorizontal: theme.sizes.spacing.ph,
      marginTop: theme.sizes.spacing.pv,
      flex: 1,
    },
    headerStyle: {
      height: theme.normalize(64),
      justifyContent: 'center',
      alignItems: 'center',
    },
    seedPhraseWrapper: {
      flexDirection: 'row',
      backgroundColor: '#191A1D',
      borderWidth: 1,
      borderColor: '#27282B',
      borderRadius: theme.sizes.spacing.sm,
      marginTop: 25,
    },
    blurView: {
      width: 'auto',
      height: null,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderTopLeftRadius: theme.sizes.spacing.sm,
      borderBottomLeftRadius: theme.sizes.spacing.sm,
    },
    seedPhraseWrapper1: {flex: 0.85, padding: 12},
  });
