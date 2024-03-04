import React from 'react';
import {Button as IButton} from 'native-base';
import theme from '../theme';
import {useTheme} from '@react-navigation/native';
import {hex2rgba} from './helper';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Spacing, Text} from '.';
import CustomIcon from './CustomIcon';

const Radio = ({
  radioButtonContainer,
  onChange,
  selected,
  activeColor,
  _borderColor,
  disabled,
  disableBorderColor,
  deactiveColor,
  radioButtonStyle,
  boxActiveBgColor,
  boxDeactiveBgColor,
  circleSize = theme.sizes.icons.xl2,
  sizeInner = theme.normalize(5),
  ...rest
}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  const getBackgroundColorStyles = () => {
    let backgroundColor = selected
      ? activeColor ?? colors.radio.background
      : 'transparent';

    let borderColor = _borderColor ?? colors.radio.borderColor;

    if (disabled) {
      backgroundColor = selected
        ? deactiveColor ?? colors.radio.disableBackground
        : 'transparent';
      borderColor = disableBorderColor ?? colors.radio.disableBorderColor;
    }

    return {
      backgroundColor,
      borderColor,
    };
  };

  const getBgColorStyle = () => {
    let backgroundColor = selected
      ? boxActiveBgColor ?? colors.white
      : 'transparent';

    if (disabled) {
      backgroundColor = selected
        ? boxDeactiveBgColor ?? colors.radio.disableInnerBg
        : 'transparent';
    }
    return {
      backgroundColor,
    };
  };

  const containerStyle = [
    {
      height: selected ? circleSize : circleSize - 4,
      width: selected ? circleSize : circleSize - 4,
      borderRadius: (selected ? circleSize : circleSize - 4) / 2,
      borderWidth: selected ? 0 : 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      ...getBackgroundColorStyles(),
    },
    radioButtonStyle,
  ];

  const selectedRadioStyle = [
    {
      height: circleSize - 15,
      width: circleSize - 15,
      borderRadius: (circleSize - 15) / 2,
      ...getBgColorStyle(),
    },
  ];

  return (
    <View style={radioButtonContainer}>
      <TouchableOpacity
        onPress={onChange}
        style={containerStyle}
        disabled={disabled}>
        {selected ? <View style={selectedRadioStyle} /> : null}
      </TouchableOpacity>
    </View>
  );
};
const createStyles = colors =>
  StyleSheet.create({
    radioButton: {
      height: theme.sizes.icons.xl2,
      width: theme.sizes.icons.xl2,
      backgroundColor: colors.radio.background,
      borderRadius: theme.sizes.icons.xl2 / 2,
      borderWidth: 1,
      borderColor: colors.radio.borderColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButtonIcon: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: 'white',
    },
  });

export default Radio;
