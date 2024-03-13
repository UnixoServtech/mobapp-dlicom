import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    avatar: {
      height: theme.sizes.image.xl4,
      width: theme.sizes.image.xl4,
      borderRadius: theme.sizes.image.xl4 / 2,
    },
    avatarWrapper: {
      height: theme.sizes.image.xl5,
      width: theme.sizes.image.xl5,
      borderRadius: theme.sizes.image.xl5 / 2,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerWrapper: {
      height: theme.normalize(80),
      padding: theme.normalize(15),
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconStyle: {height: theme.sizes.image.xl3, width: theme.sizes.image.xl3},
    textWrapper: {
      flex: 1,
      marginHorizontal: theme.normalize(12),
    },
    headerMainWrapper: {
      borderBottomWidth: 1,
      borderColor: '#313131',
    },
    tabWrapper: {
      paddingHorizontal: theme.sizes.spacing.ph,
      marginTop: theme.normalize(5),
    },
  });
