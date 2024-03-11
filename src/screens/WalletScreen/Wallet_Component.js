import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Pressable, Spacing, Text} from '../../components';
import theme from '../../theme';
import createStyles from './Wallet.style';

const Wallet_Component = ({onPress, onPress1}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <View style={{margin: 50}}>
        <Pressable onPress={onPress}>
          <Text poppinsSemiBold={true} size={theme.typography.fontSizes.xl}>
            Wallet Test Button
          </Text>
        </Pressable>
        <Spacing />
        <Pressable onPress={onPress1}>
          <Text poppinsSemiBold={true} size={theme.typography.fontSizes.xl}>
            Chose Coin
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Wallet_Component;
