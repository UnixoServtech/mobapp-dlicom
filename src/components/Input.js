import React, {forwardRef} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import createStyles from './styles/Input.style';
import {Text} from '.';
import theme from '../theme';
import CustomIcon from './CustomIcon';

const RightIcon = ({
  onRightIconPress = () => {},
  rightIcon,
  isDisabled,
  rightIconStyle,
  rightIconName,
  rightIconColor,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);
  return (
    <TouchableOpacity
      onPress={onRightIconPress}
      disabled={isDisabled}
      style={[styles.searchIconStyle, rightIconStyle]}>
      {rightIcon ? (
        rightIcon
      ) : (
        <CustomIcon
          name={rightIconName}
          color={rightIconColor}
          size={theme.sizes.icons.xl2}
        />
      )}
    </TouchableOpacity>
  );
};

const LeftIcon = ({leftIcon, leftIconStyle, leftIconName, leftIconColor}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);
  return (
    <View style={[styles.leftIcnStyle, leftIconStyle]}>
      {leftIcon ? (
        leftIcon
      ) : (
        <CustomIcon
          name={leftIconName}
          color={leftIconColor}
          size={theme.sizes.icons.xl2}
        />
      )}
    </View>
  );
};

const Input = ({
  label,
  labelStyles,
  optionalLabel,
  labelTextColor,
  optionalLabelStyle,
  isDisabled = false,
  isAsDropdown = false,
  inputContainerWidth,
  inputContainerBorder,
  inputContainerBackgroundColor,
  inputContainerStyles,
  onPress,
  inputStyles,
  value,
  dropdownItemStyle,
  secureTextEntry,
  isInvalid = false,
  keyboardType = 'default',
  placeholder,
  onChangeText,
  restProps,
  onFocus,
  onBlur,
  disableFocusHandling = false,
  isRightIconVisible = false,
  rightIcon,
  rightIconName,
  rightIconColor,
  rightIconStyle,
  onRightIconPress,
  isLeftIconVisible = false,
  leftIcon,
  leftIconName,
  leftIconColor,
  leftIconStyle,
  isError,
  errorMsg,
  errorMsgStyles,
  errorTextColor,
  rightIcnDisable,
  ref,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const [isFocused, setIsFocused] = React.useState(false);

  const inputContainer = [
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 48,
      borderRadius: theme.sizes.borderRadius,
      borderWidth: 1,
      paddingHorizontal: 15,
    },
    {
      width: inputContainerWidth,
      borderColor: isFocused ? 'white' : inputContainerBorder ?? '#303437',
      backgroundColor: isFocused
        ? '#141414'
        : inputContainerBackgroundColor ?? colors.black2,
    },
    inputContainerStyles,
  ];

  const handleFocus = (focusState, callback) => {
    !disableFocusHandling && setIsFocused(focusState);
    callback();
  };

  return (
    <View>
      <View style={styles.optionalLabelContainerStyles}>
        <View>
          {label?.length > 0 && (
            <Text
              type={'label'}
              style={[styles.label, {color: labelTextColor}, labelStyles]}>
              {label}
            </Text>
          )}
        </View>
        <View>
          {optionalLabel?.length > 0 && (
            <Text
              type={'label'}
              style={[styles.optionalLabelStyles, optionalLabelStyle]}>
              {optionalLabel}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        disabled={isDisabled || !isAsDropdown}
        activeOpacity={1}
        style={inputContainer}
        onPress={onPress}>
        {isLeftIconVisible && (
          <LeftIcon
            leftIcon={leftIcon}
            leftIconStyle={leftIconStyle}
            leftIconName={leftIconName}
            leftIconColor={leftIconColor}
          />
        )}
        {isAsDropdown ? (
          <View style={[styles.input, inputStyles]}>
            <Text
              style={dropdownItemStyle}
              ellipsizeMode={'tail'}
              numberOfLines={1}>
              {value}
            </Text>
          </View>
        ) : (
          <TextInput
            ref={ref}
            secureTextEntry={secureTextEntry}
            value={value}
            editable={!isDisabled}
            keyboardType={keyboardType}
            style={[styles.input, inputStyles]}
            placeholder={placeholder}
            placeholderTextColor={colors?.gray1}
            onChangeText={onChangeText}
            onFocus={e => {
              handleFocus(true, onFocus ? () => onFocus(e) : () => {});
            }}
            onBlur={e => {
              handleFocus(false, onBlur ? () => onBlur(e) : () => {});
            }}
            {...restProps}
          />
        )}
        {isRightIconVisible && (
          <RightIcon
            onRightIconPress={onRightIconPress}
            rightIcon={rightIcon}
            isDisabled={rightIcnDisable}
            rightIconStyle={rightIconStyle}
            rightIconName={rightIconName}
            rightIconColor={rightIconColor ?? colors?.primaryMainColor}
          />
        )}
      </TouchableOpacity>
      {isError && errorMsg?.length > 0 && (
        <Text
          size={theme.typography.fontSizes.sm}
          style={[
            styles.errorMsg,
            {color: errorTextColor ?? colors?.red},
            errorMsgStyles,
          ]}>
          {errorMsg}
        </Text>
      )}
    </View>
  );
};

export default Input;
