/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import theme from '../theme';
import {Spacing, Text, Pressable} from '.';
import images from '../assets/images';
import {useTheme} from '@react-navigation/native';
import createStyles from './styles/TokenHistoryDetail.style';
import CustomIcon from './CustomIcon';

const TokenHistoryDetail = ({
  avatarLink,
  walletInfo,
  isBalanceInfoHidden = true,
  balanceValue,
  gasInfoPress,
  gasValue,
  transferStatus,
  maxGasFee,
  totalAmount,
  totalMaxAmount,
  isHideGasInfoHidden = false,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);
  return (
    <View>
      <View style={styles.wrapper1}>
        <Image
          source={{
            uri: avatarLink,
          }}
          style={styles.icon}
          defaultSource={images.ic_place_holder}
        />
        <View style={{marginLeft: theme.normalize(5), flex: 1}}>
          <Text amikoSemiBold={true}>{walletInfo}</Text>
          {!isBalanceInfoHidden && (
            <Text
              size={theme.typography.fontSizes.xss}
              amikoRegular={true}
              color={'#606060'}>
              Balance:{balanceValue}
            </Text>
          )}
        </View>
      </View>
      {!isHideGasInfoHidden ? (
        <>
          <Spacing size="md" />
          <View style={styles.wrapper2}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.gasWrapper}>
                  <Text
                    amikoSemiBold={true}
                    size={theme.typography.fontSizes.xss}>
                    Estimated gas fee
                  </Text>
                  <Spacing direction="x" size={4} />
                  <Pressable onPress={gasInfoPress}>
                    <CustomIcon
                      name={'info_circle1'}
                      color={'#BCC0C4'}
                      size={theme.normalize(13)}
                    />
                  </Pressable>
                </View>
                <Spacing direction="x" size={10} />
                <View
                  style={{
                    flex: 0.5,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <View style={styles.gasUnderLine}>
                    <Text
                      textAlign={'left'}
                      amikoBold={true}
                      size={theme.typography.fontSizes.xss}
                      color={colors?.primaryMainColor}>
                      {gasValue}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 1, marginTop: 5}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 0.5,
                  }}>
                  <Text
                    amikoRegular={true}
                    color={'#53A451'}
                    size={theme.typography.fontSizes.xs}>
                    {transferStatus}
                  </Text>
                </View>
                <Spacing direction="x" size={10} />
                <View
                  style={{
                    flex: 0.5,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <Text
                    textAlign={'left'}
                    amikoRegular={true}
                    size={theme.typography.fontSizes.xs}
                    color={colors?.gray1}>
                    {`Max fee:${maxGasFee}`}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#D9D9D9',
                marginTop: theme.sizes.spacing.sm,
              }}
            />
            <View style={{flex: 1, marginTop: theme.normalize(13)}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.5,
                  }}>
                  <Text
                    amikoSemiBold={true}
                    size={theme.typography.fontSizes.xss}>
                    Total
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    alignItems: 'flex-end',
                  }}>
                  <Text
                    textAlign={'left'}
                    amikoBold={true}
                    size={theme.typography.fontSizes.xss}>
                    {totalAmount}
                  </Text>
                </View>
              </View>
              <Spacing size={5} />
              <View
                style={{
                  flex: 0.8,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <Text
                  textAlign={'left'}
                  amikoRegular={true}
                  size={theme.typography.fontSizes.xs}
                  color={colors?.gray1}>
                  {`Max amount:${totalMaxAmount}`}
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default TokenHistoryDetail;
