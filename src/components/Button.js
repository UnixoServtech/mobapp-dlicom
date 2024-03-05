import React from 'react';
import {Button as IButton} from 'native-base';
import theme from '../theme';
import {useTheme} from '@react-navigation/native';
import {hex2rgba} from './helper';
import {TouchableHighlight, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Pressable, Spacing, Text} from '.';
import CustomIcon from './CustomIcon';


const Button = ({
  label,
  isLoading,
  onPress,
  style,
  variant = 'solid',
  isDisabled,
  disableColor,
  themedColor,
  buttonLabelStyle,
  disableLabelColor,
  borderWidth,
  borderRadius = theme.sizes.button.radius,
  borderColor,
  isCompact,
  textProp,
  iconLeft,
  rightIcon,
  showIconRight,
  rightIconName = 'Arrow_Right',
  showIconLeft,
  leftIcon,
  leftIconName = 'Message-1',
  size = 'large',
  _iconSize,
  ...rest
}) => {
  const {colors} = useTheme();

  const getBackgroundColorStyles = () => {
    let backgroundColor =
      variant === 'solid'
        ? themedColor ?? colors.button.primaryBg
        : 'transparent';
    let borderColor =
      variant === 'link' ? '#fff' : borderColor ?? colors.button.primaryBg;

    if (isDisabled) {
      backgroundColor =
        variant === 'solid'
          ? disableColor ?? colors.button.disableBg
          : 'transparent';
      borderColor =
        variant === 'solid'
          ? disableColor ?? colors.button.disableBg
          : variant === 'link'
          ? 'transparent'
          : disableColor ?? colors.button.disableBg;
    }

    return {
      backgroundColor,
      borderColor,
    };
  };

  const containerStyle = [
    {
      borderRadius,
      borderWidth,
      paddingHorizontal: theme.sizes.button.spacing,
      height:
        size === 'large' ? theme.sizes.button.large : theme.sizes.button.small,
      ...getBackgroundColorStyles(),
    },
    isCompact && {alignSelf: 'center'},
  ];

  const labelStyle = [
    {
      textAlign: 'center',
      color: variant === 'solid' ? colors.white : themedColor,
      flex: 1,
    },
    isDisabled && {
      color: disableLabelColor ?? colors.button.textDisable,
    },
    isCompact && {
      marginHorizontal: theme.sizes.button.spacing,
      flex: 0,
    },
    buttonLabelStyle,
  ];

  const iconColor = themedColor ?? colors.white;
  const disableIconColor = disableLabelColor ?? colors.button.textDisable;
  const iconSize = _iconSize
    ? _iconSize
    : size === 'large'
    ? theme.sizes.button.largeIcon
    : theme.sizes.button.smallIcon;
  return (
    <Pressable
      onPress={onPress}
      style={[containerStyle, style]}
      disabled={isDisabled}
      {...rest}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {showIconLeft ? (
          React.isValidElement(leftIcon) ? (
            leftIcon
          ) : (
            <CustomIcon
              name={leftIconName}
              color={isDisabled ? disableIconColor : iconColor}
              size={iconSize}
            />
          )
        ) : showIconRight ? (
          <Spacing direction={'x'} size={iconSize} />
        ) : null}
        <Text type={'button'} style={labelStyle} {...textProp}>
          {label}
        </Text>
        {showIconRight ? (
          React.isValidElement(rightIcon) ? (
            rightIcon
          ) : (
            <CustomIcon
              name={rightIconName}
              color={isDisabled ? disableIconColor : iconColor}
              size={iconSize}
            />
          )
        ) : showIconLeft ? (
          <Spacing direction={'x'} size={iconSize} />
        ) : null}
      </View>
    </Pressable>
  );
};

export default Button;
