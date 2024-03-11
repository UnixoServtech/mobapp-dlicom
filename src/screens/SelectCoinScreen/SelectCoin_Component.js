import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Text} from '../../components';
import theme from '../../theme';
import createStyles from './SelectCoin.style';

const SelectCoin_Component = ({button1Press, button2Press}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Text poppinsSemiBold={true} size={theme.typography.fontSizes.xl}>
        Dummy_Component
      </Text>
    </View>
  );
};

export default SelectCoin_Component;
