import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Pressable, Text} from '../../components';
import theme from '../../theme';
import createStyles from './Wallet.style';

const Wallet_Component = ({onPress}) => {
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
      </View>
    </View>
  );
};

export default Wallet_Component;
