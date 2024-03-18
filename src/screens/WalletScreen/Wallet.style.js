import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    accountWrapper: {
      flexDirection: 'row',
      minHeight: theme.sizes.image.xl4,
      alignItems: 'center',
      maxWidth: '80%',
    },
    mainWrapper: {padding: theme.sizes.spacing.ph, paddingBottom: 0},
    smallAvatar: {
      height: theme.sizes.image.xl2,
      width: theme.sizes.image.xl2,
      borderRadius: theme.sizes.image.xl2 / 2,
    },
    tabWrapper: {
      marginTop: theme.normalize(30),
    },
  });
