import React from 'react';
import {Image, View} from 'react-native';
import theme from '../../theme';
import images from '../../assets/images';
import styles from './Splash.styles';
import {useTheme} from '@react-navigation/native';

const Splash_Component = ({params}) => {
  const {colors} = useTheme();
  console.log({colors});
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primaryBg,
        },
      ]}>
      <Image
        resizeMode="contain"
        source={images.ic_splash_logo}
        style={styles.imageContainer}
      />
    </View>
  );
};

export default Splash_Component;
