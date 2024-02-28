import React from 'react';
import {Image, View} from 'react-native';
import theme from '../../theme';
import images from '../../assets/images';
import styles from './Welcome.style';
import {useTheme} from '@react-navigation/native';
import CustomIcon from '../../components/CustomIcon';
import Strings from '../../localization/Strings';
import {Spacing, Text, Button} from '../../components';

const Welcome_Component = ({params}) => {
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
        <Spacing size={theme.normalize(80)} />
        <Image
          source={images.ic_wallet_image}
          resizeMode="contain"
          style={{width: theme.normalize(280), height: theme.normalize(280)}}
        />
      </View>
      <View
        style={{
          flex: 2,
          borderColor: 'blue',
          // borderWidth: 1,
          justifyContent: 'center',
        }}>
        <Button
          label={Strings.createNewWallet}
          onPress={() => alert('test')}
          showIconRight
          showIconLeft={true}
        />
        <Spacing />
        <Button
          label={Strings.importWallet}
          _pressed={{
            backgroundColor: '#000',
          }}
          variant="ghost"
          onPress={() => alert('test2')}
          themedColor={colors.primaryMainColor}
        />
        <Spacing />
        <Button
          label={Strings.importWallet}
          variant="link"
          onPress={() => alert('test2')}
          style={{}}
          borderWidth={1}
          showIconLeft={true}
          isCompact={true}
          size={'small'}
        />
      </View>
    </View>
  );
};

export default Welcome_Component;

{
  /* <CustomIcon
name="Mic-off"
color={colors.text}
size={theme.sizes.icons.md}
/> */
}
