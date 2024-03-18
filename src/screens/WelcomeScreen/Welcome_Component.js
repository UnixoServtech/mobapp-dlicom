import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import images from '../../assets/images';
import {Button, Input, Spacing, Text} from '../../components';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import BottomModal from '../../components/BottomModal';

const Welcome_Component = ({button1Press, button2Press}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryBg,
        paddingHorizontal: theme.sizes.spacing.ph,
      }}>
      <View style={{flex: 3, alignItems: 'center'}}>
        <Spacing size={theme.sizes.spacing.xl2} />
        <Text type={'inter-medium'} size={theme.typography.fontSizes.xl}>
          {Strings.welcome}
        </Text>
        <Text type={'helper-text'} color={colors.caption}>
          {Strings.welcomeNote}
        </Text>
        <Spacing size={theme.normalize(90)} />
        <Image
          source={images.ic_wallet_image}
          resizeMode="contain"
          style={{
            width: theme.normalize(280),
            height: theme.normalize(280),
            top: 15,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button label={Strings.createNewWallet} onPress={button1Press} />
        <Spacing />
        <Button
          label={Strings.importWallet}
          variant="ghost"
          onPress={button2Press}
          themedColor={colors.primaryMainColor}
        />
      </View>
    </View>
  );
};

export default Welcome_Component;
