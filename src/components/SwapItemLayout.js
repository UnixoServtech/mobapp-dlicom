/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {theme} from '../theme';
import {useTheme} from '@react-navigation/native';
import {Pressable, Spacing, Text} from '.';
import CustomIcon from './CustomIcon';

const createStyles = colors =>
  StyleSheet.create({
    swapWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
    },
    swapRightWrapper: {
      flex: 0.45,
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
  });

const SwapItemLayout = ({
  header,
  amount,
  balance,
  isCloseIconVisible,
  selectedCurrency,
  currencyLogo,
  isSwapTo,
  onCancelPress,
  onTokenClick,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <>
      <View style={{flex: 0, padding: theme.normalize(15)}}>
        <Text
          color={colors?.swapModal?.primaryText}
          size={theme.typography.fontSizes.xss}>
          {header}
        </Text>
        <Spacing size="xs2" />
        <View style={styles.swapWrapper}>
          <View style={{flex: 0.55}}>
            <Text
              poppinsBold={true}
              color={
                isSwapTo
                  ? colors?.primaryMainColor
                  : colors?.swapModal?.primaryText
              }
              size={theme.typography.fontSizes.xl5}>
              {amount}
            </Text>
          </View>
          <View style={styles.swapRightWrapper}>
            <View style={{marginRight: theme.normalize(10)}}>
              {isCloseIconVisible ? (
                <Pressable onPress={onCancelPress}>
                  <CustomIcon
                    name={'Close_circle'}
                    color={colors?.grayLight}
                    size={theme.sizes.icons.xl}
                  />
                </Pressable>
              ) : (
                <View style={{width: theme.sizes.icons.xl}} />
              )}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: currencyLogo,
                }}
                style={styles.avatar}
              />
              <Pressable
                onPress={onTokenClick}
                style={{
                  flex: 1,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text amikoSemiBold={true}>{selectedCurrency}</Text>
                <View style={{marginLeft: 8}}>
                  <View style={{transform: [{rotate: '90deg'}]}}>
                    <CustomIcon
                      name={'chevron-right'}
                      color={colors?.text}
                      size={theme.sizes.icons.xs}
                    />
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <Spacing size="xs2" />
        <Text
          color={colors?.swapModal?.primaryText}
          size={theme.typography.fontSizes.xss}>
          Balance: {balance}
        </Text>
      </View>
    </>
  );
};

export default SwapItemLayout;
