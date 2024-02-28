import React from 'react';
import {Text as IText} from 'react-native';
import {
  computeFontFamily,
  computeFontSize,
  computeFontWeight,
  computeColor,
  computeFontLineHeight,
} from './helper';
import {theme} from '../theme';
import createStyles from './styles/Text.style';
import {useTheme} from '@react-navigation/native';

const getTextComputedStyles = (type, colors) => {
  let styles = createStyles(colors);
  if (type === 'large-header') {
    return styles.largeHeader;
  } else if (type === 'body-title') {
    return styles.bodyTitle;
  } else if (type === 'body-text') {
    return styles.bodyText;
  } else if (type === 'helper-text-bold') {
    return styles.helperTextBold;
  } else if (type === 'helper-text') {
    return styles.helperText;
  } else if (type === 'helper-text-medium') {
    return styles.helperMedium;
  } else if (type === 'device-header') {
    return styles.deviceHeader;
  } else if (type === 'tiny-label') {
    return styles.tinyLabel;
  } else if (type === 'tiny-label-bold') {
    return styles.tinyLabelBold;
  } else if (type === 'inter-medium') {
    return styles.interMedium;
  } else if (type === 'button') {
    return styles.button;
  } else {
    return styles.bodyText;
  }
};

const getAdditionalComputedStyles = (size, weight, color, fontFamily) => {
  let additionalStyles = {};
  if (size) {
    additionalStyles = {...additionalStyles, fontSize: size};
  }
  if (weight) {
    additionalStyles = {...additionalStyles, fontWeight: weight};
  }
  if (color) {
    additionalStyles = {...additionalStyles, color};
  }
  if (fontFamily) {
    additionalStyles = {...additionalStyles, fontFamily: fontFamily};
  }
  return additionalStyles;
};

const Text = ({
  color,
  size,
  weight,
  fontFamily,
  children,
  type,
  style,
  lineHeight,
  textAlign,
  margin,
  numberOfLines,
  amikoBold,
  amikoRegular,
  amikoSemiBold,
  archivoBold,
  archivoMedium,
  archivoRegular,
  archivoSemiBold,
  interBold,
  interLight,
  interRegular,
  interThin,
  poppinsBold,
  poppinsMedium,
  poppinsRegular,
  poppinsSemiBold,
  urbanistBold,
  urbanistSemiBold,
  netflixSansBold,
  netflixSansMedium,
  netflixSansRegular,
  ...rest
}) => {
  const {colors} = useTheme();
  const isValidJSX = React.isValidElement(children);
  const computedFontSize = computeFontSize(size);
  const computedFontFamily = computeFontFamily(fontFamily);
  const computedFontWeight = computeFontWeight(weight);
  const computeLineHeight = computeFontLineHeight(lineHeight);
  const computedStyles = getTextComputedStyles(type, colors);

  const defaultTextStyle = {
    fontFamily: computedFontFamily ?? theme.typography.fonts.interRegular,
    fontSize: computedFontSize ?? theme.typography.fontSizes.md,
    color: color ?? colors.text,
    fontWeight: computedFontWeight ?? undefined,
    lineHeight: computeLineHeight,
    textAlign: textAlign,
    margin: margin ?? 0,
  };

  const additionalComputedStyles = getAdditionalComputedStyles(
    computedFontSize,
    computedFontWeight,
    color,
    computedFontFamily,
  );

  return (
    <>
      {children && isValidJSX ? (
        children
      ) : children !== undefined &&
        children !== null &&
        (typeof children === 'string'
          ? children?.trim?.() !== ''
          : children !== '') ? (
        <IText
          {...rest}
          numberOfLines={numberOfLines}
          style={[
            defaultTextStyle,
            computedStyles,
            additionalComputedStyles,
            amikoBold && theme.typography.fontStyles.amikoBold,
            amikoRegular && theme.typography.fontStyles.amikoRegular,
            amikoSemiBold && theme.typography.fontStyles.amikoSemiBold,
            archivoBold && theme.typography.fontStyles.archivoBold,
            archivoMedium && theme.typography.fontStyles.archivoMedium,
            archivoRegular && theme.typography.fontStyles.archivoRegular,
            archivoSemiBold && theme.typography.fontStyles.archivoSemiBold,
            interBold && theme.typography.fontStyles.interBold,
            interLight && theme.typography.fontStyles.interLight,
            interRegular && theme.typography.fontStyles.interRegular,
            interThin && theme.typography.fontStyles.interThin,
            poppinsBold && theme.typography.fontStyles.poppinsBold,
            poppinsMedium && theme.typography.fontStyles.poppinsMedium,
            poppinsRegular && theme.typography.fontStyles.poppinsRegular,
            poppinsSemiBold && theme.typography.fontStyles.poppinsSemiBold,
            urbanistBold && theme.typography.fontStyles.urbanistBold,
            urbanistSemiBold && theme.typography.fontStyles.urbanistSemiBold,
            netflixSansBold && theme.typography.fontStyles.netflixSansBold,
            netflixSansMedium && theme.typography.fontStyles.netflixSansMedium,
            netflixSansRegular &&
              theme.typography.fontStyles.netflixSansRegular,
            style,
          ]}>
          {children}
        </IText>
      ) : null}
    </>
  );
};

export default Text;
