/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    content: {
      backgroundColor: '#141414',
      padding: theme.normalize(25),
      alignItems: 'center',
      borderRadius: 16,
      borderColor: 'rgba(255, 255, 255, 0.06)',
      borderWidth: 2,
    },
    contentTitle: {
      fontSize: 20,
      marginBottom: 12,
    },
    textContainer: {
      borderWidth: 0.5,
      padding: theme.normalize(8),
      flexDirection: 'row',
    },
    filterContainer: {
      height: theme.normalize(50),
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#D2D2D2',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      // alignSelf: 'flex-start',
      paddingHorizontal: 16,
    },
    qrWrapper: {
      height: theme.normalize(220),
      width: theme.normalize(220),
      borderRadius: theme.normalize(30),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    copyWrapper: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
    },
  });
