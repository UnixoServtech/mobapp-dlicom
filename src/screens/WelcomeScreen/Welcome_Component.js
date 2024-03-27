import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Button, Input, Spacing, Text} from '../../components';
import AppIntroSlider from '../../components/AppIntroSlider';
import {OnBoardItems} from '../../constants/constants';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import BottomModal from '../../components/BottomModal';

const {width, height} = Dimensions.get('window');

const Welcome_Component = ({buttonCreateNewWallet, buttonImportWallet}) => {
  const {colors} = useTheme();

  const _renderNextButton = () => {
    return (
      <View>
        <Button
          label={Strings.createNewWallet}
          onPress={buttonCreateNewWallet}
          showIconRight={true}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <>
        <Button
          label={Strings.importWallet}
          variant="ghost"
          onPress={buttonImportWallet}
          themedColor={colors.primaryMainColor}
        />
      </>
    );
  };

  const Slide = ({item}) => {
    return (
      <View style={{alignItems: 'center', width: width, flex: 1}}>
        <Image
          source={item?.image}
          style={{height: '55%', width, resizeMode: 'contain'}}
        />
        <View
          style={{
            marginTop: theme.normalize(-22),
            justifyContent: 'center',
            alignItems: 'center',
            width: '72%',
          }}>
          <Text type={'large-header'} interBold={true}>
            {item?.title}
          </Text>
          <Spacing />
          <Text
            color={colors?.grayLight}
            textAlign={'center'}
            type={'helper-text'}
            size={'smm'}
            lineHeight={theme.typography.lineHeights.lg}>
            {item?.subtitle}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryBg,
      }}>
      <Spacing size={theme.sizes.spacing.xl2} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text type={'inter-medium'} size={theme.typography.fontSizes.xl}>
          {Strings.welcome}
        </Text>
        <Text type={'helper-text'} color={colors.caption}>
          {Strings.welcomeNote}
        </Text>
      </View>
      <AppIntroSlider
        renderItem={({item}) => <Slide item={item} />}
        data={OnBoardItems}
        bottomButton
        showSkipButton
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        activeDotStyle={{backgroundColor: colors?.primaryMainColor}}
        dotStyle={{backgroundColor: colors?.gray1}}
      />
    </View>
  );
};

export default Welcome_Component;
