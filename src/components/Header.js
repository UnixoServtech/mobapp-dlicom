import React from 'react';
import {Button as IButton} from 'native-base';
import theme from '../theme';
import {useTheme} from '@react-navigation/native';
import {hex2rgba} from './helper';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {Spacing, Text,Pressable} from '.';
import CustomIcon from './CustomIcon';

const Header = ({
  isRightDisabled = false,
  isLeftDisabled = false,
  isCenterDisabled = false,
  innerRowContainerStyle,
  containerStyle,
  leftContainerStyle,
  centerContainerStyle,
  rightContainerStyle,
  noBorder = false,
  label,
  backgroundColor,
  themedColor,
  size,
  borderColor,
  centerElement,
  centerTextStyle,
  centerTextRest,
  //Left Side Prop
  leftElement,
  leftText = '',
  leftTextStyle,
  leftIcon,
  onPressLeftContent = () => {},
  isBackVisible,
  leftIconStyle,
  isLeftIconHidden = false,
  iconColor,
  rightElement,
  rightContent,
  isCenterRight = true,
  ...rest
}) => {
  const {colors} = useTheme();
  let _themedColor = themedColor ?? colors.text;
  const _iconColor = iconColor ?? colors.text;

  const headerContainer = [
    {
      paddingHorizontal: theme.sizes.spacing.ph,
      height: 64,
      //   borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: borderColor ?? colors.headerBorder,
      backgroundColor: backgroundColor ?? colors.headerBg,
    },
    noBorder && {borderBottomWidth: 0},
    containerStyle,
  ];

  const CenterContent = () => {
    const isJSX = React.isValidElement(centerElement);
    if (centerElement && isJSX) {
      return centerElement;
    } else if (centerElement && typeof centerElement === 'string') {
      return (
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          type={'device-header'}
          color={_themedColor}
          {...centerTextRest}
          style={centerTextStyle}>
          {centerElement}
        </Text>
      );
    } else {
      return;
    }
  };

  const LeftContent = () => {
    return leftElement ? (
      leftElement
    ) : (
      <View style={styles.leftContent}>
        {!isLeftIconHidden && (
          <Pressable
            onPress={onPressLeftContent}
            style={[styles.leftContent, leftIconStyle]}>
            {leftIcon ? (
              leftIcon
            ) : (
              <CustomIcon
                name={'chevron-left'}
                color={_iconColor}
                size={theme.sizes.icons.xl2}
              />
            )}
            {leftText?.length > 0 && (
              <Text
                style={leftTextStyle}
                size={theme.typography.fontSizes.lg}
                color={_themedColor}>
                {leftText}
              </Text>
            )}
          </Pressable>
        )}
      </View>
    );
  };

  const RightContent = () => {
    return rightElement ? (
      rightElement
    ) : (
      <>
        {rightContent?.map((item, _index) => (
          <HeaderRightContent key={_index} {...{...item}} />
        ))}
      </>
    );
  };

  const HeaderRightContent = rightContentProp => {
    const {
      icon,
      iconColor = _iconColor,
      size,
      text = '',
      textStyle,
      onPressRightContent = () => {},
    } = rightContentProp;
    return (
      <Pressable
        onPress={() => onPressRightContent && onPressRightContent(icon ?? text)}
        style={[
          styles.rightElementStyle,
          {paddingLeft: rightContent?.length > 0 ? 10 : 2},
        ]}>
        {icon && (
          <CustomIcon
            name={icon}
            color={iconColor}
            size={size ?? theme.sizes.icons.xl2}
          />
        )}
        {text?.length > 0 && (
          <Text size={theme.typography.fontSizes.lg} style={textStyle}>
            {text}
          </Text>
        )}
      </Pressable>
    );
  };

  return (
    <View style={headerContainer}>
      <View style={[styles.innerRowContainer, innerRowContainerStyle]}>
        <View style={[leftContainerStyle]}>
          {!isLeftDisabled && <LeftContent />}
        </View>
        {!isCenterDisabled && (
          <View style={[styles.centerContainer, centerContainerStyle]}>
            <CenterContent />
          </View>
        )}
        <View style={[styles.rightContainer, rightContainerStyle]}>
          {!isRightDisabled && <RightContent />}
          {isCenterRight && <View style={{width: theme.sizes.icons.xl2}} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerRowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

    flexDirection: 'row',
  },
  centerContainer: {
    alignItems: 'center',
    flex: 3,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rightElementStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
