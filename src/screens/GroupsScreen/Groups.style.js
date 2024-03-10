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
    itemWrapper: {
      backgroundColor: '#191A1D',
      borderRadius: theme.normalize(14),
      paddingVertical: theme.normalize(15),
      paddingHorizontal: theme.normalize(25),
    },
    buttonWrapper: {margin: theme.sizes.spacing.ph, marginTop: 0},
  });
