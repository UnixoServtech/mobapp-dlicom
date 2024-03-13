/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primaryBg,
    },
    storyWrapper: {
      height: theme.sizes.image.xl9,
      width: theme.sizes.image.xl9,
      borderRadius: theme.sizes.image.xl9 / 2,
      borderWidth: 1.4,
      borderColor: '#3BE981',
      justifyContent: 'center',
      alignItems: 'center',
    },
    storyAvatar: {
      height: theme.sizes.image.xl6 - 3,
      width: theme.sizes.image.xl6 - 3,
      borderRadius: theme.sizes.image.xl6 / 2,
    },
    storyMainWrapper: {
      marginRight: theme.normalize(16),
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: theme.normalize(130),
    },
    avatar: {
      height: theme.sizes.image.xl4,
      width: theme.sizes.image.xl4,
      borderRadius: theme.sizes.xl4 / 2,
    },
  });
