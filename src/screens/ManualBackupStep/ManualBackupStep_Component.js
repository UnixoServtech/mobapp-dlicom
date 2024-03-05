import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import images from '../../assets/images';
import { Button, Header, Pressable, Spacing, Text } from '../../components';
import CustomIcon from '../../components/CustomIcon';
import theme from '../../theme';
import createStyles from './ManualBackupStep.style';

const ManualBackupStep_Component = ({
  headerLeftText,
  onPressLeftContent,
  headerText,
  noteText,
  seedPhraseHidden,
  revealSeedPhrase,
  btn1Label,
  btn2Label,
  copyButton,
  copyPress,
  seedPhrase,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        noBorder={false}
        leftText={headerLeftText}
        onPressLeftContent={onPressLeftContent}
      />
      <View style={styles.wrapper}>
        <Text type={'device-header'} amikoBold>
          {headerText}
        </Text>
        <Spacing size={'md'} />
        <Text
          amikoRegular={true}
          lineHeight={theme.typography.lineHeights.lg}
          color={colors.grayLight}>
          {noteText}
        </Text>
        <View style={styles.seedPhraseWrapper}>
          <View style={{flex: 0.85, padding: 12}}>
            <Text
              archivoRegular={true}
              size={theme.typography.fontSizes.xs}
              color={'#606060'}>
              Seed Phrase
            </Text>
            <Spacing size="5" />
            <Text type={'helper-text'} amikoBold={true} lineHeight={24}>
              {seedPhrase}
            </Text>
            {seedPhraseHidden && (
              <Image
                source={images.Rectangle_9}
                resizeMode="stretch"
                style={styles.blurView}
              />
            )}
          </View>

          <View style={{width: 1, backgroundColor: '#27282B'}} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flex: 0.15,
            }}>
            <Pressable onPress={revealSeedPhrase}>
              <CustomIcon
                name={seedPhraseHidden ? 'Eye' : 'Eye_off1'}
                color={colors.text}
                size={theme.sizes.icons.xl2}
              />
            </Pressable>
          </View>
        </View>
        <Spacing size="md" />
        <View style={{alignItems: 'flex-start'}}>
          <Button
            label={copyButton}
            isCompact={true}
            leftIconName="Copy"
            showIconLeft={true}
            variant="link"
            themedColor={colors.text}
            textProp={{
              amikoRegular: true,
              size: theme.typography.fontSizes.smm,
            }}
            onPress={copyPress}
          />
        </View>
      </View>
      <View style={{margin: theme.sizes.spacing.ph}}>
        <Button
          themedColor={colors.button.disableBg}
          label={btn1Label}
          textProp={{
            amikoBold: true,
            color: colors.text,
          }}
        />
        <Spacing size="md" />
        <Button label={btn2Label} variant="link" themedColor={colors.text} />
      </View>
    </View>
  );
};

export default ManualBackupStep_Component;
