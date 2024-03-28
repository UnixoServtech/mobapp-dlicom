import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Text} from '.';
import theme from '../theme';
import CustomIcon from './CustomIcon';
import createStyles from './styles/Input.style';

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

const Input = React.forwardRef(
  (
    {
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
      onSubmitEditing,
      returnKeyType,
    },
    ref,
  ) => {
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
        borderColor: isFocused
          ? colors?.textInput?.focusBorderColor
          : inputContainerBorder ?? colors?.textInput?.borderColor,
        backgroundColor: isFocused
          ? colors?.textInput?.focusBackgroundColor
          : inputContainerBackgroundColor ?? colors?.textInput?.backgroundColor,
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
                style={[
                  styles.label,
                  {color: labelTextColor ?? colors?.textInput?.label},
                  labelStyles,
                ]}>
                {label}
              </Text>
            )}
          </View>
          <View>
            {optionalLabel?.length > 0 && (
              <Text
                type={'label'}
                color={colors?.textInput?.label}
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
              leftIconColor={leftIconColor ?? colors?.textInput?.iconColor}
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
              placeholderTextColor={colors?.textInput?.placeHolderColor}
              onChangeText={onChangeText}
              onFocus={e => {
                handleFocus(true, onFocus ? () => onFocus(e) : () => {});
              }}
              onBlur={e => {
                handleFocus(false, onBlur ? () => onBlur(e) : () => {});
              }}
              onSubmitEditing={onSubmitEditing}
              focusable={true}
              returnKeyType={returnKeyType}
              {...restProps}
            />
          )}
          {isError && (
            <CustomIcon
              name={'alert_circle'}
              color={errorTextColor ?? colors?.red}
              size={theme.sizes.icons.xl2}
            />
          )}
          {(isRightIconVisible || isAsDropdown) && (
            <RightIcon
              onRightIconPress={onRightIconPress}
              rightIcon={rightIcon}
              isDisabled={rightIcnDisable}
              rightIconStyle={rightIconStyle}
              rightIconName={
                isAsDropdown ? rightIconName ?? 'dropdown' : rightIconName
              }
              rightIconColor={rightIconColor ?? colors?.textInput?.iconColor}
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
  },
);

export default Input;
