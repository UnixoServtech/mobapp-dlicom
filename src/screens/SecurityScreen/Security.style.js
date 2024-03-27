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
    wrapper: {
      padding: theme.sizes.spacing.ph,
    },
    textInput: {
      borderColor: colors.radio.disableBorderColor,
      borderRadius: theme.normalize(8),
      borderWidth: 1,
      color: colors.grayLight,
      fontSize: theme.typography.fontSizes.smm,
      maxHeight: theme.normalize(48),
      minHeight: theme.normalize(48),
      textAlignVertical: 'top',
      paddingTop: 15,
      paddingBottom: 15,
      paddingHorizontal: 15,
      ...theme.typography.fontStyles.amikoBold,
    },
  });
