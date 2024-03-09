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
  });
