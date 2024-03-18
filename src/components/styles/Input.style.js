/* eslint-disable no-undef */
import {Platform, StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    optionalLabelContainerStyles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      alignSelf: 'flex-start',
      marginBottom: theme.normalize(8),
    },
    optionalLabelStyles: {
      marginBottom: theme.normalize(8),
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 50,
      borderRadius: theme.sizes.borderRadius,
      borderColor: '#303437',
      borderWidth: 1,
      paddingHorizontal: 15,
      backgroundColor: colors.black2,
    },
    input: {
      flex: 1,
      width: '80%',
      paddingRight: 5,
      color: colors?.textInput?.text,
      fontSize: theme.typography.fontSizes.md,
      ...theme.typography.fontStyles.interRegular,
      //   top: Platform.OS === 'android' ? 0.8 : 0,
      //   textAlignVertical: 'bottom',
    },
    searchIconStyle: {
      marginLeft: theme.normalize(5),
    },
    leftIcnStyle: {
      marginRight: theme.normalize(5),
    },
    errorMsg: {
      alignSelf: 'flex-start',
      marginTop: 4,
    },
  });
