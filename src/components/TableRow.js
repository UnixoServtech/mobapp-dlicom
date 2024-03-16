/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../theme';
import {useTheme} from '@react-navigation/native';
import {Pressable, Text} from '.';
import CustomIcon from './CustomIcon';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      borderColor: 'white',
      height: theme.normalize(60),
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

const TableRow = ({
  params,
  restTextProp,
  tittle,
  leftElement,
  rightElement,
  isLeftDisabled = false,
  isRightDisabled,
  leftIconName,
  leftIconColor,
  rightIconName = 'chevron-right',
  onPress,
  disabled,
  showHeader,
  headerLabel,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);
  let _leftIconColor = leftIconColor ?? colors?.settingsIconColor;
  const RightContent = () => {
    return rightElement ? (
      rightElement
    ) : (
      <>
        <CustomIcon
          name={rightIconName}
          color={colors?.iconColor}
          size={theme.sizes.icons.md}
        />
      </>
    );
  };

  const LeftContent = () => {
    return leftElement ? (
      leftElement
    ) : (
      <>
        <CustomIcon
          name={leftIconName}
          color={_leftIconColor}
          size={theme.sizes.icons.xl2}
        />
      </>
    );
  };
  return (
    <>
      {headerLabel && (
        <Text size={theme.typography.fontSizes.xss} color={colors?.rowHeader}>
          {headerLabel}
        </Text>
      )}
      <Pressable style={styles.wrapper} onPress={onPress} disabled={disabled}>
        {!isLeftDisabled && LeftContent()}
        <View
          style={{
            flex: 1,
            paddingHorizontal: isLeftDisabled ? 0 : theme.normalize(12),
          }}>
          <Text {...restTextProp}>{tittle}</Text>
        </View>
        {!isRightDisabled && RightContent()}
      </Pressable>
    </>
  );
};

export default TableRow;
