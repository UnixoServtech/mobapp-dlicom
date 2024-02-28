import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default createStyles = colors =>
  StyleSheet.create({
    text: {
      color: colors.text,
      marginVertical: 2,
      fontSize: 14,
    },
    largeHeader: {
      fontFamily: theme.typography.fonts.interSemiBold,
      color: colors.text,
      fontSize: theme.typography.fontSizes['xl2'],
      fontWeight: theme.typography.fontWeights.semibold,
    },
    bodyTitle: {
      fontFamily: theme.typography.fonts.interSemiBold,
      color: colors.text,
      fontSize: theme.typography.fontSizes.md,
      fontWeight: theme.typography.fontWeights.semibold,
    },
    bodyText: {
      fontFamily: theme.typography.fonts.interRegular,
      color: colors.text,
      fontWeight: theme.typography.fontWeights.normal,
      fontSize: theme.typography.fontSizes.md,
    },
    helperTextBold: {
      fontFamily: theme.typography.fonts.interSemiBold,
      color: colors.text,
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.semibold,
    },
    helperText: {
      fontFamily: theme.typography.fonts.interRegular,
      color: colors.text,
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.normal,
    },
    deviceHeader: {
      fontFamily: theme.typography.fonts.in,
      color: colors.text,
      fontSize: theme.typography.fontSizes.xl,
      fontWeight: theme.typography.fontWeights.medium,
    },
    tinyLabelBold: {
      fontFamily: theme.typography.fonts.interBold,
      color: colors.caption,
      fontSize: theme.typography.fontSizes.xs2,
      fontWeight: theme.typography.fontWeights.semibold,
    },
    tinyLabel: {
      fontFamily: theme.typography.fonts.interRegular,
      color: colors.caption,
      fontSize: theme.typography.fontSizes.xs2,
      fontWeight: theme.typography.fontWeights.normal,
    },
    interMedium: {
      fontFamily: theme.typography.fonts.interMedium,
      fontWeight: theme.typography.fontWeights.medium,
    },
    button: {
      fontFamily: theme.typography.fonts.interMedium,
      fontSize: theme.typography.fontSizes['md'],
      fontWeight: theme.typography.fontWeights.medium,
      color: colors.white,
    },
  });
